import { WamasPaginatorService } from '../../../services/wamas-services/wamas-paginator.service';
import { WamasTableService } from '../../../services/wamas-services/wamas-table.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-wamas-table',
  templateUrl: './wamas-table.component.html',
  styleUrls: ['./wamas-table.component.scss']
})
export class WamasTableComponent {
  change = this._wamasPaginatorService.getIndex();

  constructor(
    public _wamasTableService: WamasTableService,
    public _wamasPaginatorService: WamasPaginatorService) { }



}
