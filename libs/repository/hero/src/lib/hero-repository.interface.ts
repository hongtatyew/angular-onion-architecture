import { Observable } from 'rxjs';
import { Hero } from '@my-hero-academia/domain/hero';
import { InjectionToken } from '@angular/core';

export const HERO_REPOSITORY = new InjectionToken<IHeroRepository>('Hero Repository');

export interface IHeroRepository {
    getHeroes(): Observable<Hero[]>;
}

