import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleConductorComponent } from './detalle-conductor.component';

describe('DetalleConductorComponent', () => {
  let component: DetalleConductorComponent;
  let fixture: ComponentFixture<DetalleConductorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleConductorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleConductorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
