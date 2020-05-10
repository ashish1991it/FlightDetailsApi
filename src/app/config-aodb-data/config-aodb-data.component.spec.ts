import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigAodbDataComponent } from './config-aodb-data.component';

describe('ConfigAodbDataComponent', () => {
  let component: ConfigAodbDataComponent;
  let fixture: ComponentFixture<ConfigAodbDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigAodbDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigAodbDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
