import { Component } from '@angular/core';
import { JobFormComponent } from "../job-form/job-form.component";
import { JobListComponent } from "../job-list/job-list.component";

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [JobFormComponent, JobListComponent],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.scss'
})
export class JobsComponent {}
