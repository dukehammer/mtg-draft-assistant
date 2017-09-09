import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ImportComponent }   from './import-cards.component';
import { ViewComponent }      from './view-cards.component';

const routes: Routes = [
  { path: '', redirectTo: '/import', pathMatch: 'full' },
  { path: 'import',  component: ImportComponent },
  { path: 'view',     component: ViewComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
