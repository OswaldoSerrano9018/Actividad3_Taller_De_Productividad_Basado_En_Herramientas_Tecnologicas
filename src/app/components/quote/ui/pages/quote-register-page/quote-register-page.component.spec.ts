import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteRegisterPageComponent } from './quote-register-page.component';

describe('QuoteRegisterPageComponent', () => {
  let component: QuoteRegisterPageComponent;
  let fixture: ComponentFixture<QuoteRegisterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuoteRegisterPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuoteRegisterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
