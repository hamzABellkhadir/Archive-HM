import { Injectable } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ArchiveService} from "./archive.service";
import {PersonnelClass} from "../../../module/personnelClass";
import {HttpErrorResponse} from "@angular/common/http";
import {DatePipe} from "@angular/common";
import {NotificationUService} from "../../login-princip/ServiceLogin/NotificationU";

@Injectable({
  providedIn: 'root'
})
export class ArchiveFormService {

  personnelClass: PersonnelClass =new PersonnelClass();
  constructor(private servicegl : ArchiveService ,private datePipe: DatePipe,private notification :NotificationUService) { }


  form: FormGroup = new FormGroup({
    id: new FormControl('', Validators.required),
    nom_personnel: new FormControl('', Validators.required),
    prenom_personnel: new FormControl('', Validators.required),
    ville_naissance: new FormControl('', Validators.required),
    nationalite:  new FormControl('', Validators.required),
    situation_familiale: new FormControl('', Validators.required),
    photo :new FormControl(''),
    adresse: new FormControl('', Validators.required),
    ville: new FormControl('', Validators.required),
    num_ppr: new FormControl('', Validators.required),
    grade: new FormControl('', Validators.required),
    type_engagement :new FormControl('', Validators.required),
    budget: new FormControl('', Validators.required),
    fonction_exercee: new FormControl('', Validators.required),
    compte_bancaire: new FormControl('', Validators.required),
    agence_bancaire: new FormControl('', Validators.required),
    niveau_etude: new FormControl('', Validators.required),
    diplome :new FormControl('', Validators.required),
    date_obtention_diplome: new FormControl('', Validators.required),
    specialite: new FormControl('', Validators.required),
    date_naissances: new FormControl('', Validators.required),
    date_entre: new FormControl('', Validators.required),
    date_arrivee_cri: new FormControl('', Validators.required),
    idservice :new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    tel: new FormControl('', [Validators.required,
      Validators.minLength(10)]),
  });

  initialisation_personnel() {
    this.form.setValue({
      id:'',
      nom_personnel:"",
      prenom_personnel:"",
      ville_naissance:"",
      nationalite:"",
      situation_familiale:"",
      photo:"",
      adresse:'',
      ville:"",
      email:"",
      tel:"",
      num_ppr:"",
      grade:"",
      type_engagement:"",
      budget:"",
      fonction_exercee:'',
      compte_bancaire:"",
      agence_bancaire:"",
      niveau_etude:"",
      diplome:"",
      date_obtention_diplome:"",
      specialite:"",
      date_naissances:"",
      date_entre:"",
      date_arrivee_cri:'',
      idservice:""
    });
  }

  ajouterPersonnel(personnel , img){

    //console.log(personnel);
    let formdata =new FormData();
    this.servicegl.savePersonnel(personnel).subscribe(data=>{
      formdata.append('file' ,img);
      formdata.append('id',personnel.id);
      this.servicegl.saveImgPersonnel(formdata).subscribe(data=>{
      })
      //console.log("test0");
      this.notification.success1("Vous avez ajouter un Personnel")
    },error => {
      //console.log(error.error.message);
      this.notification.success(error.error.message)
    })

  }

  modifierPersonnel(personnel , img){
    let formdata =new FormData();
    this.servicegl.updatePersonnel(personnel).subscribe(data=>{

      if(img != null){
        formdata.append('file' ,img);
        formdata.append('id',personnel.id);
        this.servicegl.saveImgPersonnel(formdata).subscribe(data=>{
        })
      }

      this.notification.success1("Vous avez Modifier un Personnel")
    },error => {
      this.notification.success(error.error.message)
    })

  }
  AformPersonnel(personnel){
    this.form.setValue({
      id:personnel.id,
      nom_personnel:personnel.nom_personnel,
      prenom_personnel:personnel.prenom_personnel,
      ville_naissance:personnel.ville_naissance,
      nationalite:personnel.nationalite,
      situation_familiale:personnel.situation_familiale,
      photo:personnel.photo,
      adresse:personnel.adresse,
      ville:personnel.ville,
      email:personnel.email,
      tel:personnel.tel,
      num_ppr:personnel.num_ppr,
      grade:personnel.grade,
      type_engagement:personnel.type_engagement,
      budget:personnel.budget,
      fonction_exercee:personnel.fonction_exercee,
      compte_bancaire:personnel.compte_bancaire,
      agence_bancaire:personnel.agence_bancaire,
      niveau_etude:personnel.niveau_etude,
      diplome:personnel.diplome,
      date_obtention_diplome :  this.datePipe.transform(personnel.date_obtention_diplome, 'yyyy-MM-dd'),
      specialite:personnel.specialite,

      date_naissances:this.datePipe.transform(personnel.date_naissances, 'yyyy-MM-dd'),
      date_entre: this.datePipe.transform(personnel.date_entre, 'yyyy-MM-dd'),
      date_arrivee_cri : this.datePipe.transform(personnel.date_arrivee_cri, 'yyyy-MM-dd'),
      idservice:personnel.service.id
    })
  }

}
/*

  form: FormGroup = new FormGroup({
    id: new FormControl('', Validators.required),
    nom_personnel: new FormControl('', Validators.required),
    prenom_personnel: new FormControl('', Validators.required),
    ville_naissance: new FormControl('', Validators.required),
    nationalite:  new FormControl('', Validators.required),
    situation_familiale: new FormControl('', Validators.required),
    photo :new FormControl(''),
    adresse: new FormControl('', Validators.required),
    ville: new FormControl('', Validators.required),
    num_ppr: new FormControl('', Validators.required),
    grade: new FormControl('', Validators.required),
    type_engagement :new FormControl('', Validators.required),
    budget: new FormControl('', Validators.required),
    fonction_exercee: new FormControl('', Validators.required),
    compte_bancaire: new FormControl('', Validators.required),
    agence_bancaire: new FormControl('', Validators.required),
    niveau_etude: new FormControl('', Validators.required),
    diplome :new FormControl('', Validators.required),
    date_obtention_diplome: new FormControl('', Validators.required),
    specialite: new FormControl('', Validators.required),
    date_naissances: new FormControl('', Validators.required),
    date_entre: new FormControl('', Validators.required),
    date_arrivee_cri: new FormControl('', Validators.required),
    idservice :new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    tel: new FormControl('', [Validators.required,
      Validators.minLength(10)]),



       form: FormGroup = new FormGroup({
    id: new FormControl(''),
    nom_personnel: new FormControl(''),
    prenom_personnel: new FormControl(''),
    ville_naissance: new FormControl(''),
    nationalite:  new FormControl(''),
    situation_familiale: new FormControl(''),
    photo :new FormControl(''),
    adresse: new FormControl(''),
    ville: new FormControl(''),
    num_ppr: new FormControl(''),
    grade: new FormControl(''),
    type_engagement :new FormControl(''),
    budget: new FormControl(''),
    fonction_exercee: new FormControl(''),
    compte_bancaire: new FormControl(''),
    agence_bancaire: new FormControl(''),
    niveau_etude: new FormControl(''),
    diplome :new FormControl(''),
    date_obtention_diplome: new FormControl(''),
    specialite: new FormControl(''),
    date_naissances: new FormControl(''),
    date_entre: new FormControl(''),
    date_arrivee_cri: new FormControl(''),
    idservice :new FormControl(''),
    email: new FormControl(''),
    tel: new FormControl(''),
  });
 */
