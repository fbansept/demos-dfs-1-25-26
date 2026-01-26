import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  imports: [MatButtonModule, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  urlImageSaisie = '';

  categories = [
    {
      titre: 'A',
      images: [
        'https://blog.hellofresh.co.uk/wp-content/uploads/2021/03/HF201125_R209_W02_FR_RFR20161819-1_MB_Main_low-scaled.jpg',
        'https://kissmychef.com/wp-content/uploads/2020/07/cornetteria.jpg',
      ],
    },
    { titre: 'B', images: [] },
    {
      titre: 'C',
      images: [
        'https://img-3.journaldesfemmes.fr/BNubGw2ChgpFyw3eK2g-PMwF28Y=/1240x/smart/7231e1a7ad4a4fbb94f3498c11392d23/ccmcms-jdf/36619834.jpg',
      ],
    },
    { titre: 'D', images: [] },
  ];

  ajouterImage() {
    if (this.urlImageSaisie !== '') {
      this.categories[0].images.push(this.urlImageSaisie);
      this.urlImageSaisie = '';
    }
  }

  deplacementImage(indexCategorie: number, indexImage: number, monter: boolean = true) {
    //on recupere l'url de l'image a deplacer
    const urlImageAdeplacer = this.categories[indexCategorie].images[indexImage];

    //on copie l'image dans la categorie du dessous
    this.categories[indexCategorie + (monter ? -1 : 1)].images.push(urlImageAdeplacer);

    //on supprime l'image de la categorie actuelle
    this.categories[indexCategorie].images.splice(indexImage, 1);
  }

  supprimerImage(indexCategorie: number, indexImage: number) {
    //on supprime l'image de la categorie actuelle
    this.categories[indexCategorie].images.splice(indexImage, 1);
  }
}

//ajouter un bouton pour monter l'image / supprimer l'image

//le bouton supprimer doit etre rouge

//ne pas afficher le bouton a l'aide de l'intruction @if si l'image est dans la premiere categorie dans le cas du +
// et le bouton - si l'image est dans la derniere categorie
