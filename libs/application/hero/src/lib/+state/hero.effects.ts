import { Inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { IHeroRepository, HERO_REPOSITORY } from '@my-hero-academia/repository/hero';
import * as HeroActions from './hero.actions';

@Injectable()
export class HeroEffects {
  init$ = createEffect(() => this.actions$
    .pipe(
      ofType(HeroActions.init),
      switchMap(() => this.heroService
        .getHeroes()
        .pipe(
          map((heroes) => HeroActions.loadHeroSuccess({ heroes }))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    @Inject(HERO_REPOSITORY) private heroService: IHeroRepository
  ) { }
}
