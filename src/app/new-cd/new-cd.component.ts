import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cd } from '../models/cd.models';


@Component({
  selector: 'app-new-cd',
  templateUrl: './new-cd.component.html',
  styleUrl: './new-cd.component.scss'
})
export class NewCDComponent implements OnInit{

  formulaire!: FormGroup;
  currentCD!:cd;
  imageRegex!:RegExp;

  constructor(private formBuilder:FormBuilder){  }
  ngOnInit():void{
    this.imageRegex = RegExp('https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg|webp)$')

    this.formulaire = this.formBuilder.group({
      titre: [null,[Validators.required, Validators.minLength(6)]],
      auteur: [null,[Validators.required, Validators.minLength(6)]],
      prix: [null,[Validators.required, Validators.pattern(this.imageRegex)]],
      img: [null,[Validators.required, Validators.min(0)]],
      dateDeSortie: [null,[Validators.required, Validators.min(0)]],
      qte: [null,[Validators.required, Validators.min(0)]],
    },
    {updateOn:'blur'}
    );

    this.formulaire.valueChanges.subscribe((formValue) => {
      this.currentCD ={
        id:0,
        titre: formValue.titre,
        auteur: formValue.auteur,
        prix: formValue.prix,
        img: formValue.img,
        dateDeSortie: formValue.dateDeSortie,
        qte: formValue.qte,
        estRupture: false,
      }
    });
  }
  isEmpty(formValue: any): boolean {
    for (let key in formValue) {
        if (formValue[key] !== null && formValue[key] !== '') {
            return false;
        }
    }
    return true;
  }
  
}
