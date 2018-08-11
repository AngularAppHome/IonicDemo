
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SplashPage } from '../splash/splash';
import { DoctorPage } from '../doctorpage/doctor';
import { MedicalPage } from '../medicalpage/medical';
import { PatientPage } from '../patient/patient';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  logType:String
  constructor(public navCtrl: NavController) {

  }
  onLogin(){
    if(this.logType=="doc"){
      this.navCtrl.push(DoctorPage);
    }
    else if(this.logType=="pat"){
      this.navCtrl.push(PatientPage);
    }
    else if(this.logType=="med"){
      this.navCtrl.push(MedicalPage);
    }
  }
  //logType
  goSplash(){
    this.navCtrl.push(SplashPage);
  }

}
