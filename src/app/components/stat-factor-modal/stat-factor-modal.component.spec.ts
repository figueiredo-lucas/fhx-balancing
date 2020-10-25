import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatFactorModalComponent } from './stat-factor-modal.component';

describe('StatFactorModalComponent', () => {
  let component: StatFactorModalComponent;
  let fixture: ComponentFixture<StatFactorModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatFactorModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatFactorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
