import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent implements OnInit {
  @Input('data') userEmail : string;
  constructor() { }

  ngOnInit(): void {
  }

}
