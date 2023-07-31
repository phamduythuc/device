import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {DeviceComponent} from "./device/device.component";
import {PrintQrCodeComponent} from "./qr-code/print-qr-code/print-qr-code.component";

const routes: Routes = [
  {path: '', component: DeviceComponent},
  {path: 'print-qrcode', component: PrintQrCodeComponent},

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: []
})
export class DeviceRoutingModule {
}
