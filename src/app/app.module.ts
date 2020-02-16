import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MaterialModule} from './modules/material/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HomeModule} from './modules/home/home.module';
import {GalleryModule} from './modules/gallery/gallery.module';
import {ProjectsModule} from './modules/projects/projects.module';
import {CvModule} from './modules/cv/cv.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HomeModule,
    GalleryModule,
    ProjectsModule,
    CvModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
