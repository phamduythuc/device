import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../service/device.service';
import { LoginService } from '@core';
import { MatDialog } from '@angular/material/dialog';
import { AddDeviceComponent } from '../add-device/add-device.component';
import { ComfirmDialogComponent } from '@shared/components/comfirm-dialog/comfirm-dialog.component';
import { QrCodeComponent } from '../qr-code/qr-code.component';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

export interface Device {
    id?: number | string | null;
    name?: string;
    seri?: string;
    date?: string;
    type?: string;
    handover_person?: any[];
};

@Component({
    selector: 'app-device',
    templateUrl: './device.component.html',
    styleUrls: ['./device.component.scss'],
})
export class DeviceComponent implements OnInit {
    pageIndex = 0;
    sizeIndex = 10;
    devices: Device[] = [];
    displayColumns = ['STT', 'name', 'seri', 'type', 'status', 'action'];
    total: number = 0;


    constructor(private deviceService: DeviceService, private loginService: LoginService, public diaLog: MatDialog, public router: Router, private toastrService: ToastrService) {
    }
    ngOnInit() {
        this.getDevices(this.pageIndex, this.sizeIndex);
        this.loginService.me().subscribe(res => {
        });
    }

    getDevices(pageIndex: number, sizIndex: number): void {
        this.deviceService.getDevice(pageIndex, sizIndex).subscribe(res => {
                this.devices = res.body.response;
                this.total = res.body.total;
            },
        );
    }

    getCurrentPage(event: any): void {
        console.log(event);
        this.sizeIndex = event.pageSize;
        this.pageIndex = event.pageIndex;
        this.getDevices(this.pageIndex, this.sizeIndex);
    }

    addDevice(): void {
        const diaLogRef = this.diaLog.open(AddDeviceComponent, {
            data: {
                title: 'new',
                action: 'new',
            },
            panelClass: ['w-[80%]'],
        });
        diaLogRef.afterClosed().subscribe(res => {
            if (res === 'reload') {
                this.getDevices(this.pageIndex, this.sizeIndex);
            }
        });
    }

    deviceAllocation(device: Device): void {

        const diaLogRef = this.diaLog.open(AddDeviceComponent, {
            data: {
                title: 'Device allocation',
                action: 'allocate',
                data: device,
            },
            panelClass: ['w-[80%]', 'h-[75%]'],
        });
        diaLogRef.afterClosed().subscribe(res => {
            if (res === 'reload') {
                this.getDevices(this.pageIndex, this.sizeIndex);
            }
        });
    }

    editDevice(device: Device): void {
        const diaLogRef = this.diaLog.open(AddDeviceComponent, {
            data: {
                title: 'Edit infor device',
                action: 'edit',
                data: device,
            },
            panelClass: ['w-[80%]', 'h-[75%]'],
        });
        diaLogRef.afterClosed().subscribe(res => {
            if (res === 'reload') {
                this.getDevices(this.pageIndex, this.sizeIndex);
            }
        });
    }

    actionsDevice(device: Device, action: string): void {
        if (action !== 'qr-code') {
            this.diaLog.open(AddDeviceComponent, {
                data: {
                    title: action === 'view' ? 'View infor device' : '',
                    action: action,
                    data: device,
                },
                panelClass: ['w-[80%]', 'h-[75%]'],
            });
        } else {
            this.diaLog.open(QrCodeComponent, {
                data: {
                    title: 'View QR code',
                    action: action,
                    data: device,
                },
                panelClass: ['w-[40%]', 'h-[50%]'],
            });
        }
    }

    deleteDevice(element: Device): void {
        const dialogRef = this.diaLog.open(ComfirmDialogComponent, {
            data: {
                title: 'Xác nhận xóa',
                action: 'delete',
            },
            panelClass: ['w-[35%]'],
        });
        dialogRef.afterClosed().subscribe(res => {
            if (res === 'delete') {
                this.deviceService.deleteDevice(element.id).subscribe(res => {
                    this.toastrService.success('Delete success');
                    this.getDevices(this.pageIndex, this.sizeIndex);
                });
            }
        });
    }


}
