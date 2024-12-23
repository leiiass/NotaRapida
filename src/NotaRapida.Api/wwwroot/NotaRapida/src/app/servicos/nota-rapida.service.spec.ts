import { TestBed } from '@angular/core/testing';

import { NotaRapidaService } from './nota-rapida.service';

describe('NotaRapidaService', () => {
  let service: NotaRapidaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotaRapidaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
