import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {RouteHomeComponent} from '../components/route-home/route-home.component';
import {RouteForumComponent} from '../components/route-forum/route-forum.component';
import {RouteSearchComponent} from '../components/route-search/route-search.component';

const routes: Routes = [
  {path: '', component: RouteHomeComponent, pathMatch: 'full'},
  {path: 'forum', component: RouteForumComponent},
  {path: 'search', component: RouteSearchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
