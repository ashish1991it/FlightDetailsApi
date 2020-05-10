import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageFtpServerComponent } from './manage-ftp-server.component';

describe('ManageFtpServerComponent', () => {
  let component: ManageFtpServerComponent;
  let fixture: ComponentFixture<ManageFtpServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageFtpServerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageFtpServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
