import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialUnitEditPageComponent } from './material-unit-edit-page.component';

describe('MaterialUnitEditPageComponent', () => {
  let component: MaterialUnitEditPageComponent;
  let fixture: ComponentFixture<MaterialUnitEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialUnitEditPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaterialUnitEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
