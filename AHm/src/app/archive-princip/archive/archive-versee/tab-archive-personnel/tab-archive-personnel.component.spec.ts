import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabArchivePersonnelComponent } from './tab-archive-personnel.component';

describe('TabArchivePersonnelComponent', () => {
  let component: TabArchivePersonnelComponent;
  let fixture: ComponentFixture<TabArchivePersonnelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabArchivePersonnelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabArchivePersonnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
