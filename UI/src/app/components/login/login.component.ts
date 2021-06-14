import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from 'src/app/service/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private appService: AppService) { }
  form = new FormGroup({
  uname: new FormControl('',[Validators.required]),
  password:new FormControl('',[Validators.required])
  });

  ngOnInit(): void {
  }

  login(data){
    console.warn(data);
  }
  clearAll(){
    this.form.get('password').setValue("");
    this.form.get('uname').setValue("");
  }
}
