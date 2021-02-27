import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuComponent} from './menu/menu.component';
import {FooterComponent} from './footer/footer.component';
import {MainPageComponent} from './main-page/main-page.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {IntroductionComponent} from './introduction/introduction.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from '../../app-routing.module';
import {TemporaryHomepageComponent} from './temporary-homepage/temporary-homepage.component';
import {ScrollDownBtnComponent} from './scroll-down-btn/scroll-down-btn.component';


@NgModule({
  declarations: [MenuComponent, FooterComponent, MainPageComponent, PageNotFoundComponent, IntroductionComponent, TemporaryHomepageComponent, ScrollDownBtnComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  exports: [
    FooterComponent, MenuComponent
  ]
})
export class HomeModule {
}
