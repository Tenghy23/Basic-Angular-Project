import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'parent',
  templateUrl: 'parent.component.html',
  styleUrls: ['parent.component.scss'],
})
export class ParentComponent implements OnInit {

  private parentMsg: string;
  private parentMsgToChild: string;
  private messageFromChild: string;

  constructor() { }

  ngOnInit() {
    this.parentMsg = "Hello I am parent";
    this.parentMsgToChild = "Hello this is a message from your parent";
  }

  textFromChild(text: string){
    this.messageFromChild = text;
  }

}
