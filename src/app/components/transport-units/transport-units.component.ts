import { AppTitleService } from '../../services/app-title.service';
import { WamasTableService } from '../../services/wamas-services/wamas-table.service';
import { TransportUnit } from './../../objects/TransportUnit';
import { TransportUnitService } from './../../services/transport-unit.service';
import { Component, OnInit } from '@angular/core';
import { WamasPaginatorService } from 'src/app/services/wamas-services/wamas-paginator.service';

@Component({
  selector: 'app-transport-units',
  templateUrl: './transport-units.component.html',
  styleUrls: ['./transport-units.component.scss']
})
export class TransportUnitsComponent implements OnInit {
  /* settings for paginator template */
  possibleSizes: number[] = [10, 25, 50, 100];
  initialSize: number = this.possibleSizes[0];

  /* settings for table template */
  displayedColumns: String[] = ['id', 'name', 'location'];
  elements: TransportUnit[];
  tableData;

  constructor(
    private _transportUnits: TransportUnitService,
    private _wamasTableTemplateService: WamasTableService,
    private _wamasPaginatorTemplateService: WamasPaginatorService,
    private _appTitleService: AppTitleService
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
