import {Component, OnInit, ViewChild} from "@angular/core";
import {AdminFormService} from "../../../serviceArchive/admin-form.service";
import {MatDialogRef, MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {ArchiveService} from "../../../serviceArchive/archive.service";

@Component({
  selector: 'app-ajouter-utilisateur',
  templateUrl: './ajouter-utilisateur.component.html',
  styleUrls: ['./ajouter-utilisateur.component.css']
})
export class AjouterUtilisateurComponent implements OnInit {

  constructor(private serviceAdmin :AdminFormService,
              public dialogRef: MatDialogRef<AjouterUtilisateurComponent>, private archiveServe : ArchiveService) { }

  roles = [
    { id: "ADMIN", value: 'Admin' },
    { id: "USER", value: 'Utilisateur' }];

  displayedColumns: string[] = [ 'id','nom_personnel', 'prenom_personnel','details'];
  dataSource;
  x: any;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  AM = localStorage.getItem("am").toLowerCase() == 'true' ? true : false;
  hide= true;
  hide1= true;
  ngOnInit() {
    this.getallPersonnel();
  }

  ajouter_user(value){
    this.serviceAdmin.saveOUser(value);
    this.onClose();
  }

  modifier_user(value){
    this.serviceAdmin.updateOUser(value);
    this.onClose();
  }
  onClose() {
    this.serviceAdmin.formAdmin.reset();
    this.serviceAdmin.initialisation_admin()
    this.dialogRef.close();
  }

  onClear(){
    this.serviceAdmin.initialisation_admin()
  }

  getallPersonnel(){
    this.archiveServe.getAllPersonnel().subscribe(data=>{
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
    this.serviceAdmin.formAdmin.get('cni').setValue(x);
  }
}
