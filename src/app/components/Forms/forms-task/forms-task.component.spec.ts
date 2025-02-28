import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsTaskComponent } from './forms-task.component';

describe('FormsTaskComponent', () => {
  let component: FormsTaskComponent;
  let fixture: ComponentFixture<FormsTaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormsTaskComponent]
    });
    fixture = TestBed.createComponent(FormsTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
