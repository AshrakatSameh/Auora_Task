import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { InformationComponent } from './components/information/information.component';

const routes: Routes = [
  {path: 'home', component: MainComponent},
  {path:'info',component:InformationComponent},

  {path: '**', component: MainComponent},
  {path: '', component: MainComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
