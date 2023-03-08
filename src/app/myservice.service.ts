import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  private apiServiceUrl=environment.baseUrl;
  constructor (private http?:HttpClient){}


public getValues(): Observable<any[]>{
    return this.http!.get<any[]>(`${this.apiServiceUrl}`);
}

public getId(id: String): Observable<any>{
  return this.http!.get<any>(`${this.apiServiceUrl}get/`+id);
}

public addValue(v: any): Observable<any>{
  return this.http!.post(`${this.apiServiceUrl}api/add`, v);
}
}
