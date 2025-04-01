import { TestBed } from '@angular/core/testing';

import { ApiMinimo1ConfianzaService } from './api-minimo1-confianza.service';

describe('ApiMinimo1ConfianzaService', () => {
  let service: ApiMinimo1ConfianzaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiMinimo1ConfianzaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
