import { inject, Injectable } from '@angular/core';
import { MovieScreening } from './movie-screening';
import { HttpClient, HttpParams } from '@angular/common/http';
import { APP_SETTINGS } from './app.settings';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScreeningMoviesService {
 
  private movies: MovieScreening[] =  [];
  private moviesUrl = inject(APP_SETTINGS).apiUrl + '/movie-screenings/last-week';
  private moviesUrlAtDay = inject(APP_SETTINGS).apiUrl + '/movie-screenings/week';
  

  constructor(private http: HttpClient) { } 
  
  getMovies(): Observable<MovieScreening[]> {
    const options = new HttpParams().set('limit',12);
    return this.http.get<MovieScreening[]>(this.moviesUrl, {
      params: options
    });
  }

  getMoviesOfAWeek(day:string | null): Observable<MovieScreening[]> {
    const options = new HttpParams().set('day',day!);
    console.log("log in the service: "+day)
    return this.http.get<MovieScreening[]>(`${this.moviesUrlAtDay}`, {
      params: options
    });
  }
 
}
