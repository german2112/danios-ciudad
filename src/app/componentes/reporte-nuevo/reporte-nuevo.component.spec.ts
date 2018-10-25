import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteNuevoComponent } from './reporte-nuevo.component';

describe('ReporteNuevoComponent', () => {
  let component: ReporteNuevoComponent;
  let fixture: ComponentFixture<ReporteNuevoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteNuevoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
