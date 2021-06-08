import { InjectionToken } from '@angular/core';
import { Hero } from '@my-hero-academia/domain/hero';
import { Observable } from "rxjs";

export const HERO_SERVICE = new InjectionToken<IHeroService>('Hero Service');

export interface IHeroService {
    /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
    loaded$: Observable<boolean>;
    allHero$: Observable<Hero[]>;
    selectedHero$: Observable<Hero | undefined>;

    /**
     * Use the initialization action to perform one
     * or more tasks in your Effects.
     */
    init(): void;
}