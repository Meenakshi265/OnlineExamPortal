import { TestBed } from '@angular/core/testing';

import { TokeInterceptorInterceptor } from './toke-interceptor.interceptor';

describe('TokeInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TokeInterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: TokeInterceptorInterceptor = TestBed.inject(TokeInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
