import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DialogRef} from "@angular/cdk/dialog";

@Component({
  selector: 'app-comfirm-dialog',
  templateUrl: './comfirm-dialog.component.html',
  styleUrls: ['./comfirm-dialog.component.scss']
})
export class ComfirmDialogComponent {
    constructor( @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<ComfirmDialogComponent>) {
    }
    ngOnInit() {
        console.log(this.data)
    }
    onConfirm () {
        this.dialogRef.close('confirm')
    }
    onCancel(){
        this.dialogRef.close()
    }

}
