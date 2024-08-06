import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialTemplateEditPageComponent } from './material-template-edit-page.component';

describe('MaterialTemplateEditPageComponent', () => {
  let component: MaterialTemplateEditPageComponent;
  let fixture: ComponentFixture<MaterialTemplateEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialTemplateEditPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaterialTemplateEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
