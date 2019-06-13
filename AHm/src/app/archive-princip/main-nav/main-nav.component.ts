import {HttpClient} from "@angular/common/http";
import {Component, OnInit} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {MatTableDataSource} from "@angular/material";
import {Router} from "@angular/router";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {fadeAnimation} from "./animation";
import {FormLoginserve} from "../../login-princip/ServiceLogin/fromLogin";
import {ArchiveService} from "../serviceArchive/archive.service";


@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css'],
  animations: [fadeAnimation]
})
export class MainNavComponent implements OnInit{


  x:any;



  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  private aaa: null;

  constructor(private http: HttpClient ,private breakpointObserver: BreakpointObserver
              , public router : Router, private serviceLogin :FormLoginserve, private archiveServe : ArchiveService) {}

  logout(){
    this.router.navigateByUrl('/');
    localStorage.removeItem("token");
  }

  ngOnInit(): void {
    this.serviceLogin.IsUserLogedOut(localStorage.getItem('token'));
    this.number_doc();
    this.router.navigateByUrl("menu/accueil");
  }

  count_doc;
  number_doc(){
      this.archiveServe.getAllArchive("fds").subscribe(data=>{
          this.count_doc = data;
        })
  }


  isAd(){
    return this.serviceLogin.isAdmin(localStorage.getItem('token'));
  }


}
