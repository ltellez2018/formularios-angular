import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormTemplateComponent } from './pages/form-template/form-template.component';
import { FormDataComponent } from './pages/form-data/form-data.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: 'form/Data', component: FormDataComponent},
  {path: 'form/Template', component: FormTemplateComponent},
  {path: 'home', component: HomeComponent},
  {path: '**', pathMatch: 'full' , component: HomeComponent}
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
