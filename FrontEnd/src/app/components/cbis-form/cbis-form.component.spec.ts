import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbisFormComponent } from './cbis-form.component';

describe('CbisFormComponent', () => {
  let component: CbisFormComponent;
  let fixture: ComponentFixture<CbisFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CbisFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CbisFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
