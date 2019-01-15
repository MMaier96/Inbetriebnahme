import { WamasPaginatorService } from '../../../services/wamas-services/wamas-paginator.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-wamas-paginator',
  templateUrl: './wamas-paginator.component.html',
  styleUrls: ['./wamas-paginator.component.scss']
})
export class WamasPaginatorComponent {

  constructor(public _wamasPaginatorService: WamasPaginatorService) { }

  onPaginateChange(event) {
    this._wamasPaginatorService.setIndex(event.pageIndex);
    this._wamasPaginatorService.setPageSize(event.pageSize);
  }

}
