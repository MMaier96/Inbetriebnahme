import { TableTemplateService } from './../../services/template-services/table.service';
import { TransportUnit } from './../../objects/TransportUnit';
import { TransportUnitService } from './../../services/transport-unit.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transport-units',
  templateUrl: './transport-units.component.html',
  styleUrls: ['./transport-units.component.scss']
})
export class TransportUnitsComponent implements OnInit {

  displayedColumns: String[] = ['id', 'name'];
  elements: TransportUnit[];

  constructor(
    private _transportUnits: TransportUnitService,
    private _tableTemplateService: TableTemplateService
    ) { }

  ngOnInit() {
    this.loadAllTransportUnits();
    this.setDisplayedColumns();
  }

  loadAllTransportUnits(): void {
    this._transportUnits.getAllTransportUnits()
      .subscribe( data => this._tableTemplateService.setElements(data));
  }

  setDisplayedColumns() {
    this._tableTemplateService.setDisplayedColumns(this.displayedColumns);
  }

}
