import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAdminUserComponent } from './login-admin-user.component';

describe('LoginAdminUserComponent', () => {
  let component: LoginAdminUserComponent;
  let fixture: ComponentFixture<LoginAdminUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginAdminUserComponent]
    });
    fixture = TestBed.createComponent(LoginAdminUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
