import { Component } from '@angular/core';
import { ScreeningMovieList2Component } from "../screening-movie-list2/screening-movie-list2.component";

@Component({
  selector: 'app-admin-page',
  imports: [ScreeningMovieList2Component],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.css'
})
export class AdminPageComponent {

}
