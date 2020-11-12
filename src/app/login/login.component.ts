import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';
// import {LoginModel, LoginErrorModel} from './login.model'
import * as Types from './login.model';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnChanges, DoCheck {

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

  passwordType : boolean = false;
  passwordStrength : boolean = false;

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

  constructor(private router : Router, private api : ApiService) { }

  ngOnInit(): void {
    //alert('Trigger NG-ONINTI')
  }

  ngOnChanges(){
    console.log("Triggering Input Values")
  }

  ngDoCheck(){
    console.log("Model Values are changing")
  }

  toggleText(){
    this.displayText = !this.displayText;
  }

  onLogin(): any{
    console.log(this.login)
    let data = {
      email : this.login.username,
      password : this.login.password
    }
    if(this.login.username != '' && this.login.password != ''){
      this.api.login(data).subscribe((response) => {
        console.log(response)
        this.router.navigateByUrl('/home')
      }, (error) => {
        console.log(error)
        alert(error.message)
      })      
    }
    else{
      alert('Please enter proper Username or Password')
    }
  }

  checkPassword(){
    this.passwordStrength = this.login.password.length > 8;
  }

  onFous(){
    console.log('Password field is FOCU')
    this.passwordType = true;
  }
  
  onBlur(){
    console.log('Password field is OUT OF FOCU')
    this.passwordType = false;
  }

}
