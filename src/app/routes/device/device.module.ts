import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DeviceComponent} from './device/device.component';
import {DeviceRoutingModule} from "./device-routing.module";
import {MaterialModule} from "../../material.module";
import {HttpClientModule} from '@angular/common/http';
import {AddDeviceComponent} from './add-device/add-device.component';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {NgxDropzoneModule} from 'ngx-dropzone';
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "@shared";
import {QrCodeComponent} from './qr-code/qr-code.component';
// import { QrCodeModule } from 'ng-qrcode';
// import {NgxPrintModule} from 'ngx-print';
import {PrintQrCodeComponent} from './qr-code/print-qr-code/print-qr-code.component';
import {NgxQRCodeModule} from '@techiediaries/ngx-qrcode';
import {QRCodeModule} from 'angularx-qrcode';

@NgModule({
    declarations: [
        DeviceComponent,
        AddDeviceComponent,
        QrCodeComponent,
        PrintQrCodeComponent
    ],
    imports: [
        CommonModule,
        DeviceRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        MaterialModule,
        NgxDropzoneModule,
        SharedModule,
        QRCodeModule
    ],
    providers: [
        {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}
    ]
})
export class DeviceModule {
}
