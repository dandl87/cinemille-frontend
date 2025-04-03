import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreeningMovieDetailComponent } from './screening-movie-detail.component';

describe('ScreeningMovieDetailComponent', () => {
  let component: ScreeningMovieDetailComponent;
  let fixture: ComponentFixture<ScreeningMovieDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScreeningMovieDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreeningMovieDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
