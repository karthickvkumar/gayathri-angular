import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  textMessage = "Hello, Good Morning";
  selectedColor = 'red';
  selectedCSS = false;

  constructor() { }

  ngOnInit(): void {
  }

  printMessage(){
    let message = "sdfsd";
    const pi = 3.14;
  }

}
