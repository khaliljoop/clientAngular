import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Convert } from './models/convert.=model';
import { MyserviceService } from './service/myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'intToRomain';

  constructor(){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
 
  
  
}
