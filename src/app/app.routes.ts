import { Routes } from '@angular/router';
import { JobsListComponent } from './components/jobs-list/jobs-list.component';
import { JobsDetailsComponent } from './components/jobs-details/jobs-details.component';
import { JobsFavouriteComponent } from './components/jobs-favourite/jobs-favourite.component';

export const routes: Routes = [
    { path: '', redirectTo: '/jobs', pathMatch: 'full' },
    { path: 'jobs', component: JobsListComponent },
    { path: 'jobs/favourite', component: JobsFavouriteComponent },
    { path: 'job/:id', component: JobsDetailsComponent },
    { path: '**', redirectTo: '/jobs' },
];
