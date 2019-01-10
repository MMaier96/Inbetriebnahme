/* Basic Configurations */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';


/* Import MaterialModules */
import { MaterialModules } from './material.modules';

/* Import BrowserAnimations */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* Components */
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TransportUnitsComponent } from './components/transport-units/transport-units.component';

/* Template Components */
import { TableComponent } from './components/templates/table/table.component';

/* Imports for HTTP calls */
import { HttpClientModule } from '@angular/common/http';

/* Services */
import { TransportUnitService } from './services/transport-unit.service';

/* Template Services */
import { TableTemplateService } from './services/template-services/table.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TransportUnitsComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModules,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    TableTemplateService,
    TransportUnitService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
