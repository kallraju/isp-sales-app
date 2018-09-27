import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { NEWCAFComponent } from './new-caf/new-caf.component';
import { CAFStatusComponent } from './caf-status/caf-status.component';
import { SalesReportComponent } from './sales-report/sales-report.component';
import { TaskComponent } from './task/task.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpTokenInterceptService } from './http-token-intercept.service';
import { LogoutComponent } from './logout/logout.component';
import { BsDatepickerModule} from 'ngx-bootstrap/datepicker';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    NEWCAFComponent,
    CAFStatusComponent,
    SalesReportComponent,
    TaskComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BsDatepickerModule
    ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpTokenInterceptService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
