import { Routes } from '@angular/router';  
import { ScreeningMovieListComponent } from './screening-movie-list/screening-movie-list.component';
import { ScreeningMovieList2Component } from './screening-movie-list2/screening-movie-list2.component';

export const routes: Routes = [
    { path: 'user', component: ScreeningMovieListComponent},
    { path: 'admin', component: ScreeningMovieList2Component}
];
