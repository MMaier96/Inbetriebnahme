import { WamasDynamicLoadable } from './../../../objects/wamas-objects/wamas-dynamic-loadable';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wamas-button',
  templateUrl: './wamas-button.component.html',
  styleUrls: ['./wamas-button.component.scss']
})
export class WamasButtonComponent extends WamasDynamicLoadable implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
