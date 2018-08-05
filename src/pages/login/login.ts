
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SplashPage } from '../splash/splash';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {

  }
  goSplash(){
    this.navCtrl.push(SplashPage);
  }

}
