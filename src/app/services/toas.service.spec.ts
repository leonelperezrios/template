import { TestBed } from '@angular/core/testing';

import { ToasService } from './toast.service';

describe('ToasService', () => {
  let service: ToasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
