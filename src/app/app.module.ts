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
import { DependencyInjectionComponent } from './dependencyInjection/dependencyInjection.component';
import { Parent2Component } from './parent2/parent2.component';
import { Child2Component } from './child2/child2.component';

@NgModule({
  declarations: [
    AppComponent,
    Parent2Component,
    Child2Component,
    HomepageComponent,
    LoginpageComponent,
    FormComponent,
    FormControlComponent,
    FormGroupComponent,
    FormNestGroupComponent,
    FormBuilderComponent,
    DependencyInjectionComponent,
    Child2Component,
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
