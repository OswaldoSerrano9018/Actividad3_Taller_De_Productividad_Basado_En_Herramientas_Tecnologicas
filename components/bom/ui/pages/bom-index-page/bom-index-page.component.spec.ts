import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BomIndexPageComponent } from './bom-index-page.component';

describe('BomIndexPageComponent', () => {
  let component: BomIndexPageComponent;
  let fixture: ComponentFixture<BomIndexPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BomIndexPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BomIndexPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
