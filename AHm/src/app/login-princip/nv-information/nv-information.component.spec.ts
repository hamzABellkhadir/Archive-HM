import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NvInformationComponent } from './nv-information.component';

describe('NvInformationComponent', () => {
  let component: NvInformationComponent;
  let fixture: ComponentFixture<NvInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NvInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NvInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
