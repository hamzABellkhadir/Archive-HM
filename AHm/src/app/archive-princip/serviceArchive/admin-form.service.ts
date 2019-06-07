import { Injectable } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ArchiveService} from "./archive.service";
import {DatePipe} from "@angular/common";
import {NotificationUService} from "../../login-princip/ServiceLogin/NotificationU";

@Injectable({
  providedIn: 'root'
})
export class AdminFormService {

  constructor(private servicegl : ArchiveService,private notification :NotificationUService) { }

  formAdmin: FormGroup = new FormGroup({
    id: new FormControl(null),
    pseudo: new FormControl('', Validators.required),
    mot_pass: new FormControl('', Validators.required),
    role1: new FormControl('USER', Validators.required),
    confirmedPassword: new FormControl('', Validators.required),
    actived: new FormControl(true, Validators.required),
    cni: new FormControl(''),
  })


  initialisation_admin() {
    this.formAdmin.setValue({
      id:null,
      pseudo:"",
      mot_pass:"",
      role1:"USER",
      confirmedPassword:"",
      actived:true,
      cni:""
    })
  }

  initialisation_admin2(admin) {
    this.formAdmin.setValue({
      id:admin.id,
      pseudo:admin.pseudo,
      mot_pass:'',
      role1:admin.role.roleName,
      confirmedPassword:'',
      actived:admin.actived,
      cni:admin.cni
    })
  }

  saveOUser(value){
    this.servicegl.saveUser(value).subscribe(data=>{
      this.notification.success1("Vous avez Ajouter un Utilisateur")
    },error => {
      this.notification.success(error.error.message)
    })
  }

  updateOUser(value){
    this.servicegl.updateUser(value).subscribe(data=>{
      this.notification.success1("Vous avez Modifier un Utilisateur")
    },error => {
      this.notification.success(error.error.message)
    })
  }

  }
