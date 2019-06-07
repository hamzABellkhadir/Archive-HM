import {Component, OnInit, ViewChild} from "@angular/core";
import {AjouterpersonnelComponent} from "../personnel/ajouterpersonnel/ajouterpersonnel.component";
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {AjouterUtilisateurComponent} from "./ajouter-utilisateur/ajouter-utilisateur.component";
import {ArchiveService} from "../../serviceArchive/archive.service";
import {AdminFormService} from "../../serviceArchive/admin-form.service";

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {

  constructor(public dialog: MatDialog, private archiveServe : ArchiveService,private serviceAdmin :AdminFormService) { }

  displayedColumns: string[] = [ 'cni','pseudo','actived' ,'roleName', 'details'];
  dataSource;
  x: any;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  ngOnInit() {
    this.getallUser();
  }


  getallUser(){
    this.archiveServe.getAllUser().subscribe(data=>{
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

  Ajouterpopup(){
    localStorage.setItem("am","true");
    this.dialog.open(AjouterUtilisateurComponent,{
      width: '900px',
    });
  }

  onEdit(docc){
    localStorage.setItem("am","false");
    this.serviceAdmin.initialisation_admin2(docc);
    this.dialog.open(AjouterUtilisateurComponent,{
      width: '900px',
    });
  }
}
