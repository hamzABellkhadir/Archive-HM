import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-versement-impri',
  templateUrl: './versement-impri.component.html',
  styleUrls: ['./versement-impri.component.css']
})
export class VersementImpriComponent implements OnInit {

  constructor() { }
  imageUrl2;
  ngOnInit() {
    this.imageUrl2 = "../../../assets/img/img-personnel/logo.jpg";
  }

}
