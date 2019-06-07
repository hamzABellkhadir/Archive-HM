import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TousPersonnelTabComponent } from './tous-personnel-tab.component';

describe('TousPersonnelTabComponent', () => {
  let component: TousPersonnelTabComponent;
  let fixture: ComponentFixture<TousPersonnelTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TousPersonnelTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TousPersonnelTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
