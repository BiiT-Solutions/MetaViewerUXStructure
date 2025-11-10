import { TestBed } from '@angular/core/testing';

import { MetaViewerStructureRootService } from './meta-viewer-structure-root.service';

describe('MetaViewerStructureRootService', () => {
  let service: MetaViewerStructureRootService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MetaViewerStructureRootService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
