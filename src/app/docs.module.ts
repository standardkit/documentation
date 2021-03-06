import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DocsComponent } from './docs.component';
import { DocsLayoutModule } from './layout/layout.module';
import { DocsRoutingModule } from './routing/routing.module';

@NgModule({
  declarations: [
    DocsComponent
  ],
  imports: [
    BrowserModule,
    DocsLayoutModule,
    DocsRoutingModule
  ],
  providers: [],
  bootstrap: [DocsComponent]
})
export class DocsModule {
}
