import { Component, OnInit } from '@angular/core';
import {ArchiveForm2Service} from "../../../serviceArchive/archive-form2.service";
import {MatDialog, MatDialogRef} from "@angular/material";
import {ArchiveService} from "../../../serviceArchive/archive.service";
import {NotificationUService} from "../../../../login-princip/ServiceLogin/NotificationU";

@Component({
  selector: 'app-ajouter-asee',
  templateUrl: './ajouter-asee.component.html',
  styleUrls: ['./ajouter-asee.component.css']
})
export class AjouterASEEComponent implements OnInit {

  constructor(public formarchives : ArchiveForm2Service ,
              public dialog: MatDialog,
              private archiveServe : ArchiveService,
              public dialogRef: MatDialogRef<AjouterASEEComponent>,private notification :NotificationUService) { }

  AM = localStorage.getItem("am").toLowerCase() == 'true' ? true : false;
  ngOnInit() {
  }


  onClose() {
    this.formarchives.formArchive.reset();
    this.formarchives.initialisation_archive();
    this.onClear;
    this.dialogRef.close();
  }

  onClear(){
    this.formarchives.initialisation_archive();
  }
  modifier_ArchiveSEE(value){
    this.formarchives.modifierArchiveFDSSEE(value,"see");
    this.onClose();
  }
  modifier_ArchiveFDS(value){
    this.formarchives.modifierArchiveFDSSEE(value,"fds");
    this.onClose();
  }
}
