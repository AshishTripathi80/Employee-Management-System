import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpadateEmployeeComponent } from './upadate-employee.component';

describe('UpadateEmployeeComponent', () => {
  let component: UpadateEmployeeComponent;
  let fixture: ComponentFixture<UpadateEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpadateEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpadateEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
