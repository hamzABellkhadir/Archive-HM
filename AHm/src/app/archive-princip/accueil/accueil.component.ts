import { Component, OnInit } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ArchiveService} from "../serviceArchive/archive.service";
import {ArchiveForm2Service} from "../serviceArchive/archive-form2.service";
import {FormLoginserve} from "../../login-princip/ServiceLogin/fromLogin";
declare function printData() : any;
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor(private modalService: NgbModal,private archiveServe : ArchiveService,private serviceLogin :FormLoginserve) { }

  ngOnInit() {
    this.number_doc();
    this.serviceLogin.IsUserLogedOut(localStorage.getItem('token'));
  }


  count_doc;
  count_sr;
  count_pr;
  count_us;
  count_fds;
  number_doc(){
    this.archiveServe.getAllArchive("fds").subscribe(data=>{
      this.count_fds = data;
    });
    this.archiveServe.getAllArchive("sr").subscribe(data=>{
      this.count_sr =data;
    });
    this.archiveServe.getAllPersonnel().subscribe(data=>{
      this.count_pr = data;
    });
    this.archiveServe.getAllUser().subscribe(data=>{
      this.count_us = data;
    });
    this.archiveServe.getAllArchives().subscribe(data=>{
      this.count_doc =data;
    });
  }




  openBackDropCustomClass(content) {
    this.modalService.open(content, {backdropClass: 'light-gray-backdrop',centered: true,size: 'lg'});
  }
  t(id,c){
    printData();
    c('Cross click');
  }
}
