import { TestBed } from '@angular/core/testing';

import { ServiciolistaService } from './serviciolista.service';

describe('ServiciolistaService', () => {
  let service: ServiciolistaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciolistaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
