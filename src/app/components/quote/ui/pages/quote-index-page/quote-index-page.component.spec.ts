import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteIndexPageComponent } from './quote-index-page.component';

describe('QuoteIndexPageComponent', () => {
  let component: QuoteIndexPageComponent;
  let fixture: ComponentFixture<QuoteIndexPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuoteIndexPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuoteIndexPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
