import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebaseForgotpasswordComponent } from './firebase-forgotpassword.component';

describe('FirebaseForgotpasswordComponent', () => {
  let component: FirebaseForgotpasswordComponent;
  let fixture: ComponentFixture<FirebaseForgotpasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirebaseForgotpasswordComponent]
    });
    fixture = TestBed.createComponent(FirebaseForgotpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
