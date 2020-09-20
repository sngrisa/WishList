import { Injectable, Inject, forwardRef } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ViajeDestino } from './viaje-destino.model';
import { DestinosApiClient } from './destinos-api-client.model';
import { HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { Store } from '@ngrx/store';

// ESTADO
export interface DestinosViajesState {
    items: ViajeDestino[];
    loading: boolean;
    favorito: ViajeDestino;
}

export function intializeDestinosViajesState() {
  return {
    items: [],
    loading: false,
    favorito: null,
  };
}

// ACCIONES
export enum DestinosViajesActionTypes {
  NUEVO_DESTINO = '[Destinos Viajes] Nuevo',
  ELEGIDO_FAVORITO = '[Destinos Viajes] Favorito',
  VOTE_UP = '[Destinos Viajes] Vote Up',
  VOTE_DOWN = '[Destinos Viajes] Vote Down',
  INIT_MY_DATA = '[Destinos Viajes] Init My Data'
}

export class NuevoDestinoAction implements Action {
  type = DestinosViajesActionTypes.NUEVO_DESTINO;
  constructor(public destino: ViajeDestino) {}
}

export class ElegidoFavoritoAction implements Action {
  type = DestinosViajesActionTypes.ELEGIDO_FAVORITO;
  constructor(public destino: ViajeDestino) {}
}

export class VoteUpAction implements Action {
  type = DestinosViajesActionTypes.VOTE_UP;
  constructor(public destino: ViajeDestino) {}
}

export class VoteDownAction implements Action {
  type = DestinosViajesActionTypes.VOTE_DOWN;
  constructor(public destino: ViajeDestino) {}
}

export class InitMyDataAction implements Action {
  type = DestinosViajesActionTypes.INIT_MY_DATA;
  constructor(public destinos: string[]) {}
}

export type DestinosViajesActions = NuevoDestinoAction | ElegidoFavoritoAction
  | VoteUpAction | VoteDownAction | InitMyDataAction;

// REDUCERS
export function reducerDestinosViajes(
  state: DestinosViajesState,
  action: DestinosViajesActions
): DestinosViajesState {
  switch (action.type) {
    case DestinosViajesActionTypes.INIT_MY_DATA: {
      const destinos: string[] = (action as InitMyDataAction).destinos;
      return {
          ...state,
          items: destinos.map((d) => new ViajeDestino(d, ''))
        };
    }
    case DestinosViajesActionTypes.NUEVO_DESTINO: {
      return {
          ...state,
          items: [...state.items, (action as NuevoDestinoAction).destino ]
        };
    }
    case DestinosViajesActionTypes.ELEGIDO_FAVORITO: {
        state.items.forEach(x => x.setSelected(false));
        const fav: ViajeDestino = (action as ElegidoFavoritoAction).destino;
        fav.setSelected(true);
        return {
          ...state,
          favorito: fav
        };
    }
    case DestinosViajesActionTypes.VOTE_UP: {
        const d: ViajeDestino = (action as VoteUpAction).destino;
        d.voteUp();
        return { ...state };
    }
    case DestinosViajesActionTypes.VOTE_DOWN: {
        const d: ViajeDestino = (action as VoteDownAction).destino;
        d.voteDown();
        return { ...state };
    }
  }
  return state;
}

// EFFECTS
@Injectable()
export class DestinosViajesEffects {
  @Effect()
  nuevoAgregado$: Observable<Action> = this.actions$.pipe(
    ofType(DestinosViajesActionTypes.NUEVO_DESTINO),
    map((action: NuevoDestinoAction) => new ElegidoFavoritoAction(action.destino))
  );

  constructor(private actions$: Actions) {}
}