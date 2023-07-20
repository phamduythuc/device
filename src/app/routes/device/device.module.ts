import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceComponent } from './device/device.component';
import {DeviceRoutingModule} from "./device-routing.module";
import {MaterialModule} from "../../material.module";
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    DeviceComponent
  ],
  imports: [
    CommonModule,
    DeviceRoutingModule,
      HttpClientModule,
    MaterialModule,
  ]
})
export class DeviceModule { }
