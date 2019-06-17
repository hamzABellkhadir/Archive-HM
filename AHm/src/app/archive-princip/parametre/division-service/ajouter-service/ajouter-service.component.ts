import {Component, OnInit, ViewChild} from "@angular/core";
import {DivisionFormService} from "../../../serviceArchive/division-form.service";
import {MatDialogRef, MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {ArchiveService} from "../../../serviceArchive/archive.service";

@Component({
  selector: 'app-ajouter-service',
  templateUrl: './ajouter-service.component.html',
  styleUrls: ['./ajouter-service.component.css']
})
export class AjouterServiceComponent implements OnInit {

  constructor(public serviceds: DivisionFormService ,
              public dialogRef1: MatDialogRef<AjouterServiceComponent>,
              private archiveServe : ArchiveService) { }

  displayedColumns: string[] = [ 'nom_division','details'];
  dataSource;
  x: any;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  AM = localStorage.getItem("am").toLowerCase() == 'true' ? true : false;
  ngOnInit() {
    this.getAllDivision1();
  }

  ajouter_service(value){
    this.serviceds.saveOService(value);
    this.onClose1();
  }

  modifier_service(value){
    this.serviceds.updateOService(value);
    this.onClose1();
  }
  onClose1() {
    this.serviceds.formService.reset();
    this.serviceds.initialisation_service()
    this.dialogRef1.close();
  }

  onClear(){
    this.serviceds.initialisation_service()
  }
  nomdiv = null;
  getAllDivision1(){
    this.archiveServe.getAllDivision().subscribe(data=>{
        this.x=data;
        this.dataSource = new MatTableDataSource(this.x);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },error=>{
        console.log(error)
      }
    )
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(x){
    this.serviceds.formService.get('idDivision').setValue(x.id);
    this.nomdiv = x.nom_division;
  }
}
