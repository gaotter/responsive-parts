import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ExamplesListComponent } from './../examples-list/examples-list.component';
import { ResponsiveTableTestComponent } from './../table/responsive-table-test/responsive-table-test.component';

const appRoutes: Routes = [
  { path: '', component: ExamplesListComponent },
  { path: 'responsive-table', component: ResponsiveTableTestComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    CommonModule
  ],
  exports: [RouterModule],
  declarations: []
})
export class ApplicationRoutesModule { }
