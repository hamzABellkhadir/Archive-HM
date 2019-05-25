import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPrincipComponent } from './login-princip.component';

describe('LoginPrincipComponent', () => {
  let component: LoginPrincipComponent;
  let fixture: ComponentFixture<LoginPrincipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPrincipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPrincipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
