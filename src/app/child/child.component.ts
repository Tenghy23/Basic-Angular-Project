import { Component, Input, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: 'child.component.html',
  styles: []
})
export class ChildComponent implements OnInit {
  @Input() messageToChild: string;

  private childMessage: string;

  constructor() { }

  ngOnInit() {
    this.childMessage = "Hi I am child"
  }

}
