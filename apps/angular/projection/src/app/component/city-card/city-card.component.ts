import { Component, OnInit } from '@angular/core';
import { CardType } from '../../model/card.model';
import { CardComponent } from '../../ui/card/card.component';
import { City } from '../../model/city.model';
import { ListItemComponent } from '../../ui/list-item/list-item.component';
import { CityStore } from '../../data-access/city.store';
import {
  FakeHttpService,
  randomCity,
} from '../../data-access/fake-http.service';

@Component({
  selector: 'app-city-card',
  template: `<app-card
    [list]="cities"
    class="bg-light-yellow"
    (add)="addCity()">
    <img src="assets/img/city.png" width="200px" />
    <ng-template #rowRef let-city>
      <app-list-item (deleteItem)="deleteCity(city.id)">
        {{ city.name }}
      </app-list-item>
    </ng-template>
  </app-card>`,
  styles: [
    `
      .bg-light-yellow {
        background-color: #efefa3;
      }
    `,
  ],
  standalone: true,
  imports: [CardComponent, ListItemComponent],
})
export class CityCardComponent implements OnInit {
  cities: City[] = [];
  constructor(
    private http: FakeHttpService,
    private store: CityStore,
  ) {}

  ngOnInit(): void {
    this.http.fetchCities$.subscribe((c) => this.store.addAll(c));

    this.store.cities$.subscribe((c) => (this.cities = c));
  }

  addCity() {
    this.store.addOne(randomCity());
  }

  deleteCity(id: number) {
    this.store.deleteOne(id);
  }
}
