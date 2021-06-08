import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Hero } from '@my-hero-academia/domain/hero';

@Component({
  selector: 'my-hero-academia-hero-ui',
  templateUrl: './hero-ui.component.html',
  styleUrls: ['./hero-ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroUiComponent {

  @Input()
  hero!: Hero;

}
