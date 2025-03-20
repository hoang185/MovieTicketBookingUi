import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatSelectComponent } from './seat-select.component';

describe('SeatSelectComponent', () => {
  let component: SeatSelectComponent;
  let fixture: ComponentFixture<SeatSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeatSelectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeatSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
