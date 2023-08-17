import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { RoutesRoutingModule } from './routes-routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './sessions/login/login.component';
import { RegisterComponent } from './sessions/register/register.component';
import { Error403Component } from './sessions/403.component';
import { Error404Component } from './sessions/404.component';
import { Error500Component } from './sessions/500.component';
import { ViewQrCodeDeviceManagerComponent } from './view-qr-code-device-manager/view-qr-code-device-manager.component';
import { LightboxModule } from 'ng-gallery/lightbox';
const COMPONENTS: any[] = [
  DashboardComponent,
  LoginComponent,
  RegisterComponent,
  Error403Component,
  Error404Component,
  Error500Component,
];
const COMPONENTS_DYNAMIC: any[] = [];

@NgModule({
  imports: [SharedModule, RoutesRoutingModule, LightboxModule],
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC, ViewQrCodeDeviceManagerComponent],
})
export class RoutesModule {}
