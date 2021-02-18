
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { SearchComponent } from './routes/search/search.component';
import { UnimplementedScreenComponent } from './routes/unimplemented-screen/unimplemented-screen.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'search', component: SearchComponent},
  {path: 'notifications', component: UnimplementedScreenComponent},
  {path: 'messages', component: UnimplementedScreenComponent},
  {path: 'bookmarks', component: UnimplementedScreenComponent},
  {path: 'profile', component: UnimplementedScreenComponent},
  {path: '*', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
