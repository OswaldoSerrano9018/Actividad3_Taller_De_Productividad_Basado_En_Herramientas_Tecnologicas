import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialUnitRegisterPageComponent } from './material-unit-register-page.component';

describe('MaterialUnitRegisterPageComponent', () => {
  let component: MaterialUnitRegisterPageComponent;
  let fixture: ComponentFixture<MaterialUnitRegisterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialUnitRegisterPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaterialUnitRegisterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
