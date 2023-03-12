import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Convert } from './convert.=model';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'intToRomain';

  constructor(private formBuilder:FormBuilder,private service:MyserviceService){}
  userForm!: FormGroup;
  romain!:string;
  values:Convert[]=[]
  chffer_romain=""
  ngOnInit(): void {

    this.initForm();
    this.getmessage();
   
  }

  getmessage(){
    this.service.getSSE("http://localhost:8000").subscribe({
      next:(data)=>{
        this.romain=data.data;
        console.log("sending sse...",data)
      },
      error:(e)=>{
        console.log("sending sse error...",e)
      }
    });
  }
  initForm()
  {
    this.userForm=this.formBuilder.group({
      entier:[0,Validators.max(100)],
    });
  }

  addValue(){
    const form=this.userForm.value;
    var v=form['entier'];
    this.service.getId(v).subscribe({
      next:(res)=>{
        console.log("res.........",res)
        this.values=res;
        this.chffer_romain=this.values[0].romain
      }
    });
  }
  
}
