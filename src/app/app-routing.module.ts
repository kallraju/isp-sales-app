import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { NEWCAFComponent } from './new-caf/new-caf.component';
import { CAFStatusComponent } from './caf-status/caf-status.component';
import { ServiceService} from './service.service';
import { SalesReportComponent } from './sales-report/sales-report.component';
import { TaskComponent } from './task/task.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'menu', component: MenuComponent, canActivate : [ServiceService], children: [
  {path: 'caf-status', component: CAFStatusComponent, canActivate : [ServiceService]},
  {path: 'new-caf', component: NEWCAFComponent, canActivate : [ServiceService]},
  {path: 'sales', component: SalesReportComponent, canActivate: [ServiceService]},
  {path: 'task', component: TaskComponent, canActivate: [ServiceService]},
  {path: 'logout', component: LogoutComponent, canActivate: [ServiceService]}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
