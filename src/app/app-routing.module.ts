import { NgModule } from '@angular/core';
// Rutas
import { Routes, RouterModule } from '@angular/router';
// Componentes
import { InicioComponent } from './components/inicio/inicio.component';
import { ErrorComponent } from './components/shared/error/error.component';


const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'inicio', component: InicioComponent},
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
