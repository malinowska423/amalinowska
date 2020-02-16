import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuComponent} from './menu/menu.component';
import {FooterComponent} from './footer/footer.component';
import {MainPageComponent} from './main-page/main-page.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [MenuComponent, FooterComponent, MainPageComponent, PageNotFoundComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule {
}
