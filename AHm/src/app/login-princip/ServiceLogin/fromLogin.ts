import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {NotificationUService} from "./NotificationU";
import {ServiceAuthentification} from "./authentification.service";
import {JwtHelperService} from "@auth0/angular-jwt";


@Injectable({
  providedIn: 'root'
})
export class FormLoginserve {

  constructor(private http: HttpClient ,   public router : Router, private notification :NotificationUService,
             private  servautho : ServiceAuthentification) { }



  formLogin : FormGroup = new FormGroup({
    pseudo: new FormControl('',Validators.required),
    mot_pass: new FormControl('',Validators.required)
  });

    initialisation(){
      this.formLogin.setValue({
        pseudo: '',
        mot_pass:''
      });
    }
  jwt;

  login(user){
      this.servautho.loginn(user).
      subscribe(data=>{
        this.jwt = data.headers.get('Authorization');
        this.jwtSaveAuthontification(this.jwt);
        this.router.navigateByUrl('/menu')
      }, error1 => {
        this.notification.success("Veuillez resaisir votre Pseudo et mot de passe pour s'identifier");
      });

  }

  jwtSaveAuthontification(jwt){
    localStorage.setItem('token',jwt);
    this.parseJWT(jwt);
  }

  parseJWT(jwt){
    let jwtHelper = new JwtHelperService();
    try {
      let jwtObject = jwtHelper.decodeToken(jwt);
      return jwtObject;
    }catch (e) {
      this.logout();
    }
    return null;
  }
  isAdmin(jwt){
    let bol = true;
    if(this.parseJWT(jwt) === null) bol = false;
    else if(!(this.parseJWT(jwt).roles.indexOf("ADMIN") >= 0)){
      bol =false;
    }
    return bol;
  }
  isUser(jwt){
    let bol = true;
    if(this.parseJWT(jwt) === null) bol = false;
    else if(!(this.parseJWT(jwt).roles.indexOf("USER") >= 0)){
      bol =false;
    }
    return bol;
  }
  isAutontificated(jwt){
    let bol = true;
    if(jwt === null){
      bol =false;
    }
    return bol && (this.isAdmin(jwt) || this.isUser(jwt));
  }


  IsUserLogedOut(jwt){
    if(!this.isAutontificated(jwt)){
      this.router.navigateByUrl('');
    }

  }
  IsUserLogedOin(jwt){
    if(this.isAutontificated(jwt)){
      this.router.navigateByUrl('/menu');
    }

  }


  logout(){
    this.router.navigateByUrl('/');
    localStorage.removeItem("token");
  }


}
/*    this.cni = jwtObject.sub;
    this.roles = jwtObject.roles;*/
