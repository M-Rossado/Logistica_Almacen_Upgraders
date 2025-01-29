import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleOperarioComponent } from './detalle-operario.component';

describe('DetalleOperarioComponent', () => {
  let component: DetalleOperarioComponent;
  let fixture: ComponentFixture<DetalleOperarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleOperarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleOperarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
