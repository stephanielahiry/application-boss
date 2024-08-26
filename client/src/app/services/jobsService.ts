import { Injectable, signal } from "@angular/core";
import { Job } from "../types/job.type";

@Injectable({
    providedIn: "root"
})
export class JobsService {
    jobs = signal<Job[]>([]);

    addJob(newJob: Job): void {
        this.jobs.update((jobs) => [...jobs, newJob]);
    }

    deleteJob(jobToDeleteId: string): void {
        this.jobs.update((jobs) => jobs.filter(job => job.id !== jobToDeleteId));
    }

}