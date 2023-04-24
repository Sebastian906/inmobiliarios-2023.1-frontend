import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarFotoInmuebleComponent } from './eliminar-foto-inmueble.component';

describe('EliminarFotoInmuebleComponent', () => {
  let component: EliminarFotoInmuebleComponent;
  let fixture: ComponentFixture<EliminarFotoInmuebleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarFotoInmuebleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarFotoInmuebleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
