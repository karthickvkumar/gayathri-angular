import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  BaseURL : string = "https://reqres.in/api";

  constructor(private http : HttpClient) { }

  listUser(){
    let url : string = this.BaseURL + "/users?page=2";
    return this.http.get(url);
  }

  createUser(data){
    let url : string = this.BaseURL + "/users";
    return this.http.post(url, data);
  }
}
