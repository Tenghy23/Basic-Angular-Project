import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'parent2',
  templateUrl: 'parent2.component.html',
  styleUrls: ['parent2.component.scss'],
})

export class Parent2Component implements OnInit {

  @Input() parentMessage: string;

  constructor() { }

  ngOnInit() {
    this.parentMessage = "Hello I am the parent";
  }

}
