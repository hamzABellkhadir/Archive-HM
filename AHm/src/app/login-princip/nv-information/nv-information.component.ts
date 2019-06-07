import { Component, OnInit } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

declare function printData() : any;
@Component({
  selector: 'app-nv-information',
  templateUrl: './nv-information.component.html',
  styleUrls: ['./nv-information.component.css']
})
export class NvInformationComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }



  openBackDropCustomClass(content) {
    this.modalService.open(content, {backdropClass: 'light-gray-backdrop',centered: true,size: 'lg'});
  }
  t(id,c){
    printData();
    c('Cross click');
  }

}
