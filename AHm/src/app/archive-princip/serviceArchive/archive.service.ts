import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ArchiveService {

  constructor(private http : HttpClient) { }
  host2 ="http://localhost:8099/";
  getUser(cni){
    let headers = new HttpHeaders({'authorization':'Adan '+localStorage.getItem('token')});
    return this.http.get(this.host2+"personnels/"+cni,{headers:headers});
  }




  saveImgPersonnel(img){
    let headers = new HttpHeaders({'authorization':'Adan '+localStorage.getItem('token')});
    return this.http.post("http://localhost:8099/uploaad",img,{headers:headers});
  }
  savePersonnel(personnel){
    let headers = new HttpHeaders({'authorization':'Adan '+localStorage.getItem('token')});
    return this.http.post(this.host2+"personnels",personnel,{headers:headers});
  }

  updatePersonnel(personnel){
    let headers = new HttpHeaders({'authorization':'Adan '+localStorage.getItem('token')});
    return this.http.put(this.host2+"personnels/"+personnel.id,personnel,{headers:headers});
  }

  getAllServiceApp(){
    let headers = new HttpHeaders({'authorization':'Adan '+localStorage.getItem('token')});
    return this.http.get(this.host2+"serviceApps",{headers:headers});
  }

  getAllPersonnel(){
    let headers = new HttpHeaders({'authorization':'Adan '+localStorage.getItem('token')});
    return this.http.get(this.host2+"personnels",{headers:headers});
  }
  getAllUser(){
    let headers = new HttpHeaders({'authorization':'Adan '+localStorage.getItem('token')});
    return this.http.get(this.host2+"admins",{headers:headers});
  }
  getAllService(){
    let headers = new HttpHeaders({'authorization':'Adan '+localStorage.getItem('token')});
    return this.http.get(this.host2+"serviceApps",{headers:headers});
  }
  getAllDivision(){
    let headers = new HttpHeaders({'authorization':'Adan '+localStorage.getItem('token')});
    return this.http.get(this.host2+"divisions",{headers:headers});
  }

  saveUser(user){
    let headers = new HttpHeaders({'authorization':'Adan '+localStorage.getItem('token')});
    return this.http.post(this.host2+"admins",user,{headers:headers});
  }

  updateUser(user){
    let headers = new HttpHeaders({'authorization':'Adan '+localStorage.getItem('token')});
    return this.http.put(this.host2+"admins/"+user.id,user,{headers:headers});
  }


  saveDivision(value){
    let headers = new HttpHeaders({'authorization':'Adan '+localStorage.getItem('token')});
    return this.http.post(this.host2+"divisions",value,{headers:headers});
  }

  updateDivision(value){
    let headers = new HttpHeaders({'authorization':'Adan '+localStorage.getItem('token')});
    return this.http.put(this.host2+"divisions/"+value.id,value,{headers:headers});
  }

  saveService(value){
    let headers = new HttpHeaders({'authorization':'Adan '+localStorage.getItem('token')});
    return this.http.post(this.host2+"serviceApps",value,{headers:headers});
  }

  updateService(value){
    let headers = new HttpHeaders({'authorization':'Adan '+localStorage.getItem('token')});
    return this.http.put(this.host2+"serviceApps/"+value.id,value,{headers:headers});
  }



  //--------------------------------------------------------------Archive
  saveArchiveEx(value){
    let headers = new HttpHeaders({'authorization':'Adan '+localStorage.getItem('token')});
    return this.http.post(this.host2+"archives",value,{headers:headers});
  }

  updateArchiveEx(value){
    let headers = new HttpHeaders({'authorization':'Adan '+localStorage.getItem('token')});
    return this.http.put(this.host2+"archives/"+value.id,value,{headers:headers});
  }

  saveImgArchiveV(img){
    let headers = new HttpHeaders({'authorization':'Adan '+localStorage.getItem('token')});
    return this.http.post(this.host2 +"uploadArchiveV",img,{headers:headers});
  }

  saveImgArchiveC(img){
    let headers = new HttpHeaders({'authorization':'Adan '+localStorage.getItem('token')});
    return this.http.post(this.host2 +"uploadArchiveC",img,{headers:headers});
  }

  getAllArchive(etat){
    let headers = new HttpHeaders({'authorization':'Adan '+localStorage.getItem('token')});
    return this.http.get(this.host2+"archives/"+etat,{headers:headers});
  }


}
