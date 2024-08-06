import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteEditPageComponent } from './quote-edit-page.component';

describe('QuoteEditPageComponent', () => {
  let component: QuoteEditPageComponent;
  let fixture: ComponentFixture<QuoteEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuoteEditPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuoteEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
