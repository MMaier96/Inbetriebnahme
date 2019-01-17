import { WamasTableService } from 'src/app/services/wamas-services/wamas-table-service/wamas-table.service';
import { GraphQLTransportUnitService } from 'src/app/services/graphql-services/graphql-transport-unit-service/graphql-transport-unit.service';
import { GraphQLTransportUnit } from 'src/app/objects/graphql-objects/graphql-transport-unit';
import { WamasAppTitleService } from 'src/app/services/wamas-services/wamas-app-title-service/wamas-app-title.service';
import { WamasPaginatorService } from 'src/app/services/wamas-services/wamas-paginator-service/wamas-paginator.service';

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'wamas-transport-units-dialog',
  templateUrl: './wamas-transport-units.dialog.html',
  styleUrls: ['./wamas-transport-units.dialog.scss']
})
export class WamasTransportUnitsDialog implements OnInit {
  /* settings for paginator template */
  possibleSizes: number[] = [10, 25, 50, 100];
  initialSize: number = this.possibleSizes[0];

  /* settings for table template */
  displayedColumns: String[] = ['id', 'name', 'location'];
  elements: GraphQLTransportUnit[];
  tableData;

  constructor(
    private _transportUnits: GraphQLTransportUnitService,
    private _wamasTableTemplateService: WamasTableService,
    private _wamasPaginatorTemplateService: WamasPaginatorService,
    private _appTitleService: WamasAppTitleService
    ) { }

  ngOnInit() {
    this._appTitleService.setAppTitle('TransportUnit');
    this.loadAllTransportUnits();
    this.setDisplayedColumns();
  }

  loadAllTransportUnits(): void {
    this._transportUnits.getAllTransportUnits()
      .subscribe( data => {
        this.tableData = data;
        this._wamasTableTemplateService.setElements(data);
        this._wamasTableTemplateService.setPaginatorService(this._wamasPaginatorTemplateService);
        this._wamasPaginatorTemplateService.setPageSizes(this.possibleSizes);
        this._wamasPaginatorTemplateService.setPageSize(this.initialSize);
        this._wamasPaginatorTemplateService.setLength(data.length);
      });
  }

  setDisplayedColumns() {
    this._wamasTableTemplateService.setDisplayedColumns(this.displayedColumns);
  }
}
