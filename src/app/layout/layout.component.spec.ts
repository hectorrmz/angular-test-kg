import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { spyRouter } from '../mocks/test';

import { LayoutComponent } from './layout.component';

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LayoutComponent],
      imports: [
        MatIconModule,
        MatToolbarModule,
        MatSidenavModule,
        BrowserAnimationsModule,
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
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('logOut', () => {
    beforeEach(() => {
      spyOn(window.sessionStorage, 'clear').and.callFake(() => {});
      component.logOut();
    });
    it('should redirect to login page', () => {
      expect(spyRouter.navigate).toHaveBeenCalledWith(['login']);
    });
    it('should clear session Storage', () => {
      expect(window.sessionStorage.clear).toHaveBeenCalled();
    });
  });
});
