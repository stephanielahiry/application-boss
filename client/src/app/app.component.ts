import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JobsComponent } from "./jobs/jobs.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    JobsComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Application Boss';
}
