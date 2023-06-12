import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router
  ) { }

  canActivate(): Observable<boolean> {
    return this.afAuth.authState.pipe(
      map(user => {
        if (user) {
          return true; // Usuario autenticado, permitir el acceso
        } else {
          this.router.navigate(['/login']); // Redireccionar al login si el usuario no está autenticado
          return false;
        }
      })
    );
  }
}
