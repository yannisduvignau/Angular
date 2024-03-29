import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cd } from '../models/cd.models';
import { CdsService } from '../services/cds.service';
import { ActivatedRoute,Router } from '@angular/router';



@Component({
  selector: 'app-new-cd',
  templateUrl: './new-cd.component.html',
  styleUrl: './new-cd.component.scss'
})
export class NewCDComponent implements OnInit{

  formulaire!: FormGroup;
  currentCD!:cd;
  imageRegex!:RegExp;

  constructor(private formBuilder:FormBuilder,private cdService : CdsService, private router: Router){ }
  ngOnInit():void{
    this.imageRegex = RegExp('https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg|webp)$')

    this.formulaire = this.formBuilder.group({
      titre: [null,[Validators.required, Validators.minLength(1)]],
      auteur: [null,[Validators.required, Validators.minLength(1)]],
      img: [null,[Validators.required, Validators.pattern(this.imageRegex)]],
      prix: [null,[Validators.required, Validators.min(0)]],
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
  
  addNewCD():void{
    let newCD: cd ={
      id:0,
      titre: this.formulaire.get('titre')?.value,
      auteur: this.formulaire.get('auteur')?.value,
      prix: this.formulaire.get('prix')?.value,
      img: this.formulaire.get('img')?.value,
      dateDeSortie: this.formulaire.get('dateDeSortie')?.value,
      qte: this.formulaire.get('qte')?.value,
      estRupture: false
    }

    this.cdService.addCD(newCD).subscribe({
      next : cd =>
      {
        this.router.navigateByUrl('/catalog');
      },
      error : err =>
      {
        console.log('Observable ajout CD a émis une erreur :'+err);
        alert("Désolé le CD n'a pu être ajouté")
      }
    });
    
  }
}
