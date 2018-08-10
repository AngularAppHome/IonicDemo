
import { Component,OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SplashPage } from '../splash/splash';
import { PatientService } from '../../app/patient.service';

@Component({
  selector: 'page-patient',
  templateUrl: 'patient.html',
  providers:[PatientService]
})
export class PatientPage  implements OnInit {
  patientList
  constructor(public navCtrl: NavController,private patientSvc :PatientService) {
    
  }
  ngOnInit() {
    //this.doctors=[{name:"Yogesh"},{name:"Gopi"},{name:"Seshu"}]
    this.patientSvc.getPatients().subscribe(data => this.patientList = data);;
  }
  goSplash(){
    this.navCtrl.push(SplashPage);
  }

}