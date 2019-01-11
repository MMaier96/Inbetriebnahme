import { ACXPaginatorService } from '../../../services/acx-services/acx-paginator.service';
import { ACXTableService } from '../../../services/acx-services/acx-table.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-acx-table',
  templateUrl: './acx-table.component.html',
  styleUrls: ['./acx-table.component.scss']
})
export class ACXTableComponent {
  change = this._acxPaginatorService.getIndex();

  constructor(
    public _acxTableService: ACXTableService,
    public _acxPaginatorService: ACXPaginatorService) { }



}
