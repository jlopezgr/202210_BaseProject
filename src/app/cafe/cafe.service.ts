import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';
import { Cafe } from './cafe';

@Injectable({
  providedIn: 'root'
})
export class CafeService {

  cafes: Cafe[] = [];
  constructor(private httpClient: HttpClient) {
  }

  getCafes(): Observable<Cafe[]> {
    if (this.cafes.length == 0) {
      return this.httpClient.get<Cafe[]>('assets/data.json').pipe(
          map((cafes: Cafe[]) => {
            this.cafes = cafes;
            return cafes;
          }))
    } else {
      return of(this.cafes);
    }
  }
}
