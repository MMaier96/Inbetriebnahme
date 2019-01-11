import { AppTitleService } from './../../services/app-title.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private _acxAppTitleService: AppTitleService
  ) { }

  ngOnInit() {
    this._acxAppTitleService.setAppTitle('Dashboard');
  }

}
