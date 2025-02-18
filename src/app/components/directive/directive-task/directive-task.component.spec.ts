import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveTaskComponent } from './directive-task.component';

describe('DirectiveTaskComponent', () => {
  let component: DirectiveTaskComponent;
  let fixture: ComponentFixture<DirectiveTaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectiveTaskComponent]
    });
    fixture = TestBed.createComponent(DirectiveTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
