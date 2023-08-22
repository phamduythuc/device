import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';
import * as moment from 'moment';
import { of, take } from 'rxjs';
import { skip } from 'rxjs/operators';

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
        const value = control.value;
        if (value === null) {
            return value;
        }
        const dateBuy = moment(valueDateBuy.value);
        const curentDate = moment(new Date());
        if (moment(value) < dateBuy || moment(value) > curentDate) {
            return {failTime: true };
        }
        return null;
    };
}
