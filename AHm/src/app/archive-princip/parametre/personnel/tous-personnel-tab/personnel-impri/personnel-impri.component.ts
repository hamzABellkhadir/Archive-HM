import {Component, Input, OnInit} from "@angular/core";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-personnel-impri',
  templateUrl: './personnel-impri.component.html',
  styleUrls: ['./personnel-impri.component.css']
})
export class PersonnelImpriComponent implements OnInit {

  @Input() personnel;
  imageUrl: string;
  imageUrl2 :String ;
  constructor( private datePipe: DatePipe) { }
  ngOnInit() {
    console.log(this.personnel);
    this.imageUrl = "../../../assets/img/img-personnel/"+this.personnel.photo;
    this.imageUrl2 = "../../../assets/img/img-personnel/logo.jpg";
  }


}
