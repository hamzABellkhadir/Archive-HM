import { Component, OnInit } from '@angular/core';
import {FormLoginserve} from "../../login-princip/ServiceLogin/fromLogin";
import {Router} from "@angular/router";

@Component({
  selector: 'app-parametre',
  templateUrl: './parametre.component.html',
  styleUrls: ['./parametre.component.css']
})
export class ParametreComponent implements OnInit {

  constructor( private serviceLogin :FormLoginserve,public router : Router) { }

  ngOnInit() {
    this.serviceLogin.IsUserLogedOut(localStorage.getItem('token'));

  }
  isAdmin(){
  if(!this.serviceLogin.isAdmin(localStorage.getItem('token'))){
    this.router.navigateByUrl('/');
  }
  }

}
