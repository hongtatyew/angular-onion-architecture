import { createAction, props } from '@ngrx/store';
import { Hero } from '@my-hero-academia/domain/hero';

export const init = createAction('[Hero Page] Init');

export const loadHeroSuccess = createAction(
  '[Hero/API] Load Hero Success',
  props<{ heroes: Hero[] }>()
);

export const loadHeroFailure = createAction(
  '[Hero/API] Load Hero Failure',
  props<{ error: any }>()
);
