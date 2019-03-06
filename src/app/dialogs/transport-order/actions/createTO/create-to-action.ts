import {Component, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface CreateTOData {
  reason: string;
  tuName: string;
  transportOrderType: string;
  target: string;
}

@Component({
  selector: 'create-to-action',
  styleUrls: ['create-to-action.scss'],
  templateUrl: 'create-to-action.html',
})
export class CreateToActionDialog {

  constructor(
    public dialogRef: MatDialogRef<CreateToActionDialog>,
    @Inject(MAT_DIALOG_DATA) public data: CreateTOData) {}

  cancel(): void {
    this.dialogRef.close();
  }

}
