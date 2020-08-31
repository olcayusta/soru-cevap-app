import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatBoldIconComponent } from './format-bold-icon.component';

describe('FormatBoldIconComponent', () => {
  let component: FormatBoldIconComponent;
  let fixture: ComponentFixture<FormatBoldIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormatBoldIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormatBoldIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
