import { TestBed } from '@angular/core/testing';

import { QuestionsResolverService } from './questions-resolver.service';

describe('QuestionsResolverService', () => {
  let service: QuestionsResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionsResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
