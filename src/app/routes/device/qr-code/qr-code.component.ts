import { Component, ElementRef, Inject, TemplateRef, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-qr-code',
    templateUrl: './qr-code.component.html',
    styleUrls: ['./qr-code.component.scss'],
})
export class QrCodeComponent {

    elementType = 'canvas';
    value = 'Techiediaries';
    id: number | string = 0;
    constructor(public diaLogRef: MatDialogRef<QrCodeComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    }

    ngOnInit() {
        console.log(this.data);
        this.id = this.data.data?.id;
    }

    dowloadQrcode(parent: any): void {
        let parentElement = null;
        console.log(parent);
        if (this.elementType === 'canvas') {
            // fetches base 64 data from canvas
            parentElement = parent.qrcElement.nativeElement
                .querySelector('canvas')
                .toDataURL('image/png');
        } else if (this.elementType === 'img' || this.elementType === 'url') {
            parentElement = parent.qrcElement.nativeElement.querySelector('img').src;
        } else {
            alert('Set elementType to \'canvas\', \'img\' or \'url\'.');
        }

        if (parentElement) {
            let blobData = this.convertBase64ToBlob(parentElement);
            const blob = new Blob([blobData], { type: 'image/png' });
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'qr-code';
            link.click();
        }
    }

    printQrcode() {
        window.print();
    }

    private convertBase64ToBlob(Base64Image: string) {
        const parts = Base64Image.split(';base64,');
        const imageType = parts[0].split(':')[1];
        const decodedData = window.atob(parts[1]);
        const uInt8Array = new Uint8Array(decodedData.length);
        for (let i = 0; i < decodedData.length; ++i) {
            uInt8Array[i] = decodedData.charCodeAt(i);
        }
        return new Blob([uInt8Array], { type: imageType });
    }
}
