import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { IHeroService } from './hero-service.interface';
import * as HeroActions from './+state/hero.actions';
import * as HeroSelectors from './+state/hero.selectors';

@Injectable()
export class HeroService implements IHeroService {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(HeroSelectors.getHeroLoaded));
  allHero$ = this.store.pipe(select(HeroSelectors.getAllHero));
  selectedHero$ = this.store.pipe(select(HeroSelectors.getSelected));

  constructor(private store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(HeroActions.init());
  }
}
