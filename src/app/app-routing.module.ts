import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { NEWCAFComponent } from './new-caf/new-caf.component';
import { CAFStatusComponent } from './caf-status/caf-status.component';
const routes: Routes = [
{path:'', component:LoginComponent},
  {path:'caf-status', component: CAFStatusComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
