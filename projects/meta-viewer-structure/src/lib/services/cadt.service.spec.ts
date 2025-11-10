import { TestBed } from '@angular/core/testing';

import { CadtService } from './cadt.service';

describe('CadtService', () => {
  let service: CadtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
