import { inject, Injectable } from "@angular/core";
import { addDoc, collection, collectionData, CollectionReference, deleteDoc, doc, Firestore } from "@angular/fire/firestore";
import { Observable } from "@firebase/util";
import { from } from "rxjs";
import { Job } from '../types/job.type'

@Injectable({
    providedIn: "root"
})
export class JobsFirebaseService {
    firestore = inject(Firestore);
    jobs = collection(this.firestore, "jobs") as CollectionReference;

    getJobs(): Observable<Job[]> {
        return collectionData(this.jobs, {
            idField: 'id'
        }) as Observable<Job[]>
    }

    addJob(newJob: Job): Observable<string> {
        const promise = addDoc(this.jobs, newJob);
        return from(promise);
    }

    deleteJob(jobToDeleteId: string): Observable<string> {
        const docRef = doc(this.firestore, 'jobs/' + jobToDeleteId);
        const promise = deleteDoc(docRef);
        return from(promise);
    }

}