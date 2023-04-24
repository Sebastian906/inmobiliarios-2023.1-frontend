import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarFotoInmuebleComponent } from './editar-foto-inmueble.component';

describe('EditarFotoInmuebleComponent', () => {
  let component: EditarFotoInmuebleComponent;
  let fixture: ComponentFixture<EditarFotoInmuebleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarFotoInmuebleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarFotoInmuebleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
