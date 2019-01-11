import { AppTitleService } from '../../services/app-title.service';
import { ACXTableService } from '../../services/acx-services/acx-table.service';
import { TransportUnit } from './../../objects/TransportUnit';
import { TransportUnitService } from './../../services/transport-unit.service';
import { Component, OnInit } from '@angular/core';
import { ACXPaginatorService } from 'src/app/services/acx-services/acx-paginator.service';

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

  constructor(
    private _transportUnits: TransportUnitService,
    private _acxTableTemplateService: ACXTableService,
    private _acxPaginatorTemplateService: ACXPaginatorService,
    private _acxAppTitleService: AppTitleService
    ) { }

  ngOnInit() {
    this._acxAppTitleService.setAppTitle('TransportUnit');
    this.loadAllTransportUnits();
    this.setDisplayedColumns();
  }

  loadAllTransportUnits(): void {
    this._transportUnits.getAllTransportUnits()
      .subscribe( data => {
        this._acxTableTemplateService.setElements(data);
        this._acxTableTemplateService.setPaginatorService(this._acxPaginatorTemplateService);
        this._acxPaginatorTemplateService.setPageSizes(this.possibleSizes);
        this._acxPaginatorTemplateService.setPageSize(this.initialSize);
        this._acxPaginatorTemplateService.setLength(data.length);
      });
  }

  setDisplayedColumns() {
    this._acxTableTemplateService.setDisplayedColumns(this.displayedColumns);
  }

}
