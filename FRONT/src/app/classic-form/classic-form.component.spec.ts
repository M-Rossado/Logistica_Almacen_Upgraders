import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassicFormComponent } from './classic-form.component';

describe('ClassicFormComponent', () => {
  let component: ClassicFormComponent;
  let fixture: ComponentFixture<ClassicFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassicFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
