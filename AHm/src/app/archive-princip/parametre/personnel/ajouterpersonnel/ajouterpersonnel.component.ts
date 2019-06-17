import {Component, OnInit, ViewChild} from "@angular/core";
import {ArchiveFormService} from "../../../serviceArchive/archive-form.service";
import {MatDialog, MatDialogRef, MatSort, MatTableDataSource} from "@angular/material";
import {ArchiveService} from "../../../serviceArchive/archive.service";
import {MatPaginator} from '@angular/material/paginator';
import {NotificationUService} from "../../../../login-princip/ServiceLogin/NotificationU";


@Component({
  selector: 'app-ajouterpersonnel',
  templateUrl: './ajouterpersonnel.component.html',
  styleUrls: ['./ajouterpersonnel.component.css']
})
export class AjouterpersonnelComponent implements OnInit {

  constructor(public formarchive : ArchiveFormService ,
              public dialog: MatDialog,
              private archiveServe : ArchiveService,
              public dialogRef: MatDialogRef<AjouterpersonnelComponent>,private notification :NotificationUService) { }


  isLinear = false;
  namephoto =this.imgphoto();
  imageUrl: string = "../../../assets/img/img-personnel/"+this.namephoto;
  fileToUpload: File = null;
  imagePersonnel;


  AM = localStorage.getItem("am").toLowerCase() == 'true' ? true : false;


  displayedColumns: string[] = ['id', 'nom_service', 'nom_division','position'];
  dataSource;
  x: any;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  idservicce;

  ngOnInit() {
  this.getService();
  this.imgphoto();
  }
  imgphoto(){
    if(this.formarchive.form.get("photo").value !="")
      return this.formarchive.form.get("photo").value;
    else return "Ahm-Logo.png";
  }

  onFileInput(event){
    this.imagePersonnel = event.target.files[0];
  }

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    //Show image preview
    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.imageUrl = event.target.result;

    }
    reader.readAsDataURL(this.fileToUpload);
  }

  ajouter_personnel(value){
    if(this.imagePersonnel == undefined){
      this.notification.success("il faut ajouter une image")
    }else{
      this.formarchive.ajouterPersonnel(value,this.imagePersonnel);
      this.onClear();
      this.onClose();

    }

  }

  modifier_personnel(value){
    if(this.imagePersonnel == undefined){
      this.formarchive.modifierPersonnel(value,null);
    }else{
      this.formarchive.modifierPersonnel(value,this.imagePersonnel);
    }
    this.onClear();
    this.onClose();

  }

  onClear(){
    this.formarchive.initialisation_personnel();
  }

  getService(){
    this.archiveServe.getAllServiceApp().subscribe(data=>{
      this.x=data;
      this.dataSource = new MatTableDataSource(this.x);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    },error=>{
      console.log(error)
      }

    )
  }
  nomService = null;
  openDialog(x,y){
    this.formarchive.form.get('idservice').setValue(x);
    this.nomService = y;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  onClose() {
    this.formarchive.form.reset();
    this.formarchive.initialisation_personnel()
    this.dialogRef.close();
  }


}
