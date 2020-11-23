import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public sharedData = new BehaviorSubject('');
  public sharedInfo = this.sharedData.asObservable();

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

  editUser(user){
    let url : string = this.BaseURL + "/users/2";
    return this.http.put(url, user)
  }

  deleteUser(){
    let url : string = this.BaseURL + "/users/2";
    return this.http.delete(url);
  }

  login(data){
    let url : string = this.BaseURL + '/login';
    return this.http.post(url, data);
  }

  updateInformation(message){
    this.sharedData.next(message)
  }
}
