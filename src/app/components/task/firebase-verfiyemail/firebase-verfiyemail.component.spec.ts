import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebaseVerfiyemailComponent } from './firebase-verfiyemail.component';

describe('FirebaseVerfiyemailComponent', () => {
  let component: FirebaseVerfiyemailComponent;
  let fixture: ComponentFixture<FirebaseVerfiyemailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirebaseVerfiyemailComponent]
    });
    fixture = TestBed.createComponent(FirebaseVerfiyemailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
