import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AjaxService {
 constructor(private http: HttpClient) {
     //empty constructor
 }
  getMethod(url:string){
    return this.http.get<any>(url,{responseType: 'json'});
  }
}