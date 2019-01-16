import { Component } from '@angular/core';
import { WamasPaginatorService } from 'src/app/services/wamas-services/wamas-paginator-service/wamas-paginator.service';

@Component({
  selector: 'wamas-paginator',
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
