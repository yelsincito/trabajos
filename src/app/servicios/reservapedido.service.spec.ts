import { TestBed } from '@angular/core/testing';

import { ReservapedidoService } from './reservapedido.service';

describe('ReservapedidoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReservapedidoService = TestBed.get(ReservapedidoService);
    expect(service).toBeTruthy();
  });
});
