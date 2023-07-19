import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceComponent } from './device/device.component';
import {DeviceRoutingModule} from "./device-routing.module";
import {MaterialModule} from "../../material.module";



@NgModule({
  declarations: [
    DeviceComponent
  ],
  imports: [
    CommonModule,
    DeviceRoutingModule,
    MaterialModule,
  ]
})
export class DeviceModule { }
