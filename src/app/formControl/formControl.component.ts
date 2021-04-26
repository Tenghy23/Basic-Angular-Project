import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'formControlComponent',
  templateUrl: 'formControl.component.html',
  styleUrls: ['formControl.component.scss'],
})
export class FormControlComponent implements OnInit {
  name = new FormControl('', [Validators.required]);

  private displayFormControl: string;

  constructor() { }

  ngOnInit() {
  }

  updateName(): void{
    this.displayFormControl = this.name.value;
  }
}
