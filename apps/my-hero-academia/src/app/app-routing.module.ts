import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PresentationHeroModule } from '@my-hero-academia/presentation/hero';

const routes: Routes = [
  { path: 'heroes', loadChildren: () => PresentationHeroModule }, // not encourage to lazy load home module
  { path: '', redirectTo: '/heroes', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }