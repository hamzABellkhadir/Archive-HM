import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material";
import {ArchiveService} from "../../../serviceArchive/archive.service";
import {NotificationUService} from "../../../../login-princip/ServiceLogin/NotificationU";
import {ArchiveForm2Service} from "../../../serviceArchive/archive-form2.service";

@Component({
  selector: 'app-ajouter-achivev',
  templateUrl: './ajouter-achivev.component.html',
  styleUrls: ['./ajouter-achivev.component.css']
})
export class AjouterAchivevComponent implements OnInit {

  constructor(public formarchives : ArchiveForm2Service ,
              public dialog: MatDialog,
              private archiveServe : ArchiveService,
              public dialogRef: MatDialogRef<AjouterAchivevComponent>,private notification :NotificationUService) { }

  AM = localStorage.getItem("am").toLowerCase() == 'true' ? true : false;

  isLinear = false;
  namephoto =this.imgphoto();
  imageUrl: string = "../../../assets/img/img-v/"+this.namephoto;
  fileToUpload: File = null;
  imagePersonnel;

  ngOnInit() {
  }


  imgphoto(){
    if(this.formarchives.formArchive.get("img_v").value !="")
      return this.formarchives.formArchive.get("img_v").value;
    else return "fichier.png";
  }

  onFileInput(event){
    this.imagePersonnel = event.target.files[0];
  }

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    //Show image preview
    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.imageUrl = event.target.result;

    }
    reader.readAsDataURL(this.fileToUpload);
  }




  onClose() {
    this.formarchives.formArchive.reset();
    this.formarchives.initialisation_archive()
    this.dialogRef.close();
  }


  ajouter_ArchiveEX(value){
    if(this.imagePersonnel == undefined){
      this.notification.success("il faut ajouter une image")
    }else{
      this.formarchives.ajouterArchiveEX(value,this.imagePersonnel);
      this.onClear();
      this.onClose();

    }

  }

  modifier_ArchiveEX(value){
    if(this.imagePersonnel == undefined){

      this.formarchives.modifierArchiveEX(value,null);
    }else{
      this.formarchives.modifierArchiveEX(value,this.imagePersonnel);
    }
    this.onClear();
    this.onClose();
  }

  onClear(){
    this.formarchives.initialisation_archive();
  }

}
