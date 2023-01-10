import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicalGiftCardComponent } from './physical-gift-card.component';

describe('PhysicalGiftCardComponent', () => {
  let component: PhysicalGiftCardComponent;
  let fixture: ComponentFixture<PhysicalGiftCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhysicalGiftCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicalGiftCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
