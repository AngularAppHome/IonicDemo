import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { MatTable } from '@angular/material/table';
@Injectable()
export class MedicalService {

  constructor(private http: HttpClient) { }
  baseUrl: string = ' https://medappapi.herokuapp.com/';
  getMedicals() {
    return this.http.get<Medical[]>(this.baseUrl+'medicals');
  }
  addMedical(data) {
    let httpHeaders = new   HttpHeaders().set('Content-Type','application/json')
    let options ={headers:httpHeaders}
    return this.http.post<Medical[]>(this.baseUrl,data,options);
  }
  deleteMedical(id){
    return this.http.delete(this.baseUrl + 'medicals/' + id);
    //return this.http.delete<Medical[]>(this.baseUrl + '/' + id);
  }
  getMedicalById(id){
    return this.http.get<Medical>(this.baseUrl+ 'medicals/' + id);
  }
  editMedical(data){
    let httpHeaders = new   HttpHeaders().set('Content-Type','application/json')
    let options ={headers:httpHeaders}
    return this.http.put(this.baseUrl + 'medicals/' + data._id, data,options);
  }
}

export interface Medical{
  _id :string,
  name:string,  
  username:string,
  password:string,
  email:string,
  phone:string
}




  



