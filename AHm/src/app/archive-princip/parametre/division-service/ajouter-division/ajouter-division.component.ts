import { Component, OnInit } from '@angular/core';
import {DivisionFormService} from "../../../serviceArchive/division-form.service";
import {MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-ajouter-division',
  templateUrl: './ajouter-division.component.html',
  styleUrls: ['./ajouter-division.component.css']
})
export class AjouterDivisionComponent implements OnInit {

  constructor(public serviceds: DivisionFormService ,public dialogRef: MatDialogRef<AjouterDivisionComponent>) { }

  ngOnInit() {
  }
  AM = localStorage.getItem("am").toLowerCase() == 'true' ? true : false;
  ajouter_division(value){
    this.serviceds.saveODivision(value);
    this.onClose();
  }

  modifier_division(value){
    this.serviceds.updateODivision(value);
    this.onClose();
  }
  onClose() {
    this.serviceds.formDivision.reset();
    this.serviceds.initialisation_division()
    this.dialogRef.close();
  }

  onClear(){
    this.serviceds.initialisation_division()
  }
}
