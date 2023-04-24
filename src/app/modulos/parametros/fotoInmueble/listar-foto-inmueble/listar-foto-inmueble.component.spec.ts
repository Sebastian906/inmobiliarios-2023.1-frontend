import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarFotoInmuebleComponent } from './listar-foto-inmueble.component';

describe('ListarFotoInmuebleComponent', () => {
  let component: ListarFotoInmuebleComponent;
  let fixture: ComponentFixture<ListarFotoInmuebleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarFotoInmuebleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarFotoInmuebleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
