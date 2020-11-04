import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
 
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  formData : any = {
    name: '',
    job : ''
  }

  constructor(private apiService : ApiService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.formData.name !== '' && this.formData.job !== ''){
      this.apiService.createUser(this.formData).subscribe((response) => {
        console.log(response)
      }, (error) => {
        console.log(error)
      })
    }
    else{
      alert("Invalid Data")
    }
   
  }

}
