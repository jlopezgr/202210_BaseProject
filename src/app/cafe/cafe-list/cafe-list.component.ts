import { Component, OnInit } from '@angular/core';
import { Cafe } from '../cafe';
import { CafeService } from '../cafe.service';

@Component({
  selector: 'app-cafe-list',
  templateUrl: './cafe-list.component.html',
  styleUrls: ['./cafe-list.component.css']
})
export class CafeListComponent implements OnInit {

  public cafes: Cafe[] = [];
  constructor(private cafeService: CafeService) { }

  ngOnInit(): void {
    console.log('Loading cafes...');
    this.cafeService.getCafes().subscribe(
      (cafes: Cafe[]) => {
        console.log('Cafes loaded', cafes);
        this.cafes = cafes;
      }
    );
  }

  countCafeType(type: string): number {
    return this.cafes.filter(cafe => cafe.tipo === type).length;
  }

}
