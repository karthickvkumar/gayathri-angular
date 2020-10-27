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
  constructor() { }

  ngOnInit(): void {
  }

  onChangeHobbies(event, index){
    console.log(event.target.value, event.target.checked, index)
    
    if(event.target.checked){
      this.registerData.hobbies.push(event.target.value)
    }
    else{
      let index = this.registerData.hobbies.findIndex(value => value == event.target.value)
      this.registerData.hobbies.splice(index, 1);
    }
    
    console.log(this.registerData)
  }

  onRegister(){
    console.log(this.registerData)
  }
}
