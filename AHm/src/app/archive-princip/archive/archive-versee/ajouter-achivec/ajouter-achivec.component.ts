import {Component, OnInit, ViewChild} from "@angular/core";
import {ArchiveForm2Service} from "../../../serviceArchive/archive-form2.service";
import {MatDialog, MatDialogRef, MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {ArchiveService} from "../../../serviceArchive/archive.service";
import {NotificationUService} from "../../../../login-princip/ServiceLogin/NotificationU";

@Component({
  selector: 'app-ajouter-achivec',
  templateUrl: './ajouter-achivec.component.html',
  styleUrls: ['./ajouter-achivec.component.css']
})
export class AjouterAchivecComponent implements OnInit {

  constructor(private formarchives : ArchiveForm2Service ,
              public dialog: MatDialog,
              private archiveServe : ArchiveService,
              public dialogRef: MatDialogRef<AjouterAchivecComponent>,private notification :NotificationUService) { }


  displayedColumns: string[] = [ 'id','nom_personnel', 'prenom_personnel','details'];
  dataSource;
  x: any;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  AM = localStorage.getItem("am").toLowerCase() == 'true' ? true : false;

  isLinear = false;
  namephoto =this.imgphoto();
  imageUrl: string = "../../../assets/img/img-c/"+this.namephoto;
  fileToUpload: File = null;
  imagePersonnel;

  ngOnInit() {
    this.getallPersonnel();
  }


  imgphoto(){
    if(this.formarchives.formArchive.get("img_c").value !="")
      return this.formarchives.formArchive.get("img_c").value;
    else return "fichier.png";
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




  onClose() {
    this.formarchives.formArchive.reset();
    this.formarchives.initialisation_archive()
    this.dialogRef.close();
  }


  ajouter_ArchiveSR(value){
    if(this.imagePersonnel == undefined){
      this.notification.success("il faut ajouter une image")
    }else{
      this.formarchives.modifierArchiveSR(value,this.imagePersonnel);
      this.onClear();
      this.onClose();

    }

  }

  modifier_ArchiveSR(value){
    console.log(value);
    console.log(this.imagePersonnel);
    if(this.imagePersonnel == undefined){
      this.formarchives.modifierArchiveSR(value,null);
    }else{
      this.formarchives.modifierArchiveSR(value,this.imagePersonnel);
    }
    this.onClear();
    this.onClose();
  }











  onClear(){
    this.formarchives.initialisation_archive();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  openDialog(x){
    this.formarchives.formArchive.get('cniPersonnel').setValue(x);
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
}
