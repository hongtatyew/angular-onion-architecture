import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HERO_FEATURE_KEY, State, heroAdapter } from './hero.reducer';

// Lookup the 'Hero' feature state managed by NgRx
export const getHeroState = createFeatureSelector<State>(HERO_FEATURE_KEY);

const { selectAll, selectEntities } = heroAdapter.getSelectors();

export const getHeroLoaded = createSelector(
  getHeroState,
  (state: State) => state.loaded
);

export const getHeroError = createSelector(
  getHeroState,
  (state: State) => state.error
);

export const getAllHero = createSelector(getHeroState, (state: State) =>
  selectAll(state)
);

export const getHeroEntities = createSelector(getHeroState, (state: State) =>
  selectEntities(state)
);

export const getSelectedId = createSelector(
  getHeroState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getHeroEntities,
  getSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
