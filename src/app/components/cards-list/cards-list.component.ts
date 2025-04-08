import { Component, input } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { LocationsService } from '../../services/locations.service';
import { ILocation } from '../../types/location';

@Component({
  selector: 'app-cards-list',
  standalone: true,
  imports: [CardComponent],
  providers: [LocationsService],
  templateUrl: './cards-list.component.html',
  styleUrl: './cards-list.component.scss',
})
export class CardsListComponent {
  public locationsList = input<ILocation[]>([]);
}
