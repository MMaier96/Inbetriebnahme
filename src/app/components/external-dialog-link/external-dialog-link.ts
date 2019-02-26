import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'external-dialog-link',
  templateUrl: './external-dialog-link.html',
  styleUrls: ['./external-dialog-link.scss']
})
export class ExternalDialogLink implements OnInit {

  @Input() icon: String;
  @Input() name: String;
  @Input() disabled: boolean;

  constructor() { }

  ngOnInit() {
  }

}
