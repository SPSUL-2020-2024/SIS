import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentRequiredComponent } from './payment-required.component';

describe('PaymentRequiredComponent', () => {
  let component: PaymentRequiredComponent;
  let fixture: ComponentFixture<PaymentRequiredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentRequiredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentRequiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
