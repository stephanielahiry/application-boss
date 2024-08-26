import { Component, inject, Input } from '@angular/core';
import { Job } from '../types/job.type'
import { JobsFirebaseService } from '../services/jobsFirebase.service';
import { JobsService } from '../services/jobsService';

@Component({
  selector: 'app-job-item',
  standalone: true,
  imports: [],
  templateUrl: './job-item.component.html',
  styleUrl: './job-item.component.scss'
})
export class JobItemComponent {
  @Input() job!: Job;
  jobsService = inject(JobsService);
  jobsFirebaseService = inject(JobsFirebaseService);

  deleteJob(jobToDeleteId: string): void {
    this.jobsFirebaseService.deleteJob(jobToDeleteId).subscribe((jobToDeleteId) => {
      this.jobsService.deleteJob(jobToDeleteId);
    });
  }

  onSubmit(jobToDeleteId: string) {
    this.deleteJob(jobToDeleteId);
  }
}
