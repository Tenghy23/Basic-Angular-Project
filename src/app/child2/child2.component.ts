import { Component, Input, Output, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'child2',
  templateUrl: 'child2.component.html',
  styleUrls: ['./child2.component.scss'],
})
export class Child2Component implements OnInit {

  private childMessage: string;
  
  // P3 - init variables in child to receive from parent, then use in html
  @Input() parentMessageToChild: string; 

  // C1 - init eventEmitter for data to be sent
  @Output() childMessageToParent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.childMessage = "Hello, I am the child";
  }

  // create private method to retrieve private child message
  getChildMessage() : string {
    return this.childMessage;
  }

  // C2 - create method to send data to parent, insert into html
  // send message from child to parent via private method
  sendChildMessageToParent(value: string): void {
    this.childMessageToParent.emit(value);
  }
}
