export class cd{
    id!:number;
    titre!:string;
    auteur!:string;
    prix!:number;
    mail!:string;
    dateDeSortie!:Date;
    qte!:number;
    estRupture!:boolean;

    constructor(id:number,titre:string,auteur:string,prix:number,mail:string,dateDeSortie:Date,qte:number,estRupture:boolean){
        this.id = id;
        this.titre = titre;
        this.auteur = auteur;
        this.prix = prix;
        this.mail = mail;
        this.dateDeSortie = dateDeSortie;
        this.qte = qte;
        this.estRupture = estRupture;

    }
}