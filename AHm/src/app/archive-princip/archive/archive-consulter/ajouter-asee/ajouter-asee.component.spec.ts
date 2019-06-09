import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterASEEComponent } from './ajouter-asee.component';

describe('AjouterASEEComponent', () => {
  let component: AjouterASEEComponent;
  let fixture: ComponentFixture<AjouterASEEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterASEEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterASEEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
