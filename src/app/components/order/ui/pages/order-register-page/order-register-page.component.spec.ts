import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderRegisterPageComponent } from './order-register-page.component';

describe('OrderRegisterPageComponent', () => {
  let component: OrderRegisterPageComponent;
  let fixture: ComponentFixture<OrderRegisterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderRegisterPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrderRegisterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
