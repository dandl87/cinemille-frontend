import { Component,Input,OnInit, computed, inject, input, signal } from '@angular/core';
import { MovieScreening } from '../movie-screening';
import { ScreeningMovieDetailComponent } from '../screening-movie-detail/screening-movie-detail.component';
import { ScreeningMoviesService } from '../screening-movies.service'; 
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'; 

@Component({
  selector: 'screening-movie-list',
  imports: [ReactiveFormsModule, ScreeningMovieDetailComponent],
  templateUrl: './screening-movie-list.component.html',
  styleUrl: './screening-movie-list.component.css'
})
export class ScreeningMovieListComponent {
  
 

  selectedMovie: MovieScreening | undefined;

  constructor(private screeningMoviesService: ScreeningMoviesService){
 
  }

  movieSignal = signal<MovieScreening[]>([]);

 
  
  ngOnInit(){ 
    this.loadMovies();
  }
 
  loadMovies(){

  this.screeningMoviesService.getMovies().subscribe((movies) => {
    this.movieSignal.set(movies); 
  })}

   
}

 