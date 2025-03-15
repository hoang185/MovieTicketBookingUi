import { HighLightDirective } from './high-light.directive';
import { ElementRef } from '@angular/core';

describe('HighLightDirective', () => {
  it('should create an instance', () => {
    const directive = new HighLightDirective(new ElementRef(''));
    expect(directive).toBeTruthy();
  });
});
