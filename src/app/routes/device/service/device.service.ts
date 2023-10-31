import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Device } from '../device/device.component';
import {environment} from '@env/environment';

const urlApi = environment.apiUrl;

@Injectable({
    providedIn: 'root',
})
export class DeviceService {

    constructor(private http: HttpClient) {

    }

    getDevice(page: number, size: number): Observable<any> {
        return this.http.get(`${urlApi}/devices?page=${page}&limit=${size}`, { observe: 'response' });
    }

    getDetailIdDevice(id: number | string): Observable<any> {
        return this.http.get(`${urlApi}/device/${id}`, { observe: 'response' });
    }

    addDevice(body: any): Observable<any> {
        return this.http.post(`${urlApi}/new-device`, body);
    }

    updateDevice(id: string | number, body: any): Observable<any> {
        return this.http.patch(`${urlApi}/update-device/${id}`, body);
    }

    addHandOverStaff(id: string | number, body: any): Observable<any> {
        return this.http.post(`${urlApi}/hand-over/${id}`, body);
    }

    deleteDevice(id: any): Observable<any> {
        return this.http.delete(`${urlApi}/delete/${id}`);
    }

    getUser(): Observable<any> {
        return this.http.get<Device>('user/role-user');
    }
    getUrlImage(url: string): string {
        return environment.imgUrl + url;
    }

}
