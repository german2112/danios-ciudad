import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteExitosoComponent } from './reporte-exitoso.component';

describe('ReporteExitosoComponent', () => {
  let component: ReporteExitosoComponent;
  let fixture: ComponentFixture<ReporteExitosoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteExitosoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteExitosoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
