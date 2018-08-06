
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SplashPage } from '../splash/splash';

@Component({
  selector: 'page-medical',
  templateUrl: 'medical.html'
})
export class MedicalPage {

  constructor(public navCtrl: NavController) {

  }
  goSplash(){
    this.navCtrl.push(SplashPage);
  }

}