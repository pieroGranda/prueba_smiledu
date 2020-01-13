import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaColoboradoresComponent } from './lista-coloboradores.component';

describe('ListaColoboradoresComponent', () => {
  let component: ListaColoboradoresComponent;
  let fixture: ComponentFixture<ListaColoboradoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaColoboradoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaColoboradoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
