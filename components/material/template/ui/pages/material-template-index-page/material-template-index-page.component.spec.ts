import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialTemplateIndexPageComponent } from './material-template-index-page.component';

describe('MaterialTemplateIndexPageComponent', () => {
  let component: MaterialTemplateIndexPageComponent;
  let fixture: ComponentFixture<MaterialTemplateIndexPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialTemplateIndexPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaterialTemplateIndexPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
