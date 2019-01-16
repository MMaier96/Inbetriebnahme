import { WamasTransportUnitsDialog } from './dialogs/wamas-dialogs/wamas-transport-units-dialog/wamas-transport-units.dialog';
import { WamasDashboardDialog } from './dialogs/wamas-dialogs/wamas-dashboard-dialog/wamas-dashboard.dialog';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {    path: '',                    component: WamasDashboardDialog },
  {    path: 'dashboard',           component: WamasDashboardDialog },
  {    path: 'transport-units',     component: WamasTransportUnitsDialog }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
