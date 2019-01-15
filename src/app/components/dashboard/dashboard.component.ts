import { AppTitleService } from './../../services/app-title.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private _appTitleService: AppTitleService
  ) { }

  ngOnInit() {
    this._appTitleService.setAppTitle('Dashboard');
  }

}
