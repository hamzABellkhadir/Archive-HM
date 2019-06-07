import {HttpClient} from "@angular/common/http";
import { Component, OnInit } from '@angular/core';
import {ArchiveService} from "../serviceArchive/archive.service";
import {FormLoginserve} from "../../login-princip/ServiceLogin/fromLogin";


@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  isActive = true;

x:any;
  constructor(private http: HttpClient , public archiveService:ArchiveService, private serviceLogin :FormLoginserve) { }

  ngOnInit() {
    this.geTUser();
    this.serviceLogin.IsUserLogedOut(localStorage.getItem("token"));
  }

  geTUser(){
    this.archiveService.getUser(this.serviceLogin.parseJWT(localStorage.getItem("token")).sub)
      .subscribe(data => {
        this.x=data;
      },error1 => {
        console.log(error1);
          }
        )
  }
    //this.http.get(""){
  // }
}
