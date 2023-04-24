import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificacionDosfaComponent } from './verificacion-dosfa.component';

describe('VerificacionDosfaComponent', () => {
  let component: VerificacionDosfaComponent;
  let fixture: ComponentFixture<VerificacionDosfaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificacionDosfaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerificacionDosfaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
