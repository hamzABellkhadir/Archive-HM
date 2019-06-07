import {Component, OnInit, ViewChild} from "@angular/core";
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {AjouterUtilisateurComponent} from "../utilisateur/ajouter-utilisateur/ajouter-utilisateur.component";
import {AjouterDivisionComponent} from "./ajouter-division/ajouter-division.component";
import {DivisionFormService} from "../../serviceArchive/division-form.service";
import {ArchiveService} from "../../serviceArchive/archive.service";
import {AjouterServiceComponent} from "./ajouter-service/ajouter-service.component";

@Component({
  selector: 'app-division-service',
  templateUrl: './division-service.component.html',
  styleUrls: ['./division-service.component.css']
})
export class DivisionServiceComponent implements OnInit {

  constructor(public dialog: MatDialog,public dialog1: MatDialog,private serviceds: DivisionFormService, private archiveServe : ArchiveService) { }


  displayedColumns: string[] = [ 'nom_division', 'details'];
  displayedColumns2: string[] = [ 'nom_service','nom_division', 'details'];
  dataSource;
  dataSource2;
  x: any;
  y;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort2: MatSort;
  @ViewChild(MatPaginator) paginator2: MatPaginator;


  ngOnInit() {
    this.getAllDivision1();
    this.getAllServiceApp1();
  }




  Ajouterpopup(){
    localStorage.setItem("am","true");
    this.dialog.open(AjouterDivisionComponent,{
      width: '450px',
    });
  }

  onEdit(docc){
    localStorage.setItem("am","false");
    this.serviceds.initialisation_division2(docc);
    this.dialog.open(AjouterDivisionComponent,{
      width: '450px',
    });
  }


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

  Ajouterpopup2(){
    localStorage.setItem("am","true");
    this.dialog1.open(AjouterServiceComponent,{
      width: '900px',
    });
  }

  onEdit2(docc){
    localStorage.setItem("am","false");
    this.serviceds.initialisation_service2(docc);
    this.dialog1.open(AjouterServiceComponent,{
      width: '900px',
    });
  }


  getAllServiceApp1(){
    this.archiveServe.getAllServiceApp().subscribe(data=>{
        this.y=data;
        this.dataSource2 = new MatTableDataSource(this.y);
        this.dataSource2.sort = this.sort2;
        this.dataSource2.paginator = this.paginator2;
      },error=>{
        console.log(error);
      }

    )
  }



  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  applyFilter2(filterValue: string) {
    this.dataSource2.filter = filterValue.trim().toLowerCase();
  }
}
