import { Component } from '@angular/core';
import { ScreeningMovieDetailComponent } from "../screening-movie-detail/screening-movie-detail.component";
import { ScreeningMovieListComponent } from "../screening-movie-list/screening-movie-list.component";

@Component({
  selector: 'app-user-page',
  imports: [ScreeningMovieListComponent],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.css'
})
export class UserPageComponent {

}
