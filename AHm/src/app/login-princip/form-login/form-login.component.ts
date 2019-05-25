import { Component, OnInit } from '@angular/core';
import {FormLoginserve} from "../ServiceLogin/fromLogin";

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {

  constructor(protected formLoginService : FormLoginserve) { }

  ngOnInit() {
  }

  hide= true;
  onSubmit(){
    console.log(this.formLoginService.formLogin.value);
  }
}
