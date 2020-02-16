import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuComponent} from './menu/menu.component';
import {FooterComponent} from './footer/footer.component';
import {MainPageComponent} from './main-page/main-page.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {IntroductionComponent} from './introduction/introduction.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '../material/material.module';


@NgModule({
  declarations: [MenuComponent, FooterComponent, MainPageComponent, PageNotFoundComponent, IntroductionComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  exports: [
    FooterComponent, MenuComponent
  ]
})
export class HomeModule {
}