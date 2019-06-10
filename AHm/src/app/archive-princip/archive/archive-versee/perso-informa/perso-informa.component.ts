import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ArchiveForm2Service} from "../../../serviceArchive/archive-form2.service";
import {ArchiveService} from "../../../serviceArchive/archive.service";
import {FormLoginserve} from "../../../../login-princip/ServiceLogin/fromLogin";
import {MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-perso-informa',
  templateUrl: './perso-informa.component.html',
  styleUrls: ['./perso-informa.component.css']
})
export class PersoInformaComponent implements OnInit {

  x:any;
  constructor(private http: HttpClient ,private formarchives : ArchiveForm2Service
    , public archiveService:ArchiveService, private serviceLogin :FormLoginserve,public dialogRef: MatDialogRef<PersoInformaComponent>) { }

  imageUrl: string ;
  ngOnInit() {
    this.geTUser();
    this.serviceLogin.IsUserLogedOut(localStorage.getItem("token"));
  }

  geTUser(){
    let value = this.formarchives.formPersArchi.value;
    this.archiveService.getUser(value.id)
      .subscribe(data => {
          this.x=data;
          this.imageUrl= "../../../assets/img/img-personnel/"+this.x.photo;
        },error1 => {
          console.log(error1);
        }
      )
  }

  onClose() {
    this.formarchives.formArchive.reset();
    this.formarchives.initialisation_archive();
    this.dialogRef.close();
  }

}
