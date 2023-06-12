import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscadorDeCancionesComponent } from './components/buscador-de-canciones/buscador-de-canciones.component';
import { MiListaDeReproduccionComponent } from './components/mi-lista-de-reproduccion/mi-lista-de-reproduccion.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './guards/auth-guard.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent  },
  { path: 'register', component: RegisterComponent},
  { path: 'buscador', component: BuscadorDeCancionesComponent, canActivate: [AuthGuard]},
  { path: 'lista-reproduccion', component: MiListaDeReproduccionComponent, canActivate: [AuthGuard]},
  { path: 'lista-favoritos', component: FavoritosComponent, canActivate: [AuthGuard]},
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
