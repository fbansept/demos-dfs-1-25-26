import { Component, inject } from '@angular/core';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Authentification } from '../../services/authentification';
import { NotificationService } from '../../services/notification';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [MatInputModule, MatButtonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  formBuilder = inject(FormBuilder);
  authentification = inject(Authentification);
  notification = inject(NotificationService);
  router = inject(Router);

  formulaire = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  onSubmit() {
    if (this.formulaire.valid) {
      //on certifie à typescript que l'on va obtenir un
      //utilisateur avec email et password ("as Utilisateur")
      const utilisateur: Utilisateur = this.formulaire.value as Utilisateur;

      this.authentification.login(utilisateur).subscribe({
        next: () => {
          this.notification.valid('Bienvenue ' + utilisateur.email);
          this.router.navigateByUrl('/home');
        },
        error: () => this.notification.error('Mauvais email ou mot de passe'),
      });
    }
  }
}
