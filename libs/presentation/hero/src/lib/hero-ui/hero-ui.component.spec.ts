import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroUiComponent } from './hero-ui.component';

describe('HeroUiComponent', () => {
  let component: HeroUiComponent;
  let fixture: ComponentFixture<HeroUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
