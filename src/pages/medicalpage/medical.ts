
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SplashPage } from '../splash/splash';
import { MedicalService } from '../../app/medical.service';

@Component({
  selector: 'page-medical',
  templateUrl: 'medical.html',
  providers:[MedicalService]
})
export class MedicalPage {
  medicalList
  constructor(public navCtrl: NavController,private medicalSvc :MedicalService) {
    this.medicalSvc.getMedicals().subscribe(data => this.medicalList = data);;
  }
  goSplash(){
    this.navCtrl.push(SplashPage);
  }

}