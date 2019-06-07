import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterpersonnelComponent } from './ajouterpersonnel.component';

describe('AjouterpersonnelComponent', () => {
  let component: AjouterpersonnelComponent;
  let fixture: ComponentFixture<AjouterpersonnelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterpersonnelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterpersonnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
