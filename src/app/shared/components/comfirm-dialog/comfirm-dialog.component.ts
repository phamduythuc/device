import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
    selector: 'app-comfirm-dialog',
    templateUrl: './comfirm-dialog.component.html',
    styleUrls: ['./comfirm-dialog.component.scss'],
})
export class ComfirmDialogComponent implements OnInit {
    constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<ComfirmDialogComponent>) {
    }

    ngOnInit() {
        console.log(this.data);
    }

    onConfirm() {
        if (this.data.action === 'delete') {
            this.dialogRef.close('delete');
        }
    }

    onCancel() {
        this.dialogRef.close();
    }

}
