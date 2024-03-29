import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GestionLibroComponent } from './app/gestion-libro/gestion-libro.component';
import { DashboardComponent } from './app/dashboard/dashboard.component';
import { SamplepageComponent } from './app/samplepage/samplepage.component';

/*export const routes: Routes = [
  { path: 'test', component: GestionLibroComponent }, // Ruta para la página inicial
  // Puedes agregar más rutas aquí según sea necesario
];*/

export const routes: Routes = [
  {
    path: '', title: 'Dashboard Page', component: DashboardComponent,
  },
  {
    path: 'samplepage', title: 'Sample Page', component: SamplepageComponent,
  },
  { path: 'test',  title: 'Registro', component: GestionLibroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }