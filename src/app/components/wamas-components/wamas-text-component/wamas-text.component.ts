import { WamasDynamicLoadable } from './../../../objects/wamas-objects/wamas-dynamic-loadable';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wamas-text',
  templateUrl: './wamas-text.component.html',
  styleUrls: ['./wamas-text.component.scss']
})
export class WamasTextComponent extends WamasDynamicLoadable implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
