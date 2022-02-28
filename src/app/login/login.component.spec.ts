import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { spyRouter, spySessionStorage } from '../mocks/test';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
        MatCardModule,
        ReactiveFormsModule,
      ],
      providers: [
        {
          provide: Router,
          useValue: spyRouter,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('loginUser()', () => {
    beforeEach(() => {
      component.loginUser();
    });

    it('should redirect to root app', () => {
      expect(spyRouter.navigate).toHaveBeenCalledWith(['/']);
    });
  });
});
