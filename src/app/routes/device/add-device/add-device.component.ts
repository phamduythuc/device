import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DeviceService } from '../service/device.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastrService } from 'ngx-toastr';
import { checkValidTime, DateValidator } from './dateValidator';
import { MyImage } from '@core/image';

@Component({
    selector: 'app-add-device',
    templateUrl: './add-device.component.html',
    styleUrls: ['./add-device.component.scss'],
})
export class AddDeviceComponent implements OnInit {
    files: any = [];
    devices: string[] = ['PC', 'Laptop', 'Phone'];
    handover_person: string[] = ['HR', 'IT Hepdedk', 'Manage'];
    onsite = [{ id: 1, label: 'Yes' }, { id: 0, label: 'No' }];
    allocate: boolean = false;
    formGroup!: FormGroup;
    formHandOver!: FormGroup;

    constructor(public diaLogRef: MatDialogRef<AddDeviceComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private formBuilder: FormBuilder, private deviceService: DeviceService, private toastrService: ToastrService) {
        this.formGroup = this.formBuilder.group({
            name: ['', Validators.required],
            type: ['', Validators.required],
            serial: ['', Validators.required],
            deviceAddDate: ['', [Validators.required, DateValidator()]],
        });
    }

    ngOnInit() {

        if (this.data) {
            this.interactiveAction();
        }
    }

    interactiveAction(): void {
        switch (this.data.action) {
            case 'allocate': {
                this.getDataAddDevice();
                this.getImageDropzone();
                this.formGroup.disable();
                this.addControl();
                if (this.data.data.allotment) {
                    this.getDataReceiveDevice();
                }
                this.allocate = true;
                break;
            }
            case 'edit': {
                this.getDataAddDevice();
                this.getImageDropzone();
                break;
            }
            case 'view': {
                this.formGroup.disable();
                this.addControl();
                this.formHandOver.disable();
                this.allocate = true;
                this.getDataAddDevice();
                this.getImageDropzone()
                this.getDataReceiveDevice();
            }

        }
    }

    addControl(): void {

        this.formHandOver = this.formBuilder.group({
            receiver: ['', Validators.required],
            status: ['', [Validators.required]],
            handover_person: ['', [Validators.required]],
            position: ['', [Validators.required]],
            dateOfDelivery: [null, [Validators.required, checkValidTime(this.formGroup.get('deviceAddDate'))]],
            email: ['', [Validators.required, Validators.email]],
            onsite: ['', [Validators.required]],
            note: [''],
            hotline: ['', [Validators.required, Validators.pattern('(84|0[3|5|7|8|9])+([0-9]{8})\\b')]],
        });
    }

    getDataForm(): void {
        const data = {
            name: this.data.data?.name,
            type: this.data.data?.type,
            serial: this.data.data?.serial,
            deviceAddDate: this.data.data?.allotment?.date,
        };
        this.formGroup.patchValue(data);
    }

    getDataAddDevice(): void {
        const data = {
            name: this.data.data?.name,
            type: this.data.data?.type,
            serial: this.data.data?.serial,
            deviceAddDate: this.data.data?.deviceAddDate,
        };
        this.formGroup.patchValue(data);
    }

    getDataReceiveDevice(): void {
        const data = {
            receiver: this.data.data?.allotment?.receiver,
            status: this.data.data?.allotment?.status,
            handover_person: this.data?.data.allotment?.handover_person,
            position: this.data.data?.allotment?.position,
            dateOfDelivery: this.data.data?.allotment?.dateOfDelivery,
            email: this.data.data?.allotment?.email,
            onsite: this.data.data?.allotment?.onsite,
            note: this.data.data?.allotment?.note,
            hotline: this.data.data?.allotment?.hotline,
        };
        this.formHandOver.patchValue(data);
    }

    checkInvalid(): boolean {
        if (this.data.action === 'new' || this.data.action === 'edit') {
            return this.formGroup.invalid;
        } else {
            return this.formGroup.invalid || this.formHandOver.invalid;
        }
    }

    getImageDropzone(): void {
        console.log(this.data.data);
        this.data.data?.photo.forEach((imageUrl: any) => {
            const url = this.deviceService.getUrlImage(imageUrl)
            fetch(url).then(response => response.blob()).then(blob => {
                const file = new File([blob], imageUrl, {type: 'image/jpg'})
                this.files.push(file)
            })
        })
    }

    addNewDevice() {
        const device = this.formGroup.value;
        const formData = new FormData();
        formData.append('data', JSON.stringify(device));
        for (const file of this.files) {
            formData.append('photo', file);
        }

        this.deviceService.addDevice(formData).subscribe(res => {
            this.diaLogRef.close();
            this.toastrService.success('Add success');
        });
    }

    editDevice() {
        const device = this.formGroup.value;
        const id = this.data.data.id;
        const formData = new FormData();
        formData.append('data', JSON.stringify(device));
        for (const file of this.files) {
            formData.append('photo', file);
        }
        this.deviceService.updateDevice(id, formData).subscribe(res => {
            this.diaLogRef.close();
            this.toastrService.success('Add success');
        });
    }

    addAllocateDevice(): void {
        const allocate = this.formHandOver.value;
        const id = this.data.data.id;
        this.deviceService.addHandOverStaff(id, allocate).subscribe(res => {
            this.diaLogRef.close();
            this.toastrService.success('Update success');
        });
    }

    saveDevice(): void {
        switch (this.data.action) {
            case 'allocate':
                this.addAllocateDevice();
                break;
            case 'new':
                this.addNewDevice();
                break;
            case 'edit':
                this.editDevice();
                break;
        }
    }

    viewInformation(): void {

    }


    onSelect(event: any) {
        this.files.push(...event.addedFiles);
    }

    onRemove(event: any) {
        this.files.splice(this.files.indexOf(event), 1);
    }
}
