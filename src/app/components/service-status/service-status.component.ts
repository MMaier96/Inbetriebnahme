import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'service-status',
  templateUrl: './service-status.component.html',
  styleUrls: ['./service-status.component.scss']
})
export class ServiceStatusComponent implements OnInit {

  @Input() status: string;

  constructor() { }

  ngOnInit() {
  }

}
