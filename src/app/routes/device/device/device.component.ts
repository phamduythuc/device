import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../service/device.service';
import { LoginService } from '@core';
import {MatDialog} from "@angular/material/dialog";
import {AddDeviceComponent} from "../add-device/add-device.component";
export interface Device {
    id?: number | string | null;
    name?: string;
    seri?: string;
    date?: string;
    type?: string;
    handover_person?: any[];
}
@Component({
    selector: 'app-device',
    templateUrl: './device.component.html',
    styleUrls: ['./device.component.scss'],
})
export class DeviceComponent implements OnInit {
    pageIndex = 0;
    sizeIndex = 5;
    device: Device[] = [];
    displayColumns = ['STT', 'name', 'seri', 'type', 'action'];
    constructor(private deviceService: DeviceService, private loginService: LoginService, public diaLog: MatDialog) {
    }



    ngOnInit() {
        this.getDevices();
        this.loginService.me().subscribe(res => {
            console.log(res);
        });
    }
    getDevices():void {
        this.deviceService.getDevice(this.pageIndex, this.sizeIndex).subscribe(res => {
               this.device = res;
            console.log(this.device);
            },
        );
    }
    addDevice(): void {
       const diaLogRef =  this.diaLog.open(AddDeviceComponent, {
           data: {title: 'new'},
           panelClass: ['w-[80%]']
       });
        diaLogRef.afterClosed().subscribe(result => {

        });
    }
}
