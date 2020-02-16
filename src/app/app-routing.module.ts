import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PageNotFoundComponent} from './modules/home/page-not-found/page-not-found.component';
import {MainPageComponent} from './modules/home/main-page/main-page.component';
import {GalleryComponent} from './modules/gallery/gallery/gallery.component';
import {ProjectsComponent} from './modules/projects/projects/projects.component';
import {CvComponent} from './modules/cv/cv/cv.component';


const routes: Routes = [
  {path: 'cv', component: CvComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: '', component: MainPageComponent},
  {path: '**', component: PageNotFoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
