import { TestBed } from '@angular/core/testing';

import { ScreeningMoviesService } from './screening-movies.service';

describe('ScreeningMoviesService', () => {
  let service: ScreeningMoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScreeningMoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
