import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  employeeList: any[] = [
    {
      name: 'Mr.A',
      designation: 'UI Developer',
      companyName: 'HCL',
      location: 'Chennai'
    },
    {
      name: 'Mr.B',
      designation: 'PHP Developer',
      companyName: 'TCS',
      location: 'Madurai'
    },
    {
      name: 'Mr.C',
      designation: 'JAVA Developer',
      companyName: 'Amazon',
      location: 'Banglore'
    },
    {
      name: 'Mr.D',
      designation: 'Frontend devloper',
      companyName: 'HCL',
      location: 'Mumbai'
    },
    {
      name: 'Mr.E',
      designation: 'Database Admin',
      companyName: 'HCL',
      location: 'Chennai'
    },
  ];
  newEmployeeList : any[] = []
  employeeData: any = {
    name: '',
    designation: '',
    companyName: '',
    location: ''
  }

  UserFromAPI : any = [];

  constructor(private apiService : ApiService) { }

  ngOnInit(): void {
  }

  onSubmitEmployee(){
      console.log(this.employeeData)
      this.newEmployeeList.push(this.employeeData)
      this.employeeData = {
        name: '',
        designation: '',
        companyName: '',
        location: ''
      }
  }

  onDeleteEmployee(index){
    console.log(index)
    this.newEmployeeList.splice(index, 1)
  }

  onLoadUser(){
    this.apiService.listUser().subscribe((response : any) => {
      console.log(response.data)
      this.UserFromAPI = response.data;
    }, (error) => {
      console.log(error)
    })
  }

}
