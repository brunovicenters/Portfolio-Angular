import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';

export const routes: Routes = [
  {path: 'projetos', component: ProjectsComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];
