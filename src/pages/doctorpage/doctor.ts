
import { Component,OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SplashPage } from '../splash/splash';
import { DoctorService } from '../../app/doctor.service';
import { AlertController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';

@Component({
  selector: 'page-doctor',
  templateUrl: 'doctor.html',
  providers:[DoctorService]
})
export class DoctorPage implements OnInit {
  patientList
  constructor(public navCtrl: NavController,private doctorSvc : DoctorService,public alertCtrl: AlertController,public menuCtrl: MenuController) {
  }
   openPage() {
   this.menuCtrl.open();
   
 }
  closeMenu() {
   this.menuCtrl.close();
 }

  ngOnInit() {
    //this.doctors=[{name:"Yogesh"},{name:"Gopi"},{name:"Seshu"}]
    this.doctorSvc.getDoctors().subscribe(data => this.patientList = data);;
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
       text: "History",
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
