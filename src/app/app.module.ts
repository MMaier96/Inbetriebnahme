import { TransportUnitDetails } from './dialogs/transport-unit/details/transport-unit-details.dialog';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModules } from './material.modules';
import { MainComponent } from './main.component';
import { AppTitleService } from './services/app-title.service';
import { TransportOrderService } from './services/transport-order.service';
import { TransportUnitService } from './services/transport-unit.service';
import { TransportUnitDialog } from './dialogs/transport-unit/transport-unit.dialog';
import { TransportOrderDialog } from './dialogs/transport-order/transport-order.dialog';
import { DashboardDialog } from './dialogs/dashboard/dashboard.dialog';
import { AppRoutingModule } from './app-routing.module';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { IsTOActivePipe } from './pipes/is-toactive.pipe';
import { DashboardGridGutterSizePipe } from 'src/app/pipes/dashboard-grid-gutter-size.pipe';
import { DashboardGridRowHeightPipe } from './pipes/dashboard-grid-row-height.pipe';
import { DashboardGridColsPipe } from './pipes/dashboard-grid-cols.pipe';
import { DashboardGridSizePipe } from './pipes/dashboard-grid-size.pipe';
import { LoginDialog } from './dialogs/login/login.dialog';
import { HasAnyToErrorPipe } from './pipes/has-any-to-error.pipe';
import { LocationsDialog } from './dialogs/locations/locations.dialog';
import { ControllerDialog } from './dialogs/controller/controller.dialog';
import { ServicesDialog } from './dialogs/services/services.dialog';

@NgModule({
  declarations: [
    ServicesDialog,
    ControllerDialog,
    LocationsDialog,
    DashboardGridGutterSizePipe,
    DashboardGridColsPipe,
    DashboardGridSizePipe,
    DashboardGridRowHeightPipe,
    DashboardGridGutterSizePipe,
    MainComponent,
    DashboardDialog,
    TransportUnitDialog,
    TransportOrderDialog,
    CheckboxComponent,
    IsTOActivePipe,
    LoginDialog,
    TransportUnitDetails,
    HasAnyToErrorPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModules,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  entryComponents: [
  ],
  providers: [
    DashboardGridGutterSizePipe,
    DashboardGridColsPipe,
    DashboardGridRowHeightPipe,
    DashboardGridSizePipe,
    AppTitleService,
    TransportUnitService,
    TransportOrderService
  ],
  bootstrap: [MainComponent]
})
export class AppModule { }
