import { TransportUnitsComponent } from './components/transport-units/transport-units.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {    path: '',                    component: DashboardComponent },
  {    path: 'dashboard',           component: DashboardComponent },
  {    path: 'transport-units',     component: TransportUnitsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
