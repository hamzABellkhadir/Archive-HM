import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationImpriComponent } from './consultation-impri.component';

describe('ConsultationImpriComponent', () => {
  let component: ConsultationImpriComponent;
  let fixture: ComponentFixture<ConsultationImpriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultationImpriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationImpriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
