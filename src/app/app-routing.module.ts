import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { NEWCAFComponent } from './new-caf/new-caf.component';
import { CAFStatusComponent } from './caf-status/caf-status.component';
import { ServiceService} from './service.service';
const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'menu', component: MenuComponent, children: [
  {path: 'caf-status', component: CAFStatusComponent, canActivate : [ServiceService]},
  {path: 'new-caf', component: NEWCAFComponent}
  ]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
