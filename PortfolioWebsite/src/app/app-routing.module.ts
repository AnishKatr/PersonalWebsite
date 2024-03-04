import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'project', component: ProjectsComponent},
  { path: 'resume', component:ResumeComponent },
  { path: 'contact', component: ContactComponent},
  {path: '**', component: HomeComponent, pathMatch:'full'},
  //{ path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
  //{ path: 'projects', loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule) },
  //{ path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
  //{ path: '', redirectTo: '/home', pathMatch: 'full' },
  //{// path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
