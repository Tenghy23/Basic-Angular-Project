import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { formGroupNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';

@Component({
  selector: 'formNestGroupComponent',
  templateUrl: 'formNestGroup.component.html',
  styleUrls: ['formNestGroup.component.scss'],
})
export class FormNestGroupComponent implements OnInit {
nestProfileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
        street: new FormControl(''),
        city: new FormControl(''),
        state: new FormControl(''),
        zip: new FormControl(''),
    })
});

private displayFirstName: string;
private displayLastName: string;
private displayStreet: string;
private displayCity: string;
private displayState: string;
private displayZip: string;

  constructor() { }

  ngOnInit() {
  }

  updateNest(): void{
      this.displayFirstName = this.nestProfileForm.get('firstName').value;
      this.displayLastName = this.nestProfileForm.get('lastName').value;
    
      this.displayStreet = this.nestProfileForm.get('address').get('street').value;
      this.displayCity = this.nestProfileForm.get('address').get('city').value;
      this.displayState = this.nestProfileForm.get('address').get('state').value;
      this.displayZip = this.nestProfileForm.get('address').get('zip').value;
  }
}
