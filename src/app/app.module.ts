/* Basic Configurations */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


/* Import MaterialModules */
import { MaterialModules } from './material.modules';

/* Import BrowserAnimations */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TransportUnitsComponent } from './components/transport-units/transport-units.component';

/* Imports for HTTP calls */
import { HttpClientModule } from '@angular/common/http';

/* Services */
import { TransportUnitService } from './services/transport-unit.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TransportUnitsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModules,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    TransportUnitService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
