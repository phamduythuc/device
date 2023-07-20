import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Device } from '../device/device.component';
const urlApi = 'http://localhost:3000';
@Injectable({
  providedIn: 'root'
})
export class DeviceService {

    constructor(private http: HttpClient) {

    }
     getDevice(page:number, size: number):Observable<any> {
        return this.http.get(`${urlApi}/device?_page=${page}&_limit=${size}`);
     }
     getUser(): Observable<any> {
        return this.http.get<Device>('user/role-user');
     }

}
