import { Component, inject } from '@angular/core';
import { TabComponent } from '../../shared/components/tab/tab.component';
import { CommonModule } from '@angular/common';
import { JobsService } from '../../shared/services/jobs.service';
import { Job } from '../../shared/models/job.models';

@Component({
  selector: 'app-jobs-favourite',
  standalone: true,
  imports: [CommonModule, TabComponent],
  templateUrl: './jobs-favourite.component.html',
  styleUrl: './jobs-favourite.component.css'
})
export class JobsFavouriteComponent {
  
  private readonly jobsService = inject(JobsService);
  
    public jobs: Job[] = [];

  ngOnInit(): void {
    this.jobsService.getJobs().subscribe((data) => {
      this.jobs = data.map(job => ({
        ...job,
        isFavourite: this.getFavouriteStatus(job.id.toString())
      }))
      .filter(job => job.isFavourite);
    });
  }

  getFavouriteStatus(reference: string): boolean {
    const storedStatus = localStorage.getItem(reference);
    return storedStatus ? JSON.parse(storedStatus) : false;
  }
}
