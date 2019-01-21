import { WamasTableService } from 'src/app/services/wamas-services/wamas-table-service/wamas-table.service';
import { WamasPaginatorService } from 'src/app/services/wamas-services/wamas-paginator-service/wamas-paginator.service';

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'wamas-table',
  templateUrl: './wamas-table.component.html',
  styleUrls: ['./wamas-table.component.scss']
})
export class WamasTableComponent implements OnInit {
  change = this._wamasPaginatorService.getIndex();

  constructor(
    public _wamasTableService: WamasTableService,
    public _wamasPaginatorService: WamasPaginatorService
  ) {
  }

  ngOnInit() {
  }
}
