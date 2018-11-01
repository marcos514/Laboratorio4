import { TestBed, inject } from '@angular/core/testing';

import { MilibService } from './milib.service';

describe('MilibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MilibService]
    });
  });

  it('should be created', inject([MilibService], (service: MilibService) => {
    expect(service).toBeTruthy();
  }));
});
