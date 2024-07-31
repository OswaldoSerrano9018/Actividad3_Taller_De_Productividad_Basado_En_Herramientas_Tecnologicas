import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialTemplateRegisterPageComponent } from './material-template-register-page.component';

describe('MaterialTemplateRegisterPageComponent', () => {
  let component: MaterialTemplateRegisterPageComponent;
  let fixture: ComponentFixture<MaterialTemplateRegisterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialTemplateRegisterPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaterialTemplateRegisterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
