import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnelImpriComponent } from './personnel-impri.component';

describe('PersonnelImpriComponent', () => {
  let component: PersonnelImpriComponent;
  let fixture: ComponentFixture<PersonnelImpriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonnelImpriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonnelImpriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
