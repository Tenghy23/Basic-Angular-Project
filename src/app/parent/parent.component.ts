import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'parent',
  templateUrl: 'parent.component.html',
  styles: []
})
export class ParentComponent implements OnInit {

  private parentMsg: string;
  private parentMsgToChild: string;

  constructor() { }

  ngOnInit() {
    this.parentMsg = "Hello I am parent";
    this.parentMsgToChild = "Hello this is a message from your parent";
  }

}
