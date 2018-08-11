
import { Component,OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SplashPage } from '../splash/splash';
import { MedicalService } from '../../app/medical.service';
import { AlertController } from 'ionic-angular';
@Component({
  selector: 'page-medical',
  templateUrl: 'medical.html',
  providers:[MedicalService]
})
export class MedicalPage {
  medicalList
  constructor(public navCtrl: NavController,private medicalSvc :MedicalService,public alertCtrl: AlertController) {
      }
      ngOnInit() {
        this.medicalSvc.getMedicals().subscribe(data => this.medicalList = data);;
  }

   openDialog () {
    const alert = this.alertCtrl.create({
       buttons : [
     {
      
       text: "AuthenticationPatient",
       handler: data => {
         
          
          
         console.log("AuthenticationPatient clicked");
       }
     },
     {
       text: "Medicin Billing",
       handler: data => {
         console.log("Medicin Billing clicked");
       }
     },
      {
       
       text: "Orders",
       handler: data => {
         console.log("History clicked");
       }
     },
      {
       
       text: "Reports",
       handler: data => {
         console.log("Reports clicked");
       }
     }

    ]      
      
    });
    alert.present();
  }
  goSplash(){
    this.navCtrl.push(SplashPage);
  }

}
