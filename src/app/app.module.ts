import { LoginService } from './services/login.service';
import { NgModule } from '@angular/core';
import { TransportUnitDetails } from './dialogs/transport-unit/details/transport-unit-details.dialog';
import { TransportOrderDetails } from './dialogs/transport-order/details/transport-order-details.dialog';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModules } from './material.modules';
import { MainComponent } from './main.component';
import { AppTitleService } from './services/app-title.service';
import { TransportOrderService } from './services/transport-order.service';
import { TransportUnitService } from './services/transport-unit.service';
import { LocationService } from './services/locations.service';
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
import { ServiceStatusComponent } from './components/service-status/service-status.component';
import { ServiceStatusColorPipe } from './pipes/service-status-color.pipe';
import { ServicesService } from './services/services.service';
import { ExternalDialogLink } from './components/external-dialog-link/external-dialog-link';
import { TruncPipe } from './pipes/trunc.pipe';
import { TokenService } from './services/token.service';
import { ControllerService } from './services/controller.service';

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
    TransportOrderDetails,
    HasAnyToErrorPipe,
    ServiceStatusComponent,
    ServiceStatusColorPipe,
    ExternalDialogLink,
    TruncPipe
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
    TransportOrderService,
    LocationService,
    ServicesService,
    LoginService,
    TokenService,
    ControllerService
  ],
  bootstrap: [MainComponent]
})
export class AppModule { }
