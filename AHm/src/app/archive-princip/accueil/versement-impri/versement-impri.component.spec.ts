import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VersementImpriComponent } from './versement-impri.component';

describe('VersementImpriComponent', () => {
  let component: VersementImpriComponent;
  let fixture: ComponentFixture<VersementImpriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VersementImpriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VersementImpriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
