import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as HeroActions from './hero.actions';
import { Hero } from '@my-hero-academia/domain/hero';

export const HERO_FEATURE_KEY = 'hero';

export interface State extends EntityState<Hero> {
  selectedId?: string | number; // which Hero record has been selected
  loaded: boolean; // has the Hero list been loaded
  error?: string | null; // last known error (if any)
}

export interface HeroPartialState {
  readonly [HERO_FEATURE_KEY]: State;
}

export const heroAdapter: EntityAdapter<Hero> = createEntityAdapter<Hero>();

export const initialState: State = heroAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const heroReducer = createReducer(
  initialState,
  on(HeroActions.init, (state) => ({ ...state, loaded: false, error: null })),
  on(HeroActions.loadHeroSuccess, (state, { heroes }) =>
    heroAdapter.setAll(heroes, { ...state, loaded: true })
  ),
  on(HeroActions.loadHeroFailure, (state, { error }) => ({ ...state, error }))
);

export function reducer(state: State | undefined, action: Action) {
  return heroReducer(state, action);
}
