import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLayout } from '../layout/page/page.layout';
import { GettingStartedPage } from '../pages/getting-started/getting-started.page';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'getting-started'},
  {
    path: '', component: PageLayout, children: [
      {path: 'getting-started', component: GettingStartedPage}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DocsRoutingModule {
}
