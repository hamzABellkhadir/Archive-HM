import { Injectable } from '@angular/core';
import {ArchiveService} from "./archive.service";
import {DatePipe} from "@angular/common";
import {NotificationUService} from "../../login-princip/ServiceLogin/NotificationU";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class ArchiveForm2Service {

  constructor(private servicegl : ArchiveService ,private datePipe: DatePipe,private notification :NotificationUService) { }

  formArchive: FormGroup = new FormGroup({
    id: new FormControl(null),
    reference_boite: new FormControl(''),
    referencedossier: new FormControl(''),
    nom_projet: new FormControl(''),
    raison_social:  new FormControl(''),
    localisation: new FormControl(''),
    observation :new FormControl(''),
    suivi: new FormControl(''),
    etat: new FormControl(''),
    img_v: new FormControl(''),
    img_c: new FormControl(''),
    cniPersonnel :new FormControl(''),
    date_sortie: new FormControl(''),
    date_premier_rentrer: new FormControl(''),
    date_recuperation: new FormControl(''),
    datefinrecuperation: new FormControl(''),
  });

  formPersArchi: FormGroup = new FormGroup({
    id: new FormControl(''),
  });
  initialisation_PersArchi(value) {
    this.formPersArchi.setValue({
      id:value,
    })
  }

  initialisation_archive() {
    this.formArchive.setValue({
      id:null,
      reference_boite:"",
      referencedossier:"",
      nom_projet:"",
      raison_social:"",
      localisation:"",
      observation:"",
      suivi:'',
      etat:"",
      img_v:"",
      img_c:"",
      cniPersonnel:"",
      date_sortie:"",
      date_premier_rentrer:"",
      date_recuperation:"",
      datefinrecuperation:''
    });
  }

  initialisation_archive1(value) {
    this.formArchive.setValue({
      id:value.id,
      reference_boite:value.reference_boite,
      referencedossier:value.referencedossier,
      nom_projet:value.nom_projet,
      raison_social:value.raison_social,
      localisation:value.localisation,
      observation:value.observation,
      suivi:value.suivi,
      etat:value.etat,
      img_v:value.img_v,
      img_c:value.img_c,
      date_sortie: this.datePipe.transform(value.date_sortie, 'yyyy-MM-dd'),
      date_premier_rentrer: this.datePipe.transform(value.date_premier_rentrer, 'yyyy-MM-dd'),
      date_recuperation: this.datePipe.transform(value.date_recuperation, 'yyyy-MM-dd'),
      datefinrecuperation:  this.datePipe.transform(value.datefinrecuperation, 'yyyy-MM-dd'),

      cniPersonnel:value.cniPersonnel
    });
  }
  initialisation_archive2(value) {

    this.formArchive.setValue({
      id:value.id,
      reference_boite:value.reference_boite,
      referencedossier:value.referencedossier,
      nom_projet:value.nom_projet,
      raison_social:value.raison_social,
      localisation:value.localisation,
      observation:value.observation,
      suivi:value.suivi,
      etat:value.etat,
      img_v:value.img_v,
      img_c:value.img_c,
      date_sortie: this.datePipe.transform(value.date_sortie, 'yyyy-MM-dd'),
      date_premier_rentrer: this.datePipe.transform(value.date_premier_rentrer, 'yyyy-MM-dd'),
      date_recuperation: this.datePipe.transform(value.date_recuperation, 'yyyy-MM-dd'),
      datefinrecuperation:  this.datePipe.transform(value.datefinrecuperation, 'yyyy-MM-dd'),

      cniPersonnel:value.personnel.id
    });
  }

  ajouterArchiveEX(value , img){
    let  x;
    let formdata =new FormData();
    this.servicegl.saveArchiveEx(value).subscribe(data=>{
      x=data;
      console.log(x);
      formdata.append('file' ,img);
      formdata.append('id',x.id);
      this.servicegl.saveImgArchiveV(formdata).subscribe(data=>{
        },error => {
          console.log(error);
          this.notification.success1(error.error.message)
        }
      );
      this.notification.success1("Vous avez ajouter un Archive");
    },error => {
      this.notification.success(error.error.message)
    });
  }

  modifierArchiveEX(value , img){
    let formdata =new FormData();
    let x;
    this.servicegl.updateArchiveEx(value).subscribe(data=>{
        x = data;
      if(img != null){
        formdata.append('id',x.id);
          formdata.append('file' ,img);
          this.servicegl.saveImgArchiveV(formdata).subscribe(data=>{
          })
      }
      this.notification.success1("Vous avez Modifier un Personnel")
    },error => {
      this.notification.success(error.error.message)
    })
  }

  modifierArchiveSR(value , img){
    let formdata =new FormData();
    let x;
    value.etat = "sr";
    this.servicegl.updateArchiveEx(value).subscribe(data=>{
      x = data;
      if(img != null){
        formdata.append('id',x.id);
        formdata.append('file2' ,img);
        this.servicegl.saveImgArchiveC(formdata).subscribe(data=>{
          })
        }
      this.notification.success1("Vous avez Modifier un Personnel")
    },error => {
      this.notification.success(error.error.message)
    })
  }
  modifierArchiveFDSSEE(value,etat){
    let formdata =new FormData();
    let x;
    value.etat = etat;
    this.servicegl.updateArchiveEx(value).subscribe(data=>{
      this.notification.success1("Vous avez Modifier un Personnel")
    },error => {
      this.notification.success(error.error.message)
    })
  }
}
/*
*
* id: new FormControl(null),
    reference_boite: new FormControl('', Validators.required),
    referencedossier: new FormControl('', Validators.required),
    nom_projet: new FormControl('', Validators.required),
    raison_social:  new FormControl('', Validators.required),
    localisation: new FormControl('', Validators.required),
    observation :new FormControl('', Validators.required),
    suivi: new FormControl('', Validators.required),
    etat: new FormControl('', Validators.required),
    img_v: new FormControl(''),
    img_c: new FormControl(''),
    cniPersonnel :new FormControl('', Validators.required),
    date_sortie: new FormControl('', Validators.required),
    date_premier_rentrer: new FormControl('', Validators.required),
    date_recuperation: new FormControl('', Validators.required),
    datefinrecuperation: new FormControl('', Validators.required),*/
