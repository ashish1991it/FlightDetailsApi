import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterApiConsumerComponent } from './register-api-consumer.component';

describe('RegisterApiConsumerComponent', () => {
  let component: RegisterApiConsumerComponent;
  let fixture: ComponentFixture<RegisterApiConsumerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterApiConsumerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterApiConsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
