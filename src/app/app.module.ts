import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing.module'
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { FormComponent } from './form/form.component';
import { FormControlComponent } from './formControl/formControl.component';
import { FormGroupComponent } from './formGroup/formGroup.component';
import { FormNestGroupComponent } from './formNestedGroup/formNestGroup.component';
import { FormBuilderComponent } from './formBuilder/formBuilder.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    HomepageComponent,
    LoginpageComponent,
    FormComponent,
    FormControlComponent,
    FormGroupComponent,
    FormNestGroupComponent,
    FormBuilderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
