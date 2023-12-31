import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage';
import { LoginpageComponent } from './loginpage';
import { ParentComponent } from './parent/parent.component';
import { Parent2Component } from './parent2/parent2.component';
import { FormComponent } from './form/form.component';
import { DependencyInjectionComponent } from './dependencyInjection/dependencyInjection.component';


const routes: Routes = [
    {path: '', component: HomepageComponent },
    {path: 'Login', component: LoginpageComponent },
    {path: 'Parent', component: ParentComponent},
    {path: 'Parent2', component: Parent2Component},
    {path: 'Form', component: FormComponent},
    {path: 'DependencyInjection', component: DependencyInjectionComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule {};
