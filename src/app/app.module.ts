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

/* ACX Template Components */
import { ACXTableComponent } from './components/acx-components/acx-table/acx-table.component';
import { ACXPaginatorComponent } from './components/acx-components/acx-paginator/acx-paginator.component';


/* Services */
import { TransportUnitService } from './services/transport-unit.service';
import { AppTitleService } from './services/app-title.service';

/* ACX Template Services */
import { ACXTableService } from './services/acx-services/acx-table.service';
import { ACXPaginatorService } from './services/acx-services/acx-paginator.service';

/* ACX Pipes */
import { ACXTablePipe } from './pipes/acx-pipes/acx-table.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TransportUnitsComponent,
    ACXTableComponent,
    ACXPaginatorComponent,
    ACXTablePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModules,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    ACXTableService,
    TransportUnitService,
    ACXPaginatorService,
    AppTitleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
