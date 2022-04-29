import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';
import { Cafe } from './cafe';

@Injectable({
  providedIn: 'root'
})
export class CafeService {

  private dataUrl = 'https://gist.githubusercontent.com/josejbocanegra/e9d24db370ce95b75555f7d1f8691805/raw/8a26ac2bca4183dc88545e14c45851d698911358/202212_MISW4104_Grupo3.json'
  cafes: Cafe[] = [];
  constructor(private httpClient: HttpClient) {
  }

  getCafes(): Observable<Cafe[]> {
    if (this.cafes.length == 0) {
      return this.httpClient.get<Cafe[]>(this.dataUrl).pipe(
          map((cafes: Cafe[]) => {
            this.cafes = cafes;
            return cafes;
          }))
    } else {
      return of(this.cafes);
    }
  }
}
