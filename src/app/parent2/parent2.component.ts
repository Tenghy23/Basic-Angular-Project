import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'parent2',
  templateUrl: 'parent2.component.html',
  styleUrls: ['parent2.component.scss'],
})

export class Parent2Component implements OnInit {

  private parentMessage: string; // P1 - init variables
  public parentMessageToChild: string; // P1 - init variables

  // same, this is declared as public
  childMessageToParent: string; // C3 - init variable for data from child

  constructor() { }

  // P2 - onInit variables in parent
  ngOnInit() {
    this.parentMessage = "Hello, I am the parent";
    this.parentMessageToChild = "Parent sends static message to child";
  }

  // create private method to retrieve private parent message
  getParentMessage() : string {
    return this.parentMessage;
  }

  // C4 - method to access data from child, use in html
  // create private method to access message from child
  messageFromChild(text: string){
    this.childMessageToParent = text;
  }
}
