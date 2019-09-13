import { TestBed } from '@angular/core/testing';

import { CartasService } from './cartas.service';

describe('CartasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CartasService = TestBed.get(CartasService);
    expect(service).toBeTruthy();
  });
});
