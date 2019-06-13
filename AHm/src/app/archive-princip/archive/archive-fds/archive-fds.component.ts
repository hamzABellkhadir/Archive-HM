import {Component, OnInit, ViewChild} from "@angular/core";
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {ArchiveService} from "../../serviceArchive/archive.service";
import {DatePipe} from "@angular/common";
import {ArchiveForm2Service} from "../../serviceArchive/archive-form2.service";
import {AjouterAchivevComponent} from "../archive-versee/ajouter-achivev/ajouter-achivev.component";
import {AjouterAchivecComponent} from "../archive-versee/ajouter-achivec/ajouter-achivec.component";
import {AjouterASEEComponent} from "../archive-consulter/ajouter-asee/ajouter-asee.component";
import {PersonnelInfoComponent} from "../personnel-info/personnel-info.component";
import {FormLoginserve} from "../../../login-princip/ServiceLogin/fromLogin";

@Component({
  selector: 'app-archive-fds',
  templateUrl: './archive-fds.component.html',
  styleUrls: ['./archive-fds.component.css']
})
export class ArchiveFDSComponent implements OnInit {

  constructor(public dialog: MatDialog, private archiveServe : ArchiveService,
              private datePipe: DatePipe,private serviceArchive :ArchiveForm2Service,private serviceLogin :FormLoginserve) { }


  displayedColumns: string[] = [ 'reference_boite','referencedossier','date_premier_rentrer' ,'date_sortie','date_recuperation' ,'details'];
  dataSource;
  x: any;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;



  ngOnInit() {
    this.getallAEx();
    this.serviceLogin.IsUserLogedOut(localStorage.getItem('token'));
  }


  getallAEx(){
    this.archiveServe.getAllArchive("fds").subscribe(data=>{
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







  onEditSEE(docc){
    localStorage.setItem("am","false");
    this.serviceArchive.initialisation_archive2(docc);
    this.dialog.open(AjouterASEEComponent,{
      width: '400px',
    });
  }
  Personnel_info(docc){
    this.serviceArchive.initialisation_archive2(docc);
    this.dialog.open(PersonnelInfoComponent,{
      width: "900px",
    });
  }

}
