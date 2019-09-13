import { pollos } from './pollos.model';
import { combos } from './combos.model';
import { Gaseosas } from './gaseosas.model';
import { refrescos } from './refrescos.model';

export interface carta {
    pollo: pollos;
    combo: combos;
    gaseosa: Gaseosas;
    refresco: refrescos;
    cantidad: number;
}
export interface carta1 {
    pollo: pollos;
    cantidad: number;
}
export interface carta2 {
    combo: combos;
    cantidad: number;
 }
export interface carta3 {
    gaseosa: Gaseosas;
    cantidad: number;
}
export interface carta4 {
    refresco: refrescos;
    cantidad: number;
}