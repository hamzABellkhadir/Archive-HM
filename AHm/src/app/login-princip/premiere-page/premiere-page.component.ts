import { Component, OnInit } from '@angular/core';
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {FormLoginserve} from "../ServiceLogin/fromLogin";

@Component({
  selector: 'app-premiere-page',
  templateUrl: './premiere-page.component.html',
  styleUrls: ['./premiere-page.component.css']
})
export class PremierePageComponent implements OnInit {


  constructor(private breakpointObserver: BreakpointObserver , protected LoginService : FormLoginserve ) { }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );


  ngOnInit() {
    this.LoginService.IsUserLogedOin(localStorage.getItem('token'));
  }

}
