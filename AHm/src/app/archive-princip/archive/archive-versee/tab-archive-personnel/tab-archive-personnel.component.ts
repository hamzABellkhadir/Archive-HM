import {Component, OnInit, ViewChild} from "@angular/core";
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {ArchiveService} from "../../../serviceArchive/archive.service";
import {AdminFormService} from "../../../serviceArchive/admin-form.service";
import {AjouterUtilisateurComponent} from "../../../parametre/utilisateur/ajouter-utilisateur/ajouter-utilisateur.component";
import {ArchiveForm2Service} from "../../../serviceArchive/archive-form2.service";
import {DatePipe} from "@angular/common";
import {PersoInformaComponent} from "../perso-informa/perso-informa.component";

@Component({
  selector: 'app-tab-archive-personnel',
  templateUrl: './tab-archive-personnel.component.html',
  styleUrls: ['./tab-archive-personnel.component.css']
})
export class TabArchivePersonnelComponent implements OnInit {

  constructor(public dialog: MatDialog, private archiveServe : ArchiveService,
              private formarchives : ArchiveForm2Service,private serviceAdmin :AdminFormService,private datePipe: DatePipe) { }

  displayedColumns: string[] = [ 'nom_personnel','commentaire','date_sortie','date_recuperation' ,'datefin', 'details'];
  dataSource;
  x: any;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  ngOnInit() {
    this.getallUser();
  }


  getallUser(){
    let value = this.formarchives.formArchive.value;
    this.archiveServe.getAllArchiveP(value.id).subscribe(data=>{
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
    this.formarchives.initialisation_PersArchi(docc.personnel.id);
    this.dialog.open(PersoInformaComponent,{
      width: '900px',
    });
  }

}
