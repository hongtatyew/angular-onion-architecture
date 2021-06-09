import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroListingContainerComponent } from './heroes-container/heroes-container.component';
import { ApplicationHeroModule } from '@my-hero-academia/application/hero';
import { HeroUiComponent } from './hero-ui/hero-ui.component';
import { SharedPipesTruncateModule } from '@my-hero-academia/shared/pipes/truncate';
import { SharedPipesToStringModule } from '@my-hero-academia/shared/pipes/to-string';
import { PresentationHeroRoutingModule } from './presentation-hero-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ApplicationHeroModule,
    SharedPipesTruncateModule,
    SharedPipesToStringModule,
    PresentationHeroRoutingModule
  ],
  declarations: [
    HeroListingContainerComponent,
    HeroUiComponent
  ]
})
export class PresentationHeroModule { }
