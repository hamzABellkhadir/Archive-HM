import { Component, OnInit } from '@angular/core';
import {FormLoginserve} from "../ServiceLogin/fromLogin";
import {ServiceAuthentification} from "../ServiceLogin/authentification.service";
import {HttpClient} from "@angular/common/http";
import {replaceNgsp} from "@angular/compiler/src/ml_parser/html_whitespaces";

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {

  constructor(public formLoginService : FormLoginserve) { }

  ngOnInit() {
  }

  hide= true;
  onSubmit(){
    this.formLoginService.login(this.formLoginService.formLogin.value);
  }
}
