import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebCopyCodeComponent } from './web-copy-code.component';

describe('WebCopyCodeComponent', () => {
  let component: WebCopyCodeComponent;
  let fixture: ComponentFixture<WebCopyCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebCopyCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebCopyCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
