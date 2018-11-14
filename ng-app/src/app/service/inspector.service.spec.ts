import { TestBed, inject } from '@angular/core/testing';

import { InspectorService } from './inspector.service';

describe('InspectorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InspectorService]
    });
  });

  it('should be created', inject([InspectorService], (service: InspectorService) => {
    expect(service).toBeTruthy();
  }));
});
