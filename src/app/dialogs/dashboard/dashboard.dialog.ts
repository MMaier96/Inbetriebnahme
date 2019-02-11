import { DashboardGridColsPipe } from 'src/app/pipes/dashboard-grid-cols.pipe';
import { AppTitleService } from 'src/app/services/app-title.service';
import { Component, OnInit, AfterContentInit } from '@angular/core';
import { DashboardGridGutterSizePipe } from 'src/app/pipes/dashboard-grid-gutter-size.pipe';
import { DashboardGridRowHeightPipe } from 'src/app/pipes/dashboard-grid-row-height.pipe';

@Component({
  selector: 'dashboard-dialog',
  templateUrl: './dashboard.dialog.html',
  styleUrls: ['./dashboard.dialog.scss']
})
export class DashboardDialog implements OnInit, AfterContentInit {

  rowHeight: string;
  cols: number;
  gutterSize: string;
  favorites = [{
    name: 'TransportUnitDialog',
    link: './transport-units',
    icon: '../../../assets/icons/white-transparent/transport-unit.svg',
    content: 'Preview goes here ...'
  }, {
    name: 'TransportOrderDialog',
    link: './transport-orders',
    icon: '../../../assets/icons/white-transparent/transport-unit.svg',
    content: 'Preview goes here ...'
  }, {
    name: 'TransportUnitDialog',
    link: './transport-units',
    icon: '../../../assets/icons/white-transparent/transport-unit.svg',
    content: 'Preview goes here ...'
  }, {
    name: 'TransportOrderDialog',
    link: './transport-orders',
    icon: '../../../assets/icons/white-transparent/transport-unit.svg',
    content: 'Preview goes here ...'
  }];

  constructor(
    private _appTitleService: AppTitleService,
    private _dashboardGridColsPipe: DashboardGridColsPipe,
    private _dashboardGridGutterSizePipe: DashboardGridGutterSizePipe,
    private _dashboardGridRowHeightPipe: DashboardGridRowHeightPipe,
  ) { }

  ngOnInit() {
    this.rowHeight = this._dashboardGridRowHeightPipe.transform(window.innerWidth);
    this.cols = this._dashboardGridColsPipe.transform(window.innerWidth);
    this.gutterSize = this._dashboardGridGutterSizePipe.transform(window.innerWidth);
  }

  onResize(event) {
    this.rowHeight = this._dashboardGridRowHeightPipe.transform(event.target.innerWidth);
    this.cols = this._dashboardGridColsPipe.transform(event.target.innerWidth);
    this.gutterSize = this._dashboardGridGutterSizePipe.transform(event.target.innerWidth);
  }

  /**
   * Bugfix: https://stackoverflow.com/questions/43375532/expressionchangedafterithasbeencheckederror-explained
   * setTimeout() ist needed to avoid error on changing parents data over service
   */
  ngAfterContentInit(): void {
    setTimeout(() => {
      this._appTitleService.setAppTitle('Dashboard');
      this._appTitleService.setDetailsView(false);
    }, 0);
  }
}
