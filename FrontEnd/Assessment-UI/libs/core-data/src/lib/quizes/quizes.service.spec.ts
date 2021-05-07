import { TestBed } from '@angular/core/testing';

import { QuizesService } from './quizes.service';

describe('QuizesService', () => {
  let service: QuizesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
