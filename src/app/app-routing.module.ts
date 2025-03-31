import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { IntroComponent } from './pages/intro/intro.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LogupComponent } from './pages/logup/logup.component';

const routes: Routes = [
  {path:"", component:IntroComponent},
  {path:"login", component:LoginComponent},
  {path: "dashboard", component: DashboardComponent},
  {path: "logup", component: LogupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
