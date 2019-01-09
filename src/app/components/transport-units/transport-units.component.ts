import { TransportUnit } from './../../objects/TransportUnit';
import { TransportUnitService } from './../../services/transport-unit.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transport-units',
  templateUrl: './transport-units.component.html',
  styleUrls: ['./transport-units.component.scss']
})
export class TransportUnitsComponent implements OnInit {

  transportUnits: TransportUnit[];

  constructor(
    private _tuService: TransportUnitService
    ) { }

  ngOnInit() {
    this.loadTransportUnits();
  }

  loadTransportUnits(): void {
    this._tuService.getTransportUnits().subscribe( data => this.transportUnits = data);
  }

}
