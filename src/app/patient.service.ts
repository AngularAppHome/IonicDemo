import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { MatTable } from '@angular/material/table';
@Injectable()
export class PatientService {

  constructor(private http: HttpClient) { }
  baseUrl: string = ' https://medappapi.herokuapp.com/';
  getPatients() {
    return this.http.get<Patient[]>(this.baseUrl+'patients');
  }
  addPatient(data) {
    let httpHeaders = new   HttpHeaders().set('Content-Type','application/json')
    let options ={headers:httpHeaders}
    return this.http.post<Patient[]>(this.baseUrl,data,options);
  }
  deletePatient(id){
    return this.http.delete(this.baseUrl + 'patients/' + id);
    //return this.http.delete<Patient[]>(this.baseUrl + '/' + id);
  }
  getPatientById(id){
    return this.http.get<Patient>(this.baseUrl+ 'patients/' + id);
  }
  editPatient(data){
    let httpHeaders = new   HttpHeaders().set('Content-Type','application/json')
    let options ={headers:httpHeaders}
    return this.http.put(this.baseUrl + 'patients/' + data._id, data,options);
  }
}

export interface Patient{
  _id :string,
  name:string,  
  username:string,
  password:string,
  email:string,
  phone:string
}




  



