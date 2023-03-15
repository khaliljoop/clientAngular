import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Convert } from 'src/app/models/convert.=model';
import { MyserviceService } from 'src/app/service/myservice.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

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
      },
    
    });
  }

}
