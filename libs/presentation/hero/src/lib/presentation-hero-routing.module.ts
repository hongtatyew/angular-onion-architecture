import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroListingContainerComponent } from './heroes-container/heroes-container.component';

const routes: Routes = [
  { path: '', component: HeroListingContainerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PresentationHeroRoutingModule { }