import {Component, Input, OnInit} from "@angular/core";

@Component({
  selector: 'app-personnel-impri',
  templateUrl: './personnel-impri.component.html',
  styleUrls: ['./personnel-impri.component.css']
})
export class PersonnelImpriComponent implements OnInit {

  @Input() personnel;
  imageUrl: string;
  constructor() { }
  ngOnInit() {
    console.log(this.personnel);
    this.imageUrl = "../../../assets/img/img-personnel/"+this.personnel.photo;
  }


}
