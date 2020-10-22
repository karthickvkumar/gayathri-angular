import { Component, OnInit } from '@angular/core';
// import {LoginModel, LoginErrorModel} from './login.model'
import * as Types from './login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // userName: string = '';
  // password: string = '';
  login: Types.Model.LoginModel = {
    username: '',
    password: '',
    captcha: ''
  }

  error: Types.Model.LoginErrorModel = {
    username: '',
    password: '',
    captcha: ''
  }


  listOfName: string[] = ['mr.a', 'mr.b','mr.c']
  listOfScore: number[] = [100,90,80]

  studentList : Types.Model.studentModel[]= [
    {
      name : 'mr.a',
      score: 100
    },
    {
      name : 'mr.b',
      score: 89
    },
    {
      name : 'mr.c',
      score: 76
    }
  ]

  displayText:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleText(){
    this.displayText = !this.displayText;
  }

  onLogin(): any{
    console.log(this.login)
    // let request = {
    //   username: this.userName,
    //   password: this.password
    // }
    // console.log(request)
  }

}
