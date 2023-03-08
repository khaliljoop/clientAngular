import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Convert } from './convert.=model';
import { MyserviceService } from './myservice.service';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'intToRomain';

  constructor(private formBuilder:FormBuilder,private service:MyserviceService){}
  
  userForm!: FormGroup;
  //@Input() romain$!: Observable<any>;
  romain=""
  values:Convert[]=[]
  chffer_romain=""
  ngOnInit(): void {

    this.initForm();
    this.service.getValues().subscribe({
      next:(res)=>{
        if(this)
          this.romain=res[0].romain
         
      }
    })
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
        this.values=res;
        this.chffer_romain=this.values[0].romain
      }
    });
  }
}
