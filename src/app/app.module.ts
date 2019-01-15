/* Basic Configurations */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';


/* Import MaterialModules */
import { MaterialModules } from './material.modules';

/* Import BrowserAnimations */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* Imports for HTTP calls */
import { HttpClientModule } from '@angular/common/http';

/* Components */
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TransportUnitsComponent } from './components/transport-units/transport-units.component';

/* Wamas Template Components */
import { WamasTableComponent } from './components/wamas-components/wamas-table/wamas-table.component';
import { WamasPaginatorComponent } from './components/wamas-components/wamas-paginator/wamas-paginator.component';


/* Services */
import { TransportUnitService } from './services/transport-unit.service';
import { AppTitleService } from './services/app-title.service';

/* Wamas Template Services */
import { WamasTableService } from './services/wamas-services/wamas-table.service';
import { WamasPaginatorService } from './services/wamas-services/wamas-paginator.service';

/* Wamas Pipes */
import { WamasTablePipe } from './pipes/wamas-pipes/wamas-table.pipe';
import { WamasButtonComponent } from './components/wamas-components/wamas-button/wamas-button.component';
import { WamasTableCellComponent } from './components/wamas-components/wamas-table-cell/wamas-table-cell.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TransportUnitsComponent,
    WamasTableComponent,
    WamasPaginatorComponent,
    WamasTablePipe,
    WamasButtonComponent,
    WamasTableCellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModules,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  entryComponents: [
    WamasButtonComponent
  ],
  providers: [
    WamasTableService,
    TransportUnitService,
    WamasPaginatorService,
    AppTitleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
