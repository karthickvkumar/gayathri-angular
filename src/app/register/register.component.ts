import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerData : any = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    dob: '',
    gender: '',
    hobbies: [],
    address: '',
    state: ''
  }

  registerError : any = {
    firstName: false,
    lastName: false,
    email: false,
    password: false,
    dob: false,
    gender: false,
    hobbies: false,
    address: false,
    state: false
  }
  
  constructor() { }

  ngOnInit(): void {
  }

  onChangeHobbies(event){    
    if(event.target.checked){
      this.registerData.hobbies.push(event.target.value)
    }
    else{
      let index = this.registerData.hobbies.findIndex(value => value == event.target.value)
      this.registerData.hobbies.splice(index, 1);
    }
    
    console.log(this.registerData)
  }

  onInputFocus(event){
    // if(event.target.name == 'firstName'){
    //   this.registerError.firstName = false;
    // }
    // if(event.target.name == 'lastName'){
    //   this.registerError.lastName = false;
    // }
    // if(event.target.name == 'email'){
    //   this.registerError.email = false;
    // }
    this.registerError[event.target.name] = false;
  }

  onInputBlur(event){
    // if(event.target.name == 'firstName'){
    //   this.registerError.firstName = this.registerData.firstName == '' ? true : false
    // }
    // if(event.target.name == 'lastName'){
    //   this.registerError.lastName = this.registerData.lastName == '' ? true : false
    // }
    // if(event.target.email == 'email'){
    //   this.registerError.email = this.registerData.email == '' ? true : false
    // }
    this.registerError[event.target.name] = this.registerData[event.target.name] == '' ? true : false
  }

  onRegister(){
    // this.registerError.gender = this.registerData.gender == '' ? true : false;
    // this.registerError.hobbies = this.registerData.hobbies == '' ? true : false;
    // this.registerError.state = this.registerData.state == '' ? true : false;
    for(let key in this.registerError){
      console.log(key)
      this.registerError[key] = this.registerData[key] == '' ? true : false;
    }
  }
}
