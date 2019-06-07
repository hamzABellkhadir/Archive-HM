import {Component, Input, OnInit} from "@angular/core";

@Component({
  selector: 'app-personnel-impri',
  templateUrl: './personnel-impri.component.html',
  styleUrls: ['./personnel-impri.component.css']
})
export class PersonnelImpriComponent implements OnInit {

  @Input() personnel;
  constructor() { }

  ngOnInit() {
    console.log(this.personnel)
  }

}
