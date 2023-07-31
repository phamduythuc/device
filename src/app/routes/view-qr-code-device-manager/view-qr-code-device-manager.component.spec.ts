import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewQrCodeDeviceManagerComponent } from './view-qr-code-device-manager.component';

describe('ViewQrCodeDeviceManagerComponent', () => {
  let component: ViewQrCodeDeviceManagerComponent;
  let fixture: ComponentFixture<ViewQrCodeDeviceManagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewQrCodeDeviceManagerComponent]
    });
    fixture = TestBed.createComponent(ViewQrCodeDeviceManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
