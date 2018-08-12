import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SplashPage } from '../splash/splash';
import { PatientService } from '../../app/patient.service';
import { AlertController } from 'ionic-angular';
import {MenuController} from 'ionic-angular';



@Component({
  selector: 'page-patient',
  templateUrl: 'patient.html',
  providers: [PatientService]
})
export class PatientPage implements OnInit {
  patientList
  constructor(public navCtrl: NavController, private patientSvc: PatientService, public alertCtrl: AlertController,public menuCtrl : MenuController) {

  }
  ngOnInit() {
    //this.doctors=[{name:"Yogesh"},{name:"Gopi"},{name:"Seshu"}]
    this.patientSvc.getPatients().subscribe(data => this.patientList = data);;
  }
  openPage(){
    this.menuCtrl.open();
  }
  closeMenu(){
    this.menuCtrl.close();
  }
  opendialog() {
    const prompt = this.alertCtrl.create({
      buttons: [
        {
          text: 'Authentication Patient',
          handler: data => {




            console.log('Authentication Patient clicked');
          }
        },
        {
          text: 'Medical Billing',
          handler: data => {
            console.log('Medical Billing clicked');
          }
        },
        {
          text: 'History',
          handler: data => {
            console.log('History clicked');
          }
        },
        {
          text: 'Reports',
          handler: data => {
            console.log('Reports clicked');
          }
        }
      ]
    });
    prompt.present();
  }

  goSplash() {
    this.navCtrl.push(SplashPage);
  }
}
