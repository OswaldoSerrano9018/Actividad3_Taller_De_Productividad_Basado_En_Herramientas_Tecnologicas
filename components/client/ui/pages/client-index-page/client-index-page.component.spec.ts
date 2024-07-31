import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientIndexPageComponent } from './client-index-page.component';

describe('ClientIndexPageComponent', () => {
  let component: ClientIndexPageComponent;
  let fixture: ComponentFixture<ClientIndexPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientIndexPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientIndexPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
