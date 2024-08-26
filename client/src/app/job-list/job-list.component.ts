import { Component, inject, OnInit } from '@angular/core';
import { JobsService } from '../services/jobsService';
import { JobsFirebaseService } from '../services/jobsFirebase.service';
import { JobItemComponent } from "../job-item/job-item.component";

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [JobItemComponent],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.scss'
})
export class JobListComponent implements OnInit {
  jobsService = inject(JobsService);
  jobsFirebaseService = inject(JobsFirebaseService);

  ngOnInit() { 
    this.jobsFirebaseService.getJobs().subscribe((jobs) => {
      this.jobsService.jobs.set(jobs);
    });
  }

}
