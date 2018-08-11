
import { Component,OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SplashPage } from '../splash/splash';
import { PatientService } from '../../app/patient.service';
import { ActionSheetController } from 'ionic-angular';



@Component({
  selector: 'page-patient',
  templateUrl: 'patient.html',
  providers:[PatientService]
})
export class PatientPage  implements OnInit {
  patientList
  constructor(public navCtrl: NavController,private patientSvc :PatientService,public actionSheetCtrl: ActionSheetController) {
    
  }
  ngOnInit() {
    //this.doctors=[{name:"Yogesh"},{name:"Gopi"},{name:"Seshu"}]
    this.patientSvc.getPatients().subscribe(data => this.patientList = data);;
  }
  opendialog() {
    const actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Authentication Patient',
          role: 'Authentication Patient',
          handler: () => {
            console.log('Authentication Patient clicked');
          }
        },{
          text: 'Medical Billing',
          role: 'Medical Billing',
          handler: () => {
            console.log('Medical Billing clicked');
          }
        },{
          text: 'History',
          role: 'History',
          handler: () => {
            console.log('History clicked');
          }
        },{
          text: 'Reports',
          role: 'Reports',
          handler: () => {
            console.log('Reports clicked');
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
  
  goSplash(){
    this.navCtrl.push(SplashPage);
  }
}
