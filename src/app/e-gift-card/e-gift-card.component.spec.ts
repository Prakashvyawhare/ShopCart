import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EGiftCardComponent } from './e-gift-card.component';

describe('EGiftCardComponent', () => {
  let component: EGiftCardComponent;
  let fixture: ComponentFixture<EGiftCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EGiftCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EGiftCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
