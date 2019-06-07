import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterAchivevComponent } from './ajouter-achivev.component';

describe('AjouterAchivevComponent', () => {
  let component: AjouterAchivevComponent;
  let fixture: ComponentFixture<AjouterAchivevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterAchivevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterAchivevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
