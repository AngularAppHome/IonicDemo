import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../registerpage/register';

@Component({
  selector: 'page-splash',
  templateUrl: 'splash.html'
})
export class SplashPage {

  constructor(public navCtrl: NavController) {

  }
  goLogin(){
    this.navCtrl.push(LoginPage);
  }
  goRegister(){
    this.navCtrl.push(RegisterPage);
  }

}
