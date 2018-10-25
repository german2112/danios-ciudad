import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginExitosoComponent } from './login-exitoso.component';

describe('LoginExitosoComponent', () => {
  let component: LoginExitosoComponent;
  let fixture: ComponentFixture<LoginExitosoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginExitosoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginExitosoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
