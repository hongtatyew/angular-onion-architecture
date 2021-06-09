import { InjectionToken } from '@angular/core';
import { Hero } from '@my-hero-academia/domain/hero';
import { Observable } from "rxjs";

export const HERO_SERVICE = new InjectionToken<IHeroService>('Hero Service');

export interface IHeroService {
    loadHeroes(): void;
    isHeroLoaded(): Observable<boolean>;
    getAllHero(): Observable<Hero[]>;
    getSelectedHero(): Observable<Hero | undefined>;
}