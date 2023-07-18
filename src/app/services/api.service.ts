import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  baseUrl="http://localhost:3000/";

  getproperties(){
    return this.http.get(this.baseUrl+"properties/");
  }

  getproperty(id:number){
    return this.http.get(this.baseUrl+"properties/"+id);
  }

  deleteproperty(id:number){
    return this.http.delete(this.baseUrl+"properties/"+id);
  }

  postproperty(data:any){
    return this.http.post(this.baseUrl+"properties/",data);
  }

  updateproperty(id:number, data:any){
    return this.http.put(this.baseUrl+"properties/"+id,data);
  }

  getfinance(){
    return this.http.get(this.baseUrl+"finance/");
  }

  gettenants(){
    return this.http.get(this.baseUrl+"tenants");
  }

  getmaintenance(){
    return this.http.get(this.baseUrl+"maintenance/");
  }

  getpropertytype(){
    return this.http.get(this.baseUrl+"property_type/");
  }

  getnearbyplaces(){
    return this.http.get(this.baseUrl+"nearby_places/");
  }

  upload(formdata:FormData){
    return this.http.post(this.baseUrl+"images/",formdata);
  }
}
