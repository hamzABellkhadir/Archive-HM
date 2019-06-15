import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultation-impri',
  templateUrl: './consultation-impri.component.html',
  styleUrls: ['./consultation-impri.component.css']
})
export class ConsultationImpriComponent implements OnInit {

  constructor() { }
  imageUrl2;
  ngOnInit() {
    this.imageUrl2 = "../../../assets/img/img-personnel/logo.jpg";
  }

}
