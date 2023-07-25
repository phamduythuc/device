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
    devices: string[] = ['PC', 'Laptop', 'Phone']
    allocate: boolean = false
    formGroup!: FormGroup
    formHandOver!: FormGroup

    constructor(public diaLogRef: MatDialogRef<AddDeviceComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private formBuilder: FormBuilder) {
        this.formGroup = this.formBuilder.group({
            name: ['', Validators.required],
            type: ['' ,Validators.required],
            serial: ['', Validators.required],
            deviceAddDate: ['', [Validators.required]]
        })
    }

    ngOnInit() {
        if (this.data) {
            this.interactiveAction()
        }
    }

    interactiveAction(): void {
        switch (this.data.action) {
            case "allocate": {
                this.getDataForm();
                this.addControl();
                this.allocate = true
            }
        }
    }

    addControl(): void {
        this.formHandOver = this.formBuilder.group({
            receiver: ['', Validators.required],
            status: [''],
            handover_person: [''],
            position: [''],
            dateOfDelivery: [''],
            email: [''],
            onsite: [''],
            note: [''],
            hotline: [''],
        })
    }

    getDataForm(): void {
        const data = {
            name: this.data.data?.name,
            type: this.data.data?.type,
            serial: this.data.data?.serial,
            deviceAddDate:  this.data.data?.allotment?.date
        }
        this.formGroup.patchValue(data)
    }

    onSelect(event: any) {
        console.log(event);
        this.files = [...event.addedFiles]
        console.log(this.files)
    }

    onRemove(event: any) {
        this.files.splice(this.files.indexOf(event), 1);
    }
}
