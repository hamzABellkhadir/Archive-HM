import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersoInformaComponent } from './perso-informa.component';

describe('PersoInformaComponent', () => {
  let component: PersoInformaComponent;
  let fixture: ComponentFixture<PersoInformaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersoInformaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersoInformaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
