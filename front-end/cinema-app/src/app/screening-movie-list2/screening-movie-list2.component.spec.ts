import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreeningMovieList2Component } from './screening-movie-list2.component';

describe('ScreeningMovieList2Component', () => {
  let component: ScreeningMovieList2Component;
  let fixture: ComponentFixture<ScreeningMovieList2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScreeningMovieList2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreeningMovieList2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
