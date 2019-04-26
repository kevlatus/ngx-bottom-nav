import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {RouteHomeComponent} from '../components/route-home/route-home.component';
import {RouteTwoComponent} from '../components/route-two/route-two.component';

const routes: Routes = [
  {path: '', component: RouteHomeComponent, pathMatch: 'full'},
  {path: 'two', component: RouteTwoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
