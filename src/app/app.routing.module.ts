import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage';
import { LoginpageComponent } from './loginpage';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
    {path: '', component: HomepageComponent },
    {path: 'Login', component: LoginpageComponent },
    {path: 'Parent', component: ParentComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule {};
