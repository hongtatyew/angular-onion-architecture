import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HERO_REPOSITORY } from '@my-hero-academia/repository/hero';
import { HeroRepository } from './hero-repository.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [{
    provide: HERO_REPOSITORY,
    useClass: HeroRepository
  }]
})
export class InfrastructureHeroModule {}
