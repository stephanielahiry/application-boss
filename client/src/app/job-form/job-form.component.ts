import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { JobsService } from '../services/jobsService';
import { Job } from '../types/job.type'
import { JobsFirebaseService } from '../services/jobsFirebase.service';

interface JobForm {
  title: FormControl<string>;
  url: FormControl<string>;
  platform: FormControl<string>; 
  isEasyApply: FormControl<boolean>;
  postAge: FormControl<number | null>;
  usedJobscan: FormControl<boolean>;
  applicantNumber: FormControl<number | null>;
  jobscanPercentage: FormControl<number | null>;
  hasContactedEmployee: FormControl<boolean>;
}

@Component({
  selector: 'app-job-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './job-form.component.html',
  styleUrl: './job-form.component.scss'
})
export class JobFormComponent implements OnInit {
  jobForm!: FormGroup;
  jobsService = inject(JobsService);
  jobsFirebaseService = inject(JobsFirebaseService);

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() { 
    this.jobForm = this.formBuilder.group<JobForm>({
      title: new FormControl('', { nonNullable: true, validators: Validators.required }),
      url: new FormControl('', { nonNullable: true, validators: Validators.required }),
      platform: new FormControl('', { nonNullable: true, validators: Validators.required }),
      applicantNumber: new FormControl(null),
      isEasyApply: new FormControl(false, { nonNullable: true }),
      postAge: new FormControl(null),
      usedJobscan: new FormControl(false, { nonNullable: true, validators: Validators.required }),
      jobscanPercentage: new FormControl(null),
      hasContactedEmployee: new FormControl(false, { nonNullable: true, validators: Validators.required })
    })
  }

  addJob(job: Job): void {
    this.jobsFirebaseService.addJob(job).subscribe((addedJobId) => {
      this.jobsService.addJob(job);
    });
  }

  submitJobForm() {
    this.addJob(this.jobForm.value);
  }

}
