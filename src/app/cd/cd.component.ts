import { Component, Input, OnInit } from '@angular/core';
import { cd } from '../models/cd.models';
import { CdsService } from '../services/cds.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cd',
  templateUrl: './cd.component.html',
  styleUrl: './cd.component.scss'
})
export class CDComponent implements OnInit{
  @Input() Cd!: cd;
  theCd!: cd;
  idCd!: string;

  constructor(private cdService : CdsService, private route: ActivatedRoute) { }

  onAddCD(){
    this.theCd.qte += 1;
  }
  

  ngOnInit(): void {
    this.idCd = this.route.snapshot.params["id"];
    if (this.idCd !== undefined) {
      this.cdService.getCDById(+this.idCd).subscribe(cd => {this.theCd = cd});
    } else {
      this.theCd = this.Cd;
    }
  }

}
