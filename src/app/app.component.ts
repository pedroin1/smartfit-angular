import { Component, DestroyRef, signal } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { FormComponent } from './components/form/form.component';
import { CardsListComponent } from './components/cards-list/cards-list.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { LocationsService } from './services/locations.service';
import { CaptionComponent } from './components/caption/caption.component';
import { ILocation } from './types/location';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    CardsListComponent,
    HeaderComponent,
    FooterComponent,
    FormComponent,
    CaptionComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  showListLocation = signal<boolean>(false);
  locationsList = signal<ILocation[]>([]);

  constructor(
    private locationsService: LocationsService,
    private destroyRef: DestroyRef
  ) {}

  onSubmitFormLocation() {
    this.locationsService.filteredLocations$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((filteredLocations) =>
        this.locationsList.set(filteredLocations)
      );
    this.showListLocation.set(true);
  }

  onClearLocationList() {
    this.locationsList.set([]);
    this.showListLocation.set(false);
  }
}
