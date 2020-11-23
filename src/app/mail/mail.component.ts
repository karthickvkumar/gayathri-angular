import { Component, OnInit, ViewChild } from '@angular/core';
import { InboxComponent } from '../inbox/inbox.component';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {

  @ViewChild(InboxComponent, {static: false}) private inboxReference;
  constructor() { }

  ngOnInit(): void {
  }

  onLoad(){
    console.log(this.inboxReference)
  }
}
