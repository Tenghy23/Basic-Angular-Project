import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'child2',
  templateUrl: 'child2.component.html',
  styleUrls: ['./child2.component.scss'],
})
export class Child2Component implements OnInit {

  private childMessage: string;
  @Input() messageFromParent: string;

  constructor() { }

  ngOnInit() {
    this.childMessage = "Hello, I am the child";
  }

  // create private method to retrieve private child message
  getChildMessage() : string {
    return this.childMessage;
  }
}
