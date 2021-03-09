import { NgModule } from '@angular/core';
import { SkCommonModule, SkTypographyModule } from '@standardkit/angular-components';
import { GettingStartedPage } from './getting-started/getting-started.page';

const PAGES = [
  GettingStartedPage
];

@NgModule({
  imports: [
    SkTypographyModule,
    SkCommonModule
  ],
  declarations: PAGES,
  exports: PAGES
})
export class DocsPagesModule {
}
