import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InfrastructureHeroModule } from '@my-hero-academia/infrastructure/hero';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromHero from './+state/hero.reducer';
import { HeroEffects } from './+state/hero.effects';
import { HeroService } from './hero.service';
import { HERO_SERVICE } from './hero-service.interface';

@NgModule({
  imports: [
    CommonModule, 
    InfrastructureHeroModule,
    StoreModule.forFeature(fromHero.HERO_FEATURE_KEY, fromHero.reducer),
    EffectsModule.forFeature([HeroEffects]),
  ],
  providers: [{
    provide: HERO_SERVICE,
    useClass: HeroService
  }]
})
export class ApplicationHeroModule { }
