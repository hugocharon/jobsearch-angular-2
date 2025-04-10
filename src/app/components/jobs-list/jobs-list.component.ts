import { Component, inject, OnInit } from '@angular/core';
import { JobsService } from '../../shared/services/jobs.service';
import { Job } from '../../shared/models/job.models';
import { CommonModule } from '@angular/common';
import { TabComponent } from '../../shared/components/tab/tab.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-jobs-list',
  standalone: true,
  imports: [CommonModule, TabComponent, RouterModule], // Permet d'utiliser les directives Angular de base (*ngFor, *ngIf, etc.)
  templateUrl: './jobs-list.component.html',
  styleUrl: './jobs-list.component.css'
})
export class JobsListComponent implements OnInit {
  
  private readonly jobsService = inject(JobsService);

  public jobs: Job[] = [];

  ngOnInit(): void {
    this.jobsService.getJobs().subscribe((data) => {
      this.jobs = data.map(job => ({
        ...job,
        isFavourite: this.getFavouriteStatus(job.id.toString())
      }));;
    });
  }

  toggleFavourite(job: Job) {
    job.isFavourite = !job.isFavourite;
    localStorage.setItem(job.id.toString(), JSON.stringify(job.isFavourite));
  }

  getFavouriteStatus(reference: string): boolean {
    const storedStatus = localStorage.getItem(reference);
    return storedStatus ? JSON.parse(storedStatus) : false;
  }

}
