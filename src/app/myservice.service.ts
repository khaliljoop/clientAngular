import { Injectable, NgZone } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { SSEService } from './sse.service';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  private apiServiceUrl=environment.baseUrl;
  constructor (private ngZone:NgZone,private sseService:SSEService,private http?:HttpClient){}


public getId(id: String): Observable<any>{
  return this.http!.get<any>(`${this.apiServiceUrl}get/`+id);
}

getSSE(url:string){
  
  return new Observable((observer: Observer<any>) => {
    const eventSource= this.sseService.getEventSource(url);
   eventSource.onmessage=event=>{
      this.ngZone.run(()=>{
        observer.next(event);
        console.log("event "+event)
      });
   }
   eventSource.onerror=event=>{
    this.ngZone.run(()=>{
      observer.error(event);
      console.log("event error "+event)
    });
 }
});
}
}
