import { TestBed } from '@angular/core/testing';

import { MetodosformularioService } from './metodosformulario.service';

describe('MetodosformularioService', () => {
  let service: MetodosformularioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MetodosformularioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
