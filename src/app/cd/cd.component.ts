import { Component, Input } from '@angular/core';
import { cd } from '../models/cd.models';

@Component({
  selector: 'app-cd',
  templateUrl: './cd.component.html',
  styleUrl: './cd.component.scss'
})
export class CDComponent {
  @Input() Cd!: cd;

  onAddCD(){
    this.Cd.qte += 1;
  }

}
