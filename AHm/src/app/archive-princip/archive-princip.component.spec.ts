import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivePrincipComponent } from './archive-princip.component';

describe('ArchivePrincipComponent', () => {
  let component: ArchivePrincipComponent;
  let fixture: ComponentFixture<ArchivePrincipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchivePrincipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivePrincipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
