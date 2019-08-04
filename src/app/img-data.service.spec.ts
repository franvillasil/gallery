import { TestBed } from '@angular/core/testing';

import { ImgDataService } from './img-data.service';

describe('ImgDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImgDataService = TestBed.get(ImgDataService);
    expect(service).toBeTruthy();
  });
});
