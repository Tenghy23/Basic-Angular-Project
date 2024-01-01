import { Component, Input, Output, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'child2',
  templateUrl: 'child2.component.html',
  styleUrls: ['./child2.component.scss'],
})
export class Child2Component implements OnInit {

  private childMessage: string;
  @Input() parentMessageToChild: string;
  @Output() childMessageToParent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.childMessage = "Hello, I am the child";
  }

  // create private method to retrieve private child message
  getChildMessage() : string {
    return this.childMessage;
  }

  // send message from child to parent via private method
  sendChildMessageToParent(value: string): void {
    this.childMessageToParent.emit(value);
  }
}
