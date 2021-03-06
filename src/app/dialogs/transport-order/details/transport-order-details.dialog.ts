import { Observable } from 'rxjs';
import { TransportOrderService } from '../../../services/transport-order.service';
import { AppTitleService } from 'src/app/services/app-title.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, AfterContentInit } from '@angular/core';
import { TransportOrder } from 'src/app/objects/transport-order';

@Component({
  selector: 'transport-order-details',
  templateUrl: './transport-order-details.dialog.html',
  styleUrls: ['./transport-order-details.dialog.scss']
})
export class TransportOrderDetails implements OnInit, AfterContentInit {
  toData: Observable<TransportOrder>;

  constructor(
    private route: ActivatedRoute,
    private _toService: TransportOrderService,
    private _appTitleService: AppTitleService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.toData = this._toService.getObjectByProperty('transportUnit.name', params.get('toName'));
    });
  }

  /**
   * Bugfix: https://stackoverflow.com/questions/43375532/expressionchangedafterithasbeencheckederror-explained
   * setTimeout() ist needed to avoid error on changing parents data over service
   */
  ngAfterContentInit(): void {
    setTimeout(() => {
      this._appTitleService.setDetailsView(true);
    }, 0);
  }

}
