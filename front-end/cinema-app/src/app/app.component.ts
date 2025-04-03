import { Component, inject, input, output } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router'; 
import { APP_SETTINGS } from './app.settings'; 
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent { 
    settings = inject(APP_SETTINGS);

 

 
 
}
