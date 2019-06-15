import {Component, OnInit, ViewChild} from "@angular/core";
import {AjouterpersonnelComponent} from "../../parametre/personnel/ajouterpersonnel/ajouterpersonnel.component";
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {AjouterAchivevComponent} from "./ajouter-achivev/ajouter-achivev.component";
import {ArchiveService} from "../../serviceArchive/archive.service";
import {AdminFormService} from "../../serviceArchive/admin-form.service";
import {AjouterUtilisateurComponent} from "../../parametre/utilisateur/ajouter-utilisateur/ajouter-utilisateur.component";
import {ArchiveForm2Service} from "../../serviceArchive/archive-form2.service";
import {DatePipe} from "@angular/common";
import {AjouterAchivecComponent} from "./ajouter-achivec/ajouter-achivec.component";
import {PersonnelInfoComponent} from "../personnel-info/personnel-info.component";
import {TabArchivePersonnelComponent} from "./tab-archive-personnel/tab-archive-personnel.component";
import {FormLoginserve} from "../../../login-princip/ServiceLogin/fromLogin";

@Component({
  selector: 'app-archive-versee',
  templateUrl: './archive-versee.component.html',
  styleUrls: ['./archive-versee.component.css']
})
export class ArchiveVerseeComponent implements OnInit {

  constructor(public dialog: MatDialog, private archiveServe : ArchiveService,
              private datePipe: DatePipe,private serviceArchive :ArchiveForm2Service,private serviceLogin :FormLoginserve) { }


  displayedColumns: string[] = [ 'reference_boite','referencedossier','raison_social','date_premier_rentrer' ,'nom_projet','localisation' ,'details'];
  dataSource;
  x: any;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;



  ngOnInit() {
    this.getallAEx();
    this.serviceLogin.IsUserLogedOut(localStorage.getItem('token'));
  }

  Ajouterpopup(){
    localStorage.setItem("am","true");
    this.dialog.open(AjouterAchivevComponent,{
      width: '700px',
    });
  }

  getallAEx(){
    this.archiveServe.getAllArchive("ex").subscribe(data=>{
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



  onEdit(docc){
    localStorage.setItem("am","false");
    this.serviceArchive.initialisation_archive1(docc);
    this.dialog.open(AjouterAchivevComponent,{
      width: '700px',
    });
  }

  onEditCnsultation(docc){
    localStorage.setItem("am","true");
    this.serviceArchive.initialisation_archive1C(docc);
    this.dialog.open(AjouterAchivecComponent,{
      width: '1050px',
    });
  }

  getPA(docc){
    this.serviceArchive.initialisation_archive1(docc);
    this.dialog.open(TabArchivePersonnelComponent,{
      width: '1050px',
    });
  }

}
