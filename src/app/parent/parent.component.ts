import { Component, OnInit, ViewChild } from '@angular/core';
import {ChildrenComponent } from '../children/children.component';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  emailId : string = '';
  constructor(private apiService : ApiService) { }
  message :string = '';

  @ViewChild(ChildrenComponent, {static: false}) private childReference;
  
  ngOnInit(): void {
  }

  onReceiveEvent(value){
    this.message = value;
    this.apiService.updateInformation(value)
  }

}
