import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMenuPopupComponent } from './user-menu-popup.component';

describe('UserMenuPopupComponent', () => {
  let component: UserMenuPopupComponent;
  let fixture: ComponentFixture<UserMenuPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMenuPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMenuPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
