import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageLayout } from './page/page.layout';

@NgModule({
  imports: [RouterModule],
  declarations: [PageLayout],
  exports: [PageLayout]
})
export class DocsLayoutModule {
}
