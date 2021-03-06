import { NgModule } from '@angular/core';
import { GettingStartedPage } from './getting-started/getting-started.page';

const PAGES = [
  GettingStartedPage
];

@NgModule({
  declarations: PAGES,
  exports: PAGES
})
export class PagesModule {
}
