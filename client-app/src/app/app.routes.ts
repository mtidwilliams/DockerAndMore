import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DockerComponent } from './docker/docker.component';
import { AzureDevOpsComponent } from './azure-devops/azure-devops.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'docker', component: DockerComponent },
  { path: 'azure-devops', component: AzureDevOpsComponent },
  { path: '**', redirectTo: '' }
];
