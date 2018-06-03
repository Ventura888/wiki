import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import  {HomeComponent } from './components/home/home.component';
import { ValuesComponent } from './components/values/values.component';
import { ValueDetailComponent } from './components/value-detail/value-detail.component';
import { NewValueComponent } from './components/new-value/new-value.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'detail/:id', component: ValueDetailComponent },
  { path: 'values', component: ValuesComponent },
  { path: 'new', component: NewValueComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
