import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebaseRegisterComponent } from './firebase-register.component';

describe('FirebaseRegisterComponent', () => {
  let component: FirebaseRegisterComponent;
  let fixture: ComponentFixture<FirebaseRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirebaseRegisterComponent]
    });
    fixture = TestBed.createComponent(FirebaseRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
