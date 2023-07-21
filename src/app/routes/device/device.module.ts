import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceComponent } from './device/device.component';
import {DeviceRoutingModule} from "./device-routing.module";
import {MaterialModule} from "../../material.module";
import { HttpClientModule } from '@angular/common/http';
import { AddDeviceComponent } from './add-device/add-device.component';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';



@NgModule({
  declarations: [
    DeviceComponent,
    AddDeviceComponent
  ],
  imports: [
    CommonModule,
    DeviceRoutingModule,
      HttpClientModule,
    MaterialModule,
  ],
    providers: [
        {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {  appearance: 'outline'}}
    ]
})
export class DeviceModule { }
