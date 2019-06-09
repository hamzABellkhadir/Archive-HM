import {Component, OnInit, ViewChild} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {ArchiveService} from "../../../serviceArchive/archive.service";
import {AjouterpersonnelComponent} from "../ajouterpersonnel/ajouterpersonnel.component";
import {ArchiveFormService} from "../../../serviceArchive/archive-form.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {PersonnelInfoComponent} from "../../../archive/personnel-info/personnel-info.component";
import {ArchiveForm2Service} from "../../../serviceArchive/archive-form2.service";

declare function printData() : any;
@Component({
  selector: 'app-tous-personnel-tab',
  templateUrl: './tous-personnel-tab.component.html',
  styleUrls: ['./tous-personnel-tab.component.css']
})
export class TousPersonnelTabComponent implements OnInit {

  constructor( private http : HttpClient,public dialog: MatDialog,
               private archiveServe : ArchiveService,
               private formarchive : ArchiveFormService,private modalService: NgbModal) { }

  displayedColumns: string[] = [ 'id','nom_personnel', 'prenom_personnel', 'adresse','email', 'tel','details'];
  dataSource;
  x: any;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.getallPersonnel();
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

  Ajouterpopup(){
    localStorage.setItem("am","true");
    this.dialog.open(AjouterpersonnelComponent,{
      width: '1500px',
    });
  }


  onEdit(docc){
    localStorage.setItem("am","false");
    this.formarchive.AformPersonnel(docc);
    this.dialog.open(AjouterpersonnelComponent,{
      width: '1000px',
    });
  }


  openBackDropCustomClass(content) {
    this.modalService.open(content, {backdropClass: 'light-gray-backdrop',centered: true,size: 'lg'});
  }
  t(id,c){
    printData();
    c('Cross click');
  }
 pers;
  openD(docc){
    this.pers = docc;
  }

}
