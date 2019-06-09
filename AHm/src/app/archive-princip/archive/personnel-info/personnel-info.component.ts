import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ArchiveService} from "../../serviceArchive/archive.service";
import {FormLoginserve} from "../../../login-princip/ServiceLogin/fromLogin";
import {ArchiveForm2Service} from "../../serviceArchive/archive-form2.service";
import {MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-personnel-info',
  templateUrl: './personnel-info.component.html',
  styleUrls: ['./personnel-info.component.css']
})
export class PersonnelInfoComponent implements OnInit {

  isActive = true;

  x:any;
  constructor(private http: HttpClient ,private formarchives : ArchiveForm2Service
              , public archiveService:ArchiveService, private serviceLogin :FormLoginserve,public dialogRef: MatDialogRef<PersonnelInfoComponent>) { }

  imageUrl: string ;
  ngOnInit() {
    this.geTUser();
    this.serviceLogin.IsUserLogedOut(localStorage.getItem("token"));
  }

  geTUser(){
    let value = this.formarchives.formArchive.value;
    this.archiveService.getUser(value.cniPersonnel)
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
