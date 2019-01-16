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


/*
* #######################################################
* # PLEASE USE TABLE FORMAT IMPORT (correct tabulators) #
* #######################################################
*/

/* Entry Component */
import { MainComponent }                  from './main.component';

/* Wamas Dialogs from './dialogs/wamas-dialogs/' */
import { WamasDashboardDialog }           from './dialogs/wamas-dialogs/wamas-dashboard-dialog/wamas-dashboard.dialog';
import { WamasTransportUnitsDialog }      from './dialogs/wamas-dialogs/wamas-transport-units-dialog/wamas-transport-units.dialog';

/* Custom Dialogs from './dialogs/custom-components/' */

/* Wamas Components from './components/wamas-components/' */
import { WamasButtonComponent }           from './components/wamas-components/wamas-button-component/wamas-button.component';
import { WamasTableCellComponent }        from './components/wamas-components/wamas-table-cell-component/wamas-table-cell.component';
import { WamasTableComponent }            from './components/wamas-components/wamas-table-component/wamas-table.component';
import { WamasPaginatorComponent }        from './components/wamas-components/wamas-paginator-component/wamas-paginator.component';

/* Custom Components from './components/custom-components/' */

/* Wamas Services from './services/wamas-services/' */
import { WamasAppTitleService }           from './services/wamas-services/wamas-app-title-service/wamas-app-title.service';
import { WamasPaginatorService }          from './services/wamas-services/wamas-paginator-service/wamas-paginator.service';
import { WamasTableService }              from './services/wamas-services/wamas-table-service/wamas-table.service';

/* Graphql Services from './services/graphql-services/' */
import { GraphQLTransportUnitService }    from './services/graphql-services/graphql-transport-unit-service/graphql-transport-unit.service';

/* Custom Services from './services/custom-services/' */

/* Wamas Pipes from './pipes/wamas-pipes/'*/
import { WamasTablePipe }                 from './pipes/wamas-pipes/wamas-table-pipe/wamas-table.pipe';

/* Custom Pipes */

@NgModule({
  declarations: [
    /* Entry Component */
    MainComponent,

    /* Wamas Dialogs */
    WamasDashboardDialog,
    WamasTransportUnitsDialog,

    /* Custom Dialogs */

    /* Wamas Components */
    WamasButtonComponent,
    WamasTableCellComponent,
    WamasTableComponent,
    WamasPaginatorComponent,

    /* Custom Components */

    /* Wamas Pipes */
    WamasTablePipe

    /* Custom Pipes */
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
    /* Wamas Services */
    WamasTableService,
    WamasPaginatorService,
    WamasAppTitleService,

    /* GraphQL Services */
    GraphQLTransportUnitService,

    /* Custom Services */
  ],
  bootstrap: [MainComponent]
})
export class AppModule { }
