import { Observable } from 'rxjs';
import { TransportUnitService } from './../../../services/transport-unit.service';
import { AppTitleService } from 'src/app/services/app-title.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, AfterContentInit } from '@angular/core';
import { TransportUnit } from 'src/app/objects/transport-unit';

@Component({
  selector: 'transport-unit-details',
  templateUrl: './transport-unit-details.dialog.html',
  styleUrls: ['./transport-unit-details.dialog.scss']
})
export class TransportUnitDetails implements OnInit, AfterContentInit {
  tuData: Observable<TransportUnit>;

  constructor(
    private route: ActivatedRoute,
    private _tuService: TransportUnitService,
    private _appTitleService: AppTitleService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.tuData = this._tuService.getTransportUnitByName(params.get('tuName'));
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
