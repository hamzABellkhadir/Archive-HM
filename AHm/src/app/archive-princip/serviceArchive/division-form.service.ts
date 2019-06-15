import { Injectable } from '@angular/core';
import {ArchiveService} from "./archive.service";
import {NotificationUService} from "../../login-princip/ServiceLogin/NotificationU";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class DivisionFormService {

  constructor(private servicegl : ArchiveService,private notification :NotificationUService) { }


  formDivision: FormGroup = new FormGroup({
    id: new FormControl(null),
    nom_division: new FormControl('', Validators.required)
  })


  initialisation_division() {
    this.formDivision.setValue({
      id:null,
      nom_division:""
    })
  }

  initialisation_division2(admin) {
    this.formDivision.setValue({
      id:admin.id,
      nom_division:admin.nom_division
    })
  }

  formService: FormGroup = new FormGroup({
    id: new FormControl(null),
    nom_service: new FormControl('', Validators.required),
    idDivision: new FormControl('', Validators.required)
  })


  initialisation_service() {
    this.formService.setValue({
      id:null,
      nom_service:"",
      idDivision:""
    })
  }

  initialisation_service2(admin) {
    this.formService.setValue({
      id:admin.id,
      nom_service:admin.nom_service,
      idDivision:admin.division.id
    })
  }





  //--------------------------------------------------



  saveODivision(value){
   // console.log(value)
    this.servicegl.saveDivision(value).subscribe(data=>{
      this.notification.success1("Vous avez Ajouté une Division")
    },error => {
      this.notification.success(error.error.message);
     // console.log(error)
    })
  }

  updateODivision(value){
    this.servicegl.updateDivision(value).subscribe(data=>{
      this.notification.success1("Vous avez modifié une Division")
    },error => {
      this.notification.success(error.error.message)
    })
  }


  saveOService(value){
    this.servicegl.saveService(value).subscribe(data=>{
      this.notification.success1("Vous avez Ajouté un Service")
    },error => {
      this.notification.success(error.error.message)
    })
  }


  updateOService(value){
    this.servicegl.updateService(value).subscribe(data=>{
      this.notification.success1("Vous avez modifié un Service")
    },error => {
      this.notification.success(error.error.message)
    })
  }



}
