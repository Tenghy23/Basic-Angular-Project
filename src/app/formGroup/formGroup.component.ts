import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'formGroupComponent',
  templateUrl: 'formGroup.component.html',
  styleUrls: ['formGroup.component.scss'],
})
export class FormGroupComponent implements OnInit {
  private displayFirstName: string;
  private displayLastName: string;

  profileForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl(''),
  });

  constructor() { }

  ngOnInit() {
  }

  updateNames(): void{
    this.displayFirstName = this.profileForm.get('firstName').value;
    this.displayLastName = this.profileForm.get('lastName').value;
  }
}
