import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintQrCodeComponent } from './print-qr-code.component';

describe('PrintQrCodeComponent', () => {
  let component: PrintQrCodeComponent;
  let fixture: ComponentFixture<PrintQrCodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrintQrCodeComponent]
    });
    fixture = TestBed.createComponent(PrintQrCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
