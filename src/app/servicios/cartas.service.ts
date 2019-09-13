import { Injectable } from '@angular/core';
import { carta, carta1, carta2, carta3, carta4 } from '../ModelosPedido/carta.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { pollos } from '../ModelosPedido/pollos.model';
import { combos } from '../ModelosPedido/combos.model';
import { Gaseosas } from '../ModelosPedido/gaseosas.model';
import { refrescos } from '../ModelosPedido/refrescos.model';

@Injectable({
  providedIn: 'root'
})
export class CartasService {
  private _pedido: carta[];
  pedido: BehaviorSubject<carta[]>;

  private _pedido1: carta1[];
  pedido1: BehaviorSubject<carta1[]>;

  private _pedido2: carta2[];
  pedido2: BehaviorSubject<carta2[]>;

  private _pedido3: carta3[];
  pedido3: BehaviorSubject<carta3[]>;

  private _pedido4: carta4[];
  pedido4: BehaviorSubject<carta4[]>;



  constructor() {
    this._pedido = [];
    this.pedido =  new BehaviorSubject<carta[]>(this._pedido);

    this._pedido1 = [];
    this.pedido1 =  new BehaviorSubject<carta1[]>(this._pedido1);

    this._pedido2 = [];
    this.pedido2 =  new BehaviorSubject<carta2[]>(this._pedido2);

    this._pedido3 = [];
    this.pedido3 =  new BehaviorSubject<carta3[]>(this._pedido3);

    // const pedido4JSON = localStorage.getItem('pedido4')
   // this._pedido4 = pedido4JSON ? JSON.parse(pedido4JSON) : [];
    this._pedido4 = [];
    this.pedido4 =  new BehaviorSubject<carta4[]>(this._pedido4);
  }
  listarPedido(): Observable<carta[]> {
     return this.pedido.asObservable();
  }

  listarPedido1(): Observable<carta1[]> {
    return this.pedido1.asObservable();
  }

  listarPedido2(): Observable<carta2[]> {
  return this.pedido2.asObservable();
  }

  listarPedido3(): Observable<carta3[]> {
  return this.pedido3.asObservable();
  }

  listarPedido4(): Observable<carta4[]> {
  return this.pedido4.asObservable();
  }

  AgregarCarta(pollo: pollos, combo: combos, gaseosa: Gaseosas, refresco: refrescos, cantidad: number) {
    const item: carta = {pollo,combo,gaseosa, refresco, cantidad};
    this._pedido.push(item);
    this.pedido.next(this._pedido);

  }

  AgregarPollo(pollo: pollos, cantidad: number) {
    let flag = false;
    for (const item of this._pedido1) {
      if (item.pollo.id === pollo.id) {
        item.cantidad += cantidad;
      }
    }
    if (!flag) {
      const item: carta1 = {pollo, cantidad};
      this._pedido1.push(item);
    }
    this.pedido1.next(this._pedido1);

  }

  Agregarcombo(combo: combos, cantidad: number) {
    let flag = false;
    for (const item of this._pedido2) {
      if (item.combo.id === combo.id) {
        item.cantidad += cantidad;
      }
    }
    if (!flag) {
      const item: carta2 = {combo, cantidad};
      this._pedido2.push(item);
    }
    this.pedido2.next(this._pedido2);
  }

  Agregargaseosa(gaseosa: Gaseosas, cantidad: number) {
    let flag  = false;
    // tslint:disable-next-line: no-shadowed-variable
    for (const item of this._pedido3) {
      if (item.gaseosa.id === gaseosa.id) {
        item.cantidad += cantidad;
        flag = true;
      }
    }
    if (!flag) {
      const item: carta3 = {gaseosa, cantidad};
      this._pedido3.push(item);
    }
    this.pedido3.next(this._pedido3);
  }

  Agregarrefresco(refresco: refrescos, cantidad: number) {
    let flag = false;
    for (const item of this._pedido4) {
      if (item.refresco.id === refresco.id) {
        // item.catidad += cantidad;
        item.cantidad = item.cantidad + cantidad;
        flag = true;
      }
    }
    if (!flag) {
       const item: carta4 = {refresco,cantidad};
       this._pedido4.push(item);
    }
    // localStorage.setItem('pedido4', JSON.stringify(this._pedido4));
    this.pedido4.next(this._pedido4);

  }
  // eliminar pedido
}
