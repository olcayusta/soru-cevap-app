import { TestBed } from '@angular/core/testing';

import { TagListResolverService } from './tag-list-resolver.service';

describe('TagListResolverService', () => {
  let service: TagListResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TagListResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
