import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalesTrackingComponent } from './bales-tracking.component';

describe('BalesTrackingComponent', () => {
  let component: BalesTrackingComponent;
  let fixture: ComponentFixture<BalesTrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalesTrackingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BalesTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
