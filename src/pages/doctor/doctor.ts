
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SplashPage } from '../splash/splash';

@Component({
  selector: 'page-doctor',
  templateUrl: 'doctor.html'
})
export class DoctorPage {

  constructor(public navCtrl: NavController) {

  }
  goSplash(){
    this.navCtrl.push(SplashPage);
  }

}
