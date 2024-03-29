import { Component, OnInit } from '@angular/core';
import { CdsService } from '../services/cds.service';
import { cd } from '../models/cd.models';

@Component({
  selector: 'app-list-cd',
  templateUrl: './list-cd.component.html',
  styleUrl: './list-cd.component.scss'
})
export class ListCDComponent implements OnInit{

  listecd! : cd[];

  constructor(private myCDsService : CdsService) { }

  ngOnInit(): void {
    this.listecd = this.myCDsService.getCDs();
  }
  /* ngOnInit(): void {
      this.listecd = [
        {
          id : 1,
          titre : "The DarkSide of the Moon",
          auteur : "Pink Floyd",
          prix : 10,
          img : "https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcT9kry1myZTi2dMJ7OtgJjmdT__lImpI-pJ9mdq42Cz8HhIet_ro_Obp6q4xbksBbpT",
          dateDeSortie : new Date(1973,3,1),
          qte : 1,
          estRupture : false
        },
        {
          id : 2,
          titre : "Pulse",
          auteur : "Pink Floyd",
          prix : 10,
          img : "https://m.media-amazon.com/images/I/817rTivlh2L._UF1000,1000_QL80_.jpg",
          dateDeSortie : new Date(1973,3,1),
          qte : 2,
          estRupture : true
        },
        {
          id : 3,
          titre : "Pulse1",
          auteur : "Pink Floyd",
          prix : 100,
          img : "https://upload.wikimedia.org/wikipedia/en/thumb/d/d6/Pink_Floyd_-_all_members.jpg/250px-Pink_Floyd_-_all_members.jpg",
          dateDeSortie : new Date(1973,3,1),
          qte : 0,
          estRupture : false
        }
      ]
  } */
}
