import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
  selector: 'my-hero-academia-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'my-hero-academia';


}
