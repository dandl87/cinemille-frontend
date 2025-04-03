import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MovieScreening } from '../movie-screening';
import { ScreeningMoviesService } from '../screening-movies.service';
import { ScreeningMovieDetailComponent } from '../screening-movie-detail/screening-movie-detail.component';
import { SortPipe } from '../sort.pipe';

@Component({
  selector: 'screening-movie-list-admin',
  imports: [ReactiveFormsModule, ScreeningMovieDetailComponent, SortPipe ],
  templateUrl: './screening-movie-list2.component.html',
  styleUrl: './screening-movie-list2.component.css'
})
export class ScreeningMovieList2Component {
 

  dateForm = new FormGroup({
    dayField: new FormControl<Date>(new Date(),{nonNullable:true})
  });

  date = new FormControl(new Date);
 
  selectedDay: Date|undefined;

  dayAsDate: Date | undefined;

  dayAsString: string| undefined;

  today: Date | undefined;

  selectedMovie: MovieScreening | undefined;

  constructor(private screeningMoviesService: ScreeningMoviesService){
 
  }

  movieSignal = signal<MovieScreening[]>([]);

 
  onSubmit(){

    this.selectedDay=this.dateForm.value.dayField; 
    this.updateDay();

  } 
 

  ngOnInit(){ 
    this.loadMoviesOnStartUp();
  }


  updateDay(){
    if(this.selectedDay){ 
      this.dayAsString=this.selectedDay.toString(); 
      this.loadMovies();
      
    }else{
      this.dayAsString = 'not valid date';
    }
  } 
 
  loadMoviesOnStartUp(){
    
  this.screeningMoviesService.getMovies().subscribe((movies) => {
    this.movieSignal.set(movies); 
  })}

   
  loadMovies(){
    
    this.screeningMoviesService.getMoviesOfAWeek(this.dayAsString!).subscribe((movies) => {
      this.movieSignal.set(movies); 
    })}
   
}

 