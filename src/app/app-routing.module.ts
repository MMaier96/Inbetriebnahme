import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransportUnitDialog } from './dialogs/transport-unit/transport-unit.dialog';
import { TransportOrderDialog } from './dialogs/transport-order/transport-order.dialog';
import { DashboardDialog } from './dialogs/dashboard/dashboard.dialog';

const routes: Routes = [
  { path: '', component: DashboardDialog },
  { path: 'dashboard', component: DashboardDialog },
  { path: 'transport-units', component: TransportUnitDialog },
  { path: 'transport-orders', component: TransportOrderDialog }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
