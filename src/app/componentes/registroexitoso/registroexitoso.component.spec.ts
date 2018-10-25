import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroexitosoComponent } from './registroexitoso.component';

describe('RegistroexitosoComponent', () => {
  let component: RegistroexitosoComponent;
  let fixture: ComponentFixture<RegistroexitosoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroexitosoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroexitosoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
