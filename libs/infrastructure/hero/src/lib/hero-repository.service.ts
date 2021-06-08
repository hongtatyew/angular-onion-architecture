import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hero } from '@my-hero-academia/domain/hero';
import { IHeroRepository } from '@my-hero-academia/repository/hero';
import { Observable } from 'rxjs';

@Injectable()
export class HeroRepository implements IHeroRepository {

  constructor(private httpClient: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    return this.httpClient.get<Hero[]>('assets/data/heroes.json');
  }
}
