import { IsVisibleDirective } from './is-visible.directive';
import { TestBed } from '@angular/core/testing';
import { ElementRef } from '@angular/core';

export class MockElementRef extends ElementRef {}


describe('IsVisibleDirective', () => {
  it('should create an instance', () => {
    const directive = new IsVisibleDirective();
    expect(directive).toBeTruthy();
  });
});
