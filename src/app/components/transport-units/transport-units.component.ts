import { AppTitleService } from '../../services/app-title.service';
import { WamasTableService } from '../../services/wamas-services/wamas-table.service';
import { TransportUnit } from './../../objects/TransportUnit';
import { TransportUnitService } from './../../services/transport-unit.service';
import { Component, OnInit } from '@angular/core';
import { WamasPaginatorService } from 'src/app/services/wamas-services/wamas-paginator.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { DrawableTransportUnit } from 'src/app/objects/drawable/DrawableTransportUnit';

@Component({
  selector: 'app-transport-units',
  templateUrl: './transport-units.component.html',
  styleUrls: ['./transport-units.component.scss']
})
export class TransportUnitsComponent implements OnInit {

  constructor(
    private _transportUnits: TransportUnitService,
    private _wamasTableTemplateService: WamasTableService,
    private _wamasPaginatorTemplateService: WamasPaginatorService,
    private _appTitleService: AppTitleService,
    private _sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    /* call the api to receive data */
    this._transportUnits.getAllTransportUnits().subscribe( data => this.createPage(data) );
  }

  createPage(data) {
    /* set the app title */
    this._appTitleService.setAppTitle('TransportUnit');

    /* convert data to a drawable */
    const drawables: DrawableTransportUnit[] = data.map( tu => new DrawableTransportUnit(tu, this._sanitizer));

    /* provide data to table service */
    this._wamasTableTemplateService.setElements(drawables);
    this._wamasTableTemplateService.setPaginatorService(this._wamasPaginatorTemplateService);
    this._wamasTableTemplateService.setDisplayedColumns(['name', 'location', 'activeTo']);

    /* provide data to paginator service */
    this._wamasPaginatorTemplateService.setPageSizes([10, 25, 50, 100]);
    this._wamasPaginatorTemplateService.setPageSize(15);
    this._wamasPaginatorTemplateService.setLength(data.length);
  }
}
