import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { IHeroService } from './hero-service.interface';
import * as HeroActions from './+state/hero.actions';
import * as HeroSelectors from './+state/hero.selectors';
import { Hero } from '@my-hero-academia/domain/hero';
import { Observable } from 'rxjs';

@Injectable()
export class HeroService implements IHeroService {
  constructor(private store: Store) {}
  
  loadHeroes() {
    this.store.dispatch(HeroActions.init());
  }

  isHeroLoaded(): Observable<boolean> {
    return this.store.pipe(select(HeroSelectors.getHeroLoaded));
  }
  
  getAllHero(): Observable<Hero[]> {
    return this.store.pipe(select(HeroSelectors.getAllHero));
  }

  getSelectedHero(): Observable<Hero | undefined> {
    return this.store.pipe(select(HeroSelectors.getSelected));
  }
}
