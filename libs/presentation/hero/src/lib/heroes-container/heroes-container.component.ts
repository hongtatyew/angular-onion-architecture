import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import { HERO_SERVICE, IHeroService } from '@my-hero-academia/application/hero';
import { Hero } from '@my-hero-academia/domain/hero';
import { EMPTY, Observable } from 'rxjs';

@Component({
  selector: 'my-hero-academia-heroes',
  templateUrl: './heroes-container.component.html',
  styleUrls: ['./heroes-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroListingContainerComponent {

  heroes$: Observable<Hero[]> = EMPTY;

  constructor(
    @Inject(HERO_SERVICE) private heroService: IHeroService
  ) {
    this.heroes$ = heroService.allHero$;
    heroService.init();
  }
}
