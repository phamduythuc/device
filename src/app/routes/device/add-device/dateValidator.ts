import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

export function DateValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const value = control.value;
        const curentDate = new Date();
        if (value > curentDate) {
            return { errDate: true };
        }
        return null;
    };
}

export function checkValidTime(valueDateBuy: any): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const dateBuy = valueDateBuy.value as Date;
        console.log(dateBuy);
        console.log(control.value);
        const value = control.value;
        const curentDate = new Date();
        if (value < dateBuy || value > curentDate) {
            return {failTime: true };
        }
        return null;


    };
}
