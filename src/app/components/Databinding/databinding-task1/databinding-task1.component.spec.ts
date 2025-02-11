import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabindingTask1Component } from './databinding-task1.component';

describe('DatabindingTask1Component', () => {
  let component: DatabindingTask1Component;
  let fixture: ComponentFixture<DatabindingTask1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatabindingTask1Component]
    });
    fixture = TestBed.createComponent(DatabindingTask1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
