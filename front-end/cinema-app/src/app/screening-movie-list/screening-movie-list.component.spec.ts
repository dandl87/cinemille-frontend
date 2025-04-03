import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreeningMovieListComponent } from './screening-movie-list.component';

describe('ScreeningMovieListComponent', () => {
  let component: ScreeningMovieListComponent;
  let fixture: ComponentFixture<ScreeningMovieListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScreeningMovieListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreeningMovieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
