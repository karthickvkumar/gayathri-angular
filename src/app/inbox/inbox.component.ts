import { Component, OnInit, OnDestroy } from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit, OnDestroy {

  inboxValue :any  = {
    value: ''
  }
  constructor(private apiService : ApiService) { }

  ngOnInit(): void {
    this.apiService.sharedInfo.subscribe((data) => {
      console.log(data)
      this.inboxValue.value = data
    })
  }

  ngOnDestroy(){
    confirm("Do you want to leave this page")
  }

}
