import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Job } from '../models/job.models';
import { Constantes } from '../utils/constantes';

@Injectable({
  providedIn: 'root',
})
export class JobsService {
  private readonly httpClient = inject(HttpClient);

  getJobs(): Observable<Job[]> {
    return this.httpClient
      .get<Job[]>(Constantes.API_URLS.JOBS);
  }

  getJobById(jobId: number): Observable<Job> {
    return this.httpClient
      .get<Job>(`${Constantes.API_URLS.JOBS}/${jobId}`);
  }
}