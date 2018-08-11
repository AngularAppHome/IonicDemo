import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { MatTable } from '@angular/material/table';
@Injectable()
export class DoctorService {

  constructor(private http: HttpClient) { }
  baseUrl: string = ' https://medappapi.herokuapp.com/';
  getDoctors() {
    return this.http.get<Doctor[]>(this.baseUrl+'doctors');
  }
  addDoctor(data) {
    let httpHeaders = new   HttpHeaders().set('Content-Type','application/json')
    let options ={headers:httpHeaders}
    return this.http.post<Doctor[]>(this.baseUrl,data,options);
  }
  deleteDoctor(id){
    return this.http.delete(this.baseUrl + 'doctors/' + id);
    //return this.http.delete<Doctor[]>(this.baseUrl + '/' + id);
  }
  getDoctorById(id){
    return this.http.get<Doctor>(this.baseUrl+ 'doctors/' + id);
  }
  editDoctor(data){
    let httpHeaders = new   HttpHeaders().set('Content-Type','application/json')
    let options ={headers:httpHeaders}
    return this.http.put(this.baseUrl + 'doctors/' + data._id, data,options);
  }
}

export interface Doctor{
  _id :string,
  name:string,  
  username:string,
  password:string,
  email:string,
  phone:string
}