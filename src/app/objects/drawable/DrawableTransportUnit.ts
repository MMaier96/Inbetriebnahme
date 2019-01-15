import { Drawable } from './Drawable';
import { TransportUnit } from './../TransportUnit';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';

export class DrawableTransportUnit extends Drawable {

  /* describe what html will be drawed for each value */
  name: SafeHtml;
  location: SafeHtml;
  activeTo: SafeHtml;

  constructor(tu: TransportUnit, sanitizer: DomSanitizer) {
    super();
    this.name = sanitizer.bypassSecurityTrustHtml(tu.name);
    this.location = sanitizer.bypassSecurityTrustHtml(tu.location);
    this.activeTo = sanitizer.bypassSecurityTrustHtml(`<p>
    <mat-form-field appearance="legacy">
      <mat-label>Legacy form field</mat-label>
      <input matInput placeholder="Placeholder">
      <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>
      <mat-hint>Hint</mat-hint>
    </mat-form-field>
  </p>`);
  }
}
