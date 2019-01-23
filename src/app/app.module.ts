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


@NgModule({
  declarations: [
    MainComponent,
    DashboardDialog,
    TransportUnitDialog,
    TransportOrderDialog,
    CheckboxComponent
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
    AppTitleService,
    TransportUnitService,
    TransportOrderService
  ],
  bootstrap: [MainComponent]
})
export class AppModule { }
