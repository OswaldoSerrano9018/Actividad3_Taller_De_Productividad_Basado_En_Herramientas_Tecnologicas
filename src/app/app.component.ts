import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TopbarComponent} from "./commons/ui/sections/navigation/topbar/topbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'carpinteria-front';
}
