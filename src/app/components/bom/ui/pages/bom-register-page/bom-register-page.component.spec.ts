import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BomRegisterPageComponent } from './bom-register-page.component';

describe('BomRegisterPageComponent', () => {
  let component: BomRegisterPageComponent;
  let fixture: ComponentFixture<BomRegisterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BomRegisterPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BomRegisterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
