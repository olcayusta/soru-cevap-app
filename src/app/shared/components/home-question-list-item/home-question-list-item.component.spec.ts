import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeQuestionListItemComponent } from './home-question-list-item.component';

describe('HomeQuestionListItemComponent', () => {
  let component: HomeQuestionListItemComponent;
  let fixture: ComponentFixture<HomeQuestionListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeQuestionListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeQuestionListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
