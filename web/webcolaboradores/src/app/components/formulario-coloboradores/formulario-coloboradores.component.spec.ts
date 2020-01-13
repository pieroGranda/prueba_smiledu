import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioColoboradoresComponent } from './formulario-coloboradores.component';

describe('FormularioColoboradoresComponent', () => {
  let component: FormularioColoboradoresComponent;
  let fixture: ComponentFixture<FormularioColoboradoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioColoboradoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioColoboradoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
