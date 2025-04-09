import { AfterContentInit, AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { JobsService } from '../../shared/services/jobs.service';
import { Job } from '../../shared/models/job.models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-jobs-list',
  standalone: true,
  imports: [CommonModule], // Permet d'utiliser les directives Angular de base (*ngFor, *ngIf, etc.)
  templateUrl: './jobs-list.component.html',
  styleUrl: './jobs-list.component.css'
})
export class JobsListComponent implements OnInit {
  
  private readonly jobsService = inject(JobsService);

  public jobs: Job[] = [];

  ngOnInit(): void {
    this.jobsService.getJobs().subscribe((data) => {
      this.jobs = data;
    });
  }

}
