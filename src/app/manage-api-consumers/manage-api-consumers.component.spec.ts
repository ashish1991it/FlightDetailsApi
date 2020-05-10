import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageApiConsumersComponent } from './manage-api-consumers.component';

describe('ManageApiConsumersComponent', () => {
  let component: ManageApiConsumersComponent;
  let fixture: ComponentFixture<ManageApiConsumersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageApiConsumersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageApiConsumersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
