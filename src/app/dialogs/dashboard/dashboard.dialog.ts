import { AppTitleService } from 'src/app/services/app-title.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard-dialog',
  templateUrl: './dashboard.dialog.html',
  styleUrls: ['./dashboard.dialog.scss']
})
export class DashboardDialog implements OnInit {

  constructor(
    private _appTitleService: AppTitleService
  ) { }

  ngOnInit() {
    this._appTitleService.setAppTitle('Dashboard');
  }
}
