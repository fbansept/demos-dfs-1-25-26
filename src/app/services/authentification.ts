import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Authentification {
  httpClient = inject(HttpClient);

  login(utilisateur: Utilisateur) {
    return this.httpClient
      .post<{jwt: string}>(
        environment.urlServeur + '/connexion', 
        utilisateur)
      .pipe(tap(resultat => localStorage.setItem('jwt', resultat.jwt)));
  }
}
