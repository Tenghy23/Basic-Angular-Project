import { Component, Input, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: 'child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  @Input() messageFromParent: string;
  @Output() messageToParent = new EventEmitter<string>();

  private childMessage: string;

  constructor() { }

  ngOnInit() {
    this.childMessage = "Hi I am child"
  }

  sendMessageToParent(value: string): void{
    this.messageToParent.emit(value);
  }

}
