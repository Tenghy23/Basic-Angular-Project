import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder,Validators, Form } from '@angular/forms';
import { formGroupNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';

@Component({
  selector: 'formBuilderComponent',
  templateUrl: 'formBuilder.component.html',
  styleUrls: ['formBuilder.component.scss'],
})
export class FormBuilderComponent implements OnInit {

builderForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    address: this.fb.group({
        street: [''],
        city: [''],
        state: [''],
        zip: [''],
    })
});

private displayFirstName: string;
private displayLastName: string;
private displayStreet: string;
private displayCity: string;
private displayState: string;
private displayZip: string;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  updateNest(): void{
      this.displayFirstName = this.builderForm.get('firstName').value;
      this.displayLastName = this.builderForm.get('lastName').value;
    
      this.displayStreet = this.builderForm.get('address').get('street').value;
      this.displayCity = this.builderForm.get('address').get('city').value;
      this.displayState = this.builderForm.get('address').get('state').value;
      this.displayZip = this.builderForm.get('address').get('zip').value;
  }
}
