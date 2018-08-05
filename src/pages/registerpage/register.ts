
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SplashPage } from '../splash/splash';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  constructor(public navCtrl: NavController) {

  }
  goSplash(){
    this.navCtrl.push(SplashPage);
  }

}
