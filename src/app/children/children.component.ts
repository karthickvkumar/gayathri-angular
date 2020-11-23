import { Component, OnInit, Input, Output, EventEmitter,  } from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent implements OnInit {
  @Output() messageEvent = new EventEmitter();
  @Input('data') userEmail : string;
  message : string = '';
  constructor() { }

  ngOnInit(): void {
  }

  onMessageChange(){
    this.messageEvent.emit(this.message)
  }
}
