import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ApplicationRoutesModule } from './application-routes/application-routes.module';

import { AppComponent } from './app.component';
import { ResponsiveTableDirective } from './table/responsive-table.directive';
import { ResponsiveTableTestComponent } from './table/responsive-table-test/responsive-table-test.component';
import { ExamplesListComponent } from './examples-list/examples-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ResponsiveTableDirective,
    ResponsiveTableTestComponent,
    ExamplesListComponent
  ],
  imports: [
    BrowserModule,
ApplicationRoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
