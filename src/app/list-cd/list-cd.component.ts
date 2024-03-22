import { Component, OnInit } from '@angular/core';
import { cd } from '../models/cd.models';

@Component({
  selector: 'app-list-cd',
  templateUrl: './list-cd.component.html',
  styleUrl: './list-cd.component.scss'
})
export class ListCDComponent implements OnInit{

  listecd! : cd[];

  ngOnInit(): void {
      this.listecd = [
        {
          id : 1,
          titre : "The DarkSide of the Moon",
          auteur : "Pink Floyd",
          prix : 10,
          img : "https://fr.wikipedia.org/wiki/Pink_Floyd",
          dateDeSortie : new Date(1973,3,1),
          qte : 1,
          estRupture : false
        },
        {
          id : 2,
          titre : "Pulse",
          auteur : "Pink Floyd",
          prix : 10,
          img : "https://fr.wikipedia.org/wiki/Pink_Floyd",
          dateDeSortie : new Date(1973,3,1),
          qte : 2,
          estRupture : true
        },
        {
          id : 3,
          titre : "Pulse1",
          auteur : "Pink Floyd",
          prix : 100,
          img : "https://fr.wikipedia.org/wiki/Pink_Floyd",
          dateDeSortie : new Date(1973,3,1),
          qte : 0,
          estRupture : false
        }
      ]
  }
}
