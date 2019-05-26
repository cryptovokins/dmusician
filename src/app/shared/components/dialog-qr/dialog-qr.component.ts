import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-dialog-qr',
  templateUrl: './dialog-qr.component.html',
  styleUrls: ['./dialog-qr.component.css']
})
export class DialogQrComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  public dialogRef: MatDialogRef<DialogQrComponent>) { }
  elementType : 'url' | 'canvas' | 'img' = 'url';
  copied:Boolean;
  ngOnInit() {
    this.copied = false;
  }

  closeDialog() {
    this.dialogRef.close();
  }
  public notify(payload: string) {
    // Might want to notify the user that something has been pushed to the clipboard
    this.copied = true;
    console.info(`'${payload}' has been copied to clipboard`);
 }
}
