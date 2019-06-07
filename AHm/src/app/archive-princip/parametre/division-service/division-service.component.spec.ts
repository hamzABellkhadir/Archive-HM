import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisionServiceComponent } from './division-service.component';

describe('DivisionServiceComponent', () => {
  let component: DivisionServiceComponent;
  let fixture: ComponentFixture<DivisionServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivisionServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivisionServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
