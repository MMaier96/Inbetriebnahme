import { WamasAppTitleService } from 'src/app/services/wamas-services/wamas-app-title-service/wamas-app-title.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wamas-dashboard-dialog',
  templateUrl: './wamas-dashboard.dialog.html',
  styleUrls: ['./wamas-dashboard.dialog.scss']
})
export class WamasDashboardDialog implements OnInit {

  constructor(
    private _appTitleService: WamasAppTitleService
  ) { }

  ngOnInit() {
    this._appTitleService.setAppTitle('Dashboard');
  }
}
