import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveVerseeComponent } from './archive-versee.component';

describe('ArchiveVerseeComponent', () => {
  let component: ArchiveVerseeComponent;
  let fixture: ComponentFixture<ArchiveVerseeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchiveVerseeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveVerseeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
