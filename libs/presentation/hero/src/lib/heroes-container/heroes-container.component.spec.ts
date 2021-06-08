import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroListingContainerComponent } from './heroes-container.component';

describe('HeroListingContainerComponent', () => {
  let component: HeroListingContainerComponent;
  let fixture: ComponentFixture<HeroListingContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroListingContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroListingContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
