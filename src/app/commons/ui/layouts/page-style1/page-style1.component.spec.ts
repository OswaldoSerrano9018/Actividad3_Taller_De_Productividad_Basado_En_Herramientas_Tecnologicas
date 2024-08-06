import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageStyle1Component } from './page-style1.component';

describe('PageStyle1Component', () => {
  let component: PageStyle1Component;
  let fixture: ComponentFixture<PageStyle1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageStyle1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageStyle1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
