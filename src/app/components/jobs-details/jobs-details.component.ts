import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { TabComponent } from '../../shared/components/tab/tab.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { JobsService } from '../../shared/services/jobs.service';
import { Job } from '../../shared/models/job.models';

@Component({
  selector: 'app-jobs-details',
  standalone: true,
  imports: [CommonModule, TabComponent, RouterModule],
  templateUrl: './jobs-details.component.html',
  styleUrl: './jobs-details.component.css'
})
export class JobsDetailsComponent implements OnInit {

  private readonly jobsService = inject(JobsService);
  private route = inject(ActivatedRoute);

  public job: Job | null = null;

  ngOnInit(): void {
    const jobId = this.route.snapshot.paramMap.get('id');
    if(jobId) {
      this.jobsService.getJobById(Number.parseInt(jobId)).subscribe((data : Job) => {
        this.job = data;
      });
    }
  }
  
}
