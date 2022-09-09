import { TestBed } from '@angular/core/testing';

import { MimeService } from './mime.service';

describe('MimeService', () => {
  let service: MimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
