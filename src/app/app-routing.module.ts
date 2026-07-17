import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { ProjectsComponent } from './projects/projects.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { HomeComponent } from './home/home.component';
import { WriteupHtbCapComponent } from './writeups/writeup-htb-cap/writeup-htb-cap.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent, pathMatch: 'full' },
  { path: 'technologies', component: TechnologiesComponent, pathMatch: 'full' },
  { path: 'certificates', component: CertificatesComponent, pathMatch: 'full' },
  { path: 'projects', component: ProjectsComponent, pathMatch: 'full' },
  { path: 'informes/htb-cap', component: WriteupHtbCapComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
