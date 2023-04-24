import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearFotoInmuebleComponent } from './crear-foto-inmueble.component';

describe('CrearFotoInmuebleComponent', () => {
  let component: CrearFotoInmuebleComponent;
  let fixture: ComponentFixture<CrearFotoInmuebleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearFotoInmuebleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearFotoInmuebleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
