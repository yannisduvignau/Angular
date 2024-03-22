export class cd{
    id!:number;
    titre!:string;
    auteur!:string;
    prix!:number;
    img!:string;
    dateDeSortie!:Date;
    qte!:number;
    estRupture?:boolean;

    constructor(id:number,titre:string,auteur:string,prix:number,img:string,dateDeSortie:Date,qte:number,estRupture:boolean){
        this.id = id;
        this.titre = titre;
        this.auteur = auteur;
        this.prix = prix;
        this.img = img;
        this.dateDeSortie = dateDeSortie;
        this.qte = qte;
        this.estRupture = estRupture;
    }
}