import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SkCommonModule, SkLayoutModule } from '@standardkit/angular-components';
import { PageLayout } from './page/page.layout';

@NgModule({
  imports: [RouterModule, SkCommonModule, SkLayoutModule],
  declarations: [PageLayout],
  exports: [PageLayout]
})
export class DocsLayoutModule {
}
