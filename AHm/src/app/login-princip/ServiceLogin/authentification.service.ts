import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ServiceAuthentification {

  constructor(private http: HttpClient ) { }
  host2 ="http://localhost:8099/";
  loginn(data){
    return this.http.post(this.host2+"login",data,{observe:'response'});
  }

}
