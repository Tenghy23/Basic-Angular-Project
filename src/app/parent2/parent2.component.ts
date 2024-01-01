import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'parent2',
  templateUrl: 'parent2.component.html',
  styleUrls: ['parent2.component.scss'],
})

export class Parent2Component implements OnInit {

  private parentMessage: string;
  public parentMessageToChild: string;

  constructor() { }

  ngOnInit() {
    this.parentMessage = "Hello, I am the parent";
    this.parentMessageToChild = "Parent sends this message to child";
  }

  // create private method to retrieve private parent message
  getParentMessage() : string {
    return this.parentMessage;
  }
}
