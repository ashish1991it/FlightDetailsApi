import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigApiDataComponent } from './config-api-data.component';

describe('ConfigApiDataComponent', () => {
  let component: ConfigApiDataComponent;
  let fixture: ComponentFixture<ConfigApiDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigApiDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigApiDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
