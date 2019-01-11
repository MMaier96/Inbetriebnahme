import { ACXPaginatorService } from '../../../services/acx-services/acx-paginator.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-acx-paginator',
  templateUrl: './acx-paginator.component.html',
  styleUrls: ['./acx-paginator.component.scss']
})
export class ACXPaginatorComponent {

  constructor(public _paginatorService: ACXPaginatorService) { }

  onPaginateChange(event) {
    this._paginatorService.setIndex(event.pageIndex);
    this._paginatorService.setPageSize(event.pageSize);
  }

}
