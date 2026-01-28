import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategorieService {
  readonly categories = signal<Categorie[]>([]);

  http = inject(HttpClient);

  getAll() {
    return this.http
      .get<Categorie[]>('http://localhost:3000/categories')
      .pipe(tap((resultat) => this.categories.set(resultat)));
  }

  ajouterImage(url: string) {
    return this.http
      .post('http://localhost:3000/image', { url })
      .pipe(tap(() => this.getAll().subscribe()));
  }

  deplacerImage(indexCategorie: number, indexImage: number, monter: boolean = true) {
    const idCategorie = this.categories()[indexCategorie].id!;

    return this.http
      .patch('http://localhost:3000/image/' + idCategorie, { indexImage, monter })
      .pipe(tap(() => this.getAll().subscribe()));
  }

  supprimerImage(indexCategorie: number, indexImage: number) {
    const idCategorie = this.categories()[indexCategorie].id!;

    return this.http
      .delete('http://localhost:3000/image/' + idCategorie, { body: { indexImage } })
      .pipe(tap(() => this.getAll().subscribe()));
  }
}
