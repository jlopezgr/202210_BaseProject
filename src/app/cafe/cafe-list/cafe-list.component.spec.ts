import { ComponentFixture, TestBed } from '@angular/core/testing';
import { faker } from '@faker-js/faker';
import { Observable, of } from 'rxjs';
import { Cafe } from '../cafe';
import { CafeService } from '../cafe.service';

import { CafeListComponent } from './cafe-list.component';

class MockCafeService {

  cafes: Cafe[] = []
  constructor(num?: number) {
    num = num || 3;
    for (let i = 0; i < num; i++) {
      this.cafes.push(new Cafe(
        faker.datatype.number({ min: 1, max: 1000 }),
        faker.commerce.productName(),
        faker.commerce.productName(),
        faker.address.state(),
        faker.word.adjective(),
        faker.datatype.number({ min: 0, max: 1000 }),
        faker.image.imageUrl(),
      ));
    }
  }

  getCafes(): Observable<Cafe[]> {
    return of(this.cafes);
  }
}

describe('CafeListComponent', () => {
  let component: CafeListComponent;
  let fixture: ComponentFixture<CafeListComponent>;
  let stubCafeService: MockCafeService = new MockCafeService(3);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CafeListComponent],
      providers: [{ provide: CafeService, useValue: stubCafeService }]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a table of cafes', () => {
    // Check the headers
    let tableHeaders = fixture.nativeElement.querySelectorAll('#coffee-table thead tr td');
    expect(tableHeaders.length).toBe(4);
    expect(tableHeaders[0].textContent).toBe('#');
    expect(tableHeaders[1].textContent).toBe('Nombre');
    expect(tableHeaders[2].textContent).toBe('Tipo');
    expect(tableHeaders[3].textContent).toBe('Región');

    // Check the rows
    let cafesElements = fixture.nativeElement.querySelectorAll('#coffee-table tbody tr');
    expect(cafesElements.length).toBe(component.cafes.length);
    for (let i = 0; i < cafesElements.length; i++) {
      let cafe = cafesElements[i];
      expect(cafe.children[0].textContent).toContain(stubCafeService.cafes[i].id);
      expect(cafe.children[1].textContent).toContain(stubCafeService.cafes[i].nombre);
      expect(cafe.children[2].textContent).toContain(stubCafeService.cafes[i].tipo);
      expect(cafe.children[3].textContent).toContain(stubCafeService.cafes[i].region);
    }
  });
});
