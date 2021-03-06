import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StandardKitModule } from '@standardkit/angular-components';
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
    DocsRoutingModule,
    StandardKitModule.forRoot({
      iconSet: 'material-design-icons'
    })
  ],
  providers: [],
  bootstrap: [DocsComponent]
})
export class DocsModule {
}
