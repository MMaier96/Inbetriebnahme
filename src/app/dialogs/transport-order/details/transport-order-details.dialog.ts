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
  tuData: Observable<TransportOrder>;

  constructor(
    private route: ActivatedRoute,
    private _tuService: TransportOrderService,
    private _appTitleService: AppTitleService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.tuData = this._tuService.getTransportOrderByName(params.get('tuName'));
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
