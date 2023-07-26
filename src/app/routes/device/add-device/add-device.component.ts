import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-add-device',
    templateUrl: './add-device.component.html',
    styleUrls: ['./add-device.component.scss']
})
export class AddDeviceComponent implements OnInit {
    files: any = [];
    devices: string[] = ['PC', 'Laptop', 'Phone'];
    handover_person: string[] = ['HR', 'IT Hepdedk','Manage'];
    onsite: string[] = ['Yes', 'No'];
    allocate: boolean = false;
    formGroup!: FormGroup;
    formHandOver!: FormGroup;

    constructor(public diaLogRef: MatDialogRef<AddDeviceComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private formBuilder: FormBuilder) {
        this.formGroup = this.formBuilder.group({
            name: ['', Validators.required],
            type: ['' ,Validators.required],
            serial: ['', Validators.required],
            deviceAddDate: ['', [Validators.required]]
        });
    }

    ngOnInit() {
        if (this.data) {
            this.interactiveAction();
        }
    }

    interactiveAction(): void {
        switch (this.data.action) {
            case "allocate": {
                this.getDataAddDevice();
                this.formGroup.disable();
                this.addControl();
                this.allocate = true;
                break;
            }
            case 'edit': {
                this.getDataAddDevice();
                break;
            }
            case 'view': {
                this.formGroup.disable();
                this.addControl();
                this.formHandOver.disable();
                this.allocate = true;
                this.getDataAddDevice();
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
            dateOfDelivery: ['', [Validators.required]],
            email: ['', [Validators.required]],
            onsite: ['', [Validators.required]],
            note: [''],
            hotline: ['', [Validators.required]],
        });
    }

    getDataForm(): void {
        const data = {
            name: this.data.data?.name,
            type: this.data.data?.type,
            serial: this.data.data?.serial,
            deviceAddDate:  this.data.data?.allotment?.date
        };
        this.formGroup.patchValue(data);
    }
    getDataAddDevice(): void {
        const data = {
            name: this.data.data?.name,
            type: this.data.data?.type,
            serial: this.data.data?.serial,
            deviceAddDate:  this.data.data?.allotment?.date
        };
        this.formGroup.patchValue(data);
    }
    getDataReceiveDevice(): void {
        console.log(this.data);
        const data = {
            receiver: this.data.data?.allotment?.receiver,
            status: this.data.data?.allotment?.receiver,
            handover_person: this.data.data?.allotment?.receiver,
            position: this.data.data?.allotment?.receiver,
            dateOfDelivery: this.data.data?.allotment?.receiver,
            email: this.data.data?.allotment?.receiver,
            onsite: this.data.data?.allotment?.receiver,
            note: this.data.data?.allotment?.receiver,
            hotline: this.data.data?.allotment?.receiver,
        };
        console.log(this.formHandOver.value);
        this.formHandOver.patchValue(data);
    }
    viewInformation ():void {

    }


    onSelect(event: any) {
        console.log(event);
        this.files = [...event.addedFiles];
        console.log(this.files);
    }

    onRemove(event: any) {
        this.files.splice(this.files.indexOf(event), 1);
    }
}
