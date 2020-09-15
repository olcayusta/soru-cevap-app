import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentCopyIconComponent } from './content-copy-icon.component';

describe('ContentCopyIconComponent', () => {
  let component: ContentCopyIconComponent;
  let fixture: ComponentFixture<ContentCopyIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentCopyIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentCopyIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
