import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageApiConsumersComponent } from './manage-api-consumers/manage-api-consumers.component';
import { ConfigApiDataComponent } from './config-api-data/config-api-data.component';
import { ConfigAodbDataComponent } from './config-aodb-data/config-aodb-data.component';
import { ScheduleApiProfileComponent } from './schedule-api-profile/schedule-api-profile.component';
import { RegisterApiConsumerComponent } from './register-api-consumer/register-api-consumer.component';
import { ManageFtpServerComponent } from './manage-ftp-server/manage-ftp-server.component';

const routes: Routes = [
{ path: '' , redirectTo: '/login', pathMatch: 'full' },
{ path: 'login', component: LoginComponent },
{  
   path: 'menu',  
   component: NavigationComponent,
   children:[
   	{ path: 'dashboard', component: DashboardComponent },
   	{ path: 'manage-api-consumers', component: ManageApiConsumersComponent },
   	{ path: 'config-api-data', component: ConfigApiDataComponent },
   	{ path: 'config-aodb-data', component: ConfigAodbDataComponent },
   	{ path: 'schedule-api-profile', component: ScheduleApiProfileComponent },
   	{ path: 'register-api-consumer', component: RegisterApiConsumerComponent },
   	{ path: 'manage-ftp-server', component: ManageFtpServerComponent }
   ]  
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
