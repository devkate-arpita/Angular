import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebaseSignupComponent } from './firebase-signup.component';

describe('FirebaseSignupComponent', () => {
  let component: FirebaseSignupComponent;
  let fixture: ComponentFixture<FirebaseSignupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirebaseSignupComponent]
    });
    fixture = TestBed.createComponent(FirebaseSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
