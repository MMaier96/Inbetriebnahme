import { TransportOrderDetails } from './dialogs/transport-order/details/transport-order-details.dialog';
import { ServicesDialog } from './dialogs/services/services.dialog';
import { ControllerDialog } from './dialogs/controller/controller.dialog';
import { LocationsDialog } from './dialogs/locations/locations.dialog';
import { TransportUnitDetails } from './dialogs/transport-unit/details/transport-unit-details.dialog';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransportUnitDialog } from './dialogs/transport-unit/transport-unit.dialog';
import { TransportOrderDialog } from './dialogs/transport-order/transport-order.dialog';
import { DashboardDialog } from './dialogs/dashboard/dashboard.dialog';

const routes: Routes = [
  { path: '', component: DashboardDialog },
  { path: 'controller', component: ControllerDialog },
  { path: 'dashboard', component: DashboardDialog },
  { path: 'locations', component: LocationsDialog },
  { path: 'locations/:filter', component: LocationsDialog },
  { path: 'transport-units', component: TransportUnitDialog },
  { path: 'transport-units/details/:tuName', component: TransportUnitDetails },
  { path: 'transport-units/:filter', component: TransportUnitDialog },
  { path: 'transport-orders', component: TransportOrderDialog },
  { path: 'transport-orders/details/:toName', component: TransportOrderDetails },
  { path: 'transport-orders/:filter', component: TransportOrderDialog },
  { path: 'services', component: ServicesDialog }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
