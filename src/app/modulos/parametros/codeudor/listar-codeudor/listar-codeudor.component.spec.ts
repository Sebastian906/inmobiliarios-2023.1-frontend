import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCodeudorComponent } from './listar-codeudor.component';

describe('ListarCodeudorComponent', () => {
  let component: ListarCodeudorComponent;
  let fixture: ComponentFixture<ListarCodeudorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarCodeudorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarCodeudorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
