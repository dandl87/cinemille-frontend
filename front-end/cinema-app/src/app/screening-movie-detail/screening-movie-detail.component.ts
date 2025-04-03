import { Component, input } from '@angular/core';
import { MovieScreening } from '../movie-screening';

@Component({
  selector: 'screening-movie-detail',
  imports: [ ],
  templateUrl: './screening-movie-detail.component.html',
  styleUrl: './screening-movie-detail.component.css'
})
export class ScreeningMovieDetailComponent {
  movie = input<MovieScreening>();

}
