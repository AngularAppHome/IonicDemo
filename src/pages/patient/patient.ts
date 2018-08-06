
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SplashPage } from '../splash/splash';

@Component({
  selector: 'page-patient',
  templateUrl: 'patient.html'
})
export class PatientPage {

  constructor(public navCtrl: NavController) {

  }
  goSplash(){
    this.navCtrl.push(SplashPage);
  }

}