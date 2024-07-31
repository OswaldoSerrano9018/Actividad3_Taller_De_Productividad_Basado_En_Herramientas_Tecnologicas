import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BomEditPageComponent } from './bom-edit-page.component';

describe('BomEditPageComponent', () => {
  let component: BomEditPageComponent;
  let fixture: ComponentFixture<BomEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BomEditPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BomEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
