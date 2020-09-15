import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterListIconComponent } from './filter-list-icon.component';

describe('FilterListIconComponent', () => {
  let component: FilterListIconComponent;
  let fixture: ComponentFixture<FilterListIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterListIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterListIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
