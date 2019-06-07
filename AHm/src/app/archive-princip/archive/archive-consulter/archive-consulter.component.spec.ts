import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveConsulterComponent } from './archive-consulter.component';

describe('ArchiveConsulterComponent', () => {
  let component: ArchiveConsulterComponent;
  let fixture: ComponentFixture<ArchiveConsulterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchiveConsulterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveConsulterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
