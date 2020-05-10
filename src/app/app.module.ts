import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { GoogleChartsModule } from 'angular-google-charts';

// import { Http, Headers, Response } from '@angular/http';
import bootstrap from "bootstrap";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SidebarDirective } from './navigation/sidebar.directive';
import { ManageApiConsumersComponent } from './manage-api-consumers/manage-api-consumers.component';
import { ConfigApiDataComponent } from './config-api-data/config-api-data.component';
import { ConfigAodbDataComponent } from './config-aodb-data/config-aodb-data.component';
import { ScheduleApiProfileComponent } from './schedule-api-profile/schedule-api-profile.component';
import { RegisterApiConsumerComponent } from './register-api-consumer/register-api-consumer.component';
import { ManageFtpServerComponent } from './manage-ftp-server/manage-ftp-server.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NavigationComponent,
    SidebarDirective,
    ManageApiConsumersComponent,
    ConfigApiDataComponent,
    ConfigAodbDataComponent,
    ScheduleApiProfileComponent,
    RegisterApiConsumerComponent,
    ManageFtpServerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    GoogleChartsModule
  ],
  providers: [NavigationComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
