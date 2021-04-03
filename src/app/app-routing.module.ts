import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component'
import { PipesComponent } from './pipes/pipes.component'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'customPipes',
    component: CustomPipeComponent
  },
  {
    path: 'pipes',
    component: PipesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
