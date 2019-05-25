import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {NotificationUService} from "./NotificationU";


@Injectable({
  providedIn: 'root'
})
export class FormLoginserve {

  constructor(private http: HttpClient ,   public router : Router, private notification :NotificationUService) { }

  formLogin : FormGroup = new FormGroup({
    username: new FormControl('',Validators.required),
    mdp: new FormControl('',Validators.required)
  });

    initialisation(){
      this.formLogin.setValue({
        username: '',
        mdp:''
      });
    }
  login(user){
      /*
    this.etudserve.chercherEtudiant(user.username,user.mdp)
      .subscribe(data => {
          if(data != null) {
                this.router.navigateByUrl('/main');
                localStorage.setItem('username', user.username);
          }else{
            this.etudserve.chercherAdmine(user.username,user.mdp)
              .subscribe(data => {
                  if(data != null) {
                    this.router.navigateByUrl('/scolarite');
                    localStorage.setItem('admin', user.username);
                  }
                  else this.notification.success("Veuillez resaisir votre Pseudo et mot de passe pour s'identifier");

                },error1 => {
                  console.log(error1);

                }
              );
          }
        },error1 => {
          console.log(error1);

        }
      );
*/

  }

}
