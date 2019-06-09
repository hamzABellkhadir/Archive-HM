import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterAchivecComponent } from './ajouter-achivec.component';

describe('AjouterAchivecComponent', () => {
  let component: AjouterAchivecComponent;
  let fixture: ComponentFixture<AjouterAchivecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterAchivecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterAchivecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
