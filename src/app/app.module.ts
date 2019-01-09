/* Basic Configurations */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


/* Import MaterialModules */
import { MaterialModules } from './material.modules';

/* Import BrowserAnimations */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TransportUnitsComponent } from './components/transport-units/transport-units.component';

/* Services */
import { TransportUnitService } from './services/transport-unit.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TransportUnitsComponent,
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
