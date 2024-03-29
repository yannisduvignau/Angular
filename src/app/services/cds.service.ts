import { Injectable } from '@angular/core';
import { cd } from '../models/cd.models';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CdsService {

  constructor(private http: HttpClient) { }

  getCDs(): Observable<cd[]> {
    return this.http.get<cd[]>('http://localhost:3000/CD');
  }

  getCDById(id:number):Observable<cd>{
    return this.http.get<cd>('http://localhost:3000/CD/'+id);
  }

  addCD(nouvCd:cd):Observable<cd>{
    return this.getCDs().pipe(
      switchMap(cds =>
      {
      let maxId = 0;
      cds.forEach (cd => { maxId = (cd.id > maxId ? cd.id : maxId); } );
      nouvCd.id = maxId+1;
      return this.http.post<cd>('http://localhost:3000/CD', nouvCd);
      }
     ));
  }
}
