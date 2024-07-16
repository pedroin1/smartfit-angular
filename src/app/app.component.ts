import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { FormComponent } from './components/form/form.component';
import { CardComponent } from './components/card/card.component';
import { CardsListComponent } from './components/cards-list/cards-list.component';
import { BehaviorSubject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ILocation } from './types/location.types';
import { LocationsService } from './services/locations.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CardsListComponent,
    HeaderComponent,
    FooterComponent,
    FormComponent,
    CardComponent,
    CommonModule,
  ],
  providers: [LocationsService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  showListLocation = new BehaviorSubject(false);
  locationsList: ILocation[] = [];

  constructor(private locationsService: LocationsService) {}

  onSubmitFormLocation() {
    this.locationsList = this.locationsService.getFilteredLocations();
    this.showListLocation.next(true);
  }
}
