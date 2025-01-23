import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarcamionComponent } from './agregarcamion.component';

describe('AgregarcamionComponent', () => {
  let component: AgregarcamionComponent;
  let fixture: ComponentFixture<AgregarcamionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarcamionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarcamionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
