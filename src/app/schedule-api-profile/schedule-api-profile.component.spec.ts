import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleApiProfileComponent } from './schedule-api-profile.component';

describe('ScheduleApiProfileComponent', () => {
  let component: ScheduleApiProfileComponent;
  let fixture: ComponentFixture<ScheduleApiProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleApiProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleApiProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
