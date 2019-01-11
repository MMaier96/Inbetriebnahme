import { TableTemplateService } from './../../services/template-services/table.service';
import { TransportUnit } from './../../objects/TransportUnit';
import { TransportUnitService } from './../../services/transport-unit.service';
import { Component, OnInit } from '@angular/core';
import { PaginatorTemplateService } from 'src/app/services/template-services/paginator.service';

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
  displayedColumns: String[] = ['id', 'name'];
  elements: TransportUnit[];

  constructor(
    private _transportUnits: TransportUnitService,
    private _tableTemplateService: TableTemplateService,
    private _paginatorTemplateService: PaginatorTemplateService
    ) { }

  ngOnInit() {
    this.loadAllTransportUnits();
    this.setDisplayedColumns();
  }

  loadAllTransportUnits(): void {
    this._transportUnits.getAllTransportUnits()
      .subscribe( data => {
        this._tableTemplateService.setElements(data);
        this._tableTemplateService.setPaginatorService(this._paginatorTemplateService);
        this._paginatorTemplateService.setPageSizes(this.possibleSizes);
        this._paginatorTemplateService.setPageSize(this.initialSize);
        this._paginatorTemplateService.setLength(data.length);
      });
  }

  setDisplayedColumns() {
    this._tableTemplateService.setDisplayedColumns(this.displayedColumns);
  }

}
