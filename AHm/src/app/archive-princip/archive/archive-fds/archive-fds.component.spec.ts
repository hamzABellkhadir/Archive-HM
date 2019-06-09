import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveFDSComponent } from './archive-fds.component';

describe('ArchiveFDSComponent', () => {
  let component: ArchiveFDSComponent;
  let fixture: ComponentFixture<ArchiveFDSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchiveFDSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveFDSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
