import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SearchComponent } from './components/search/search.component';
import { SearchDetComponent } from './search-det/search-det.component';
import { SearchEditComponent } from './components/search-edit/search-edit.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'search',component:SearchComponent},
  {path:'search_list', component:SearchDetComponent, children:[{path:'search-edit', component:SearchEditComponent}]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RouteComponents = [LoginComponent,SearchComponent,SearchDetComponent];
