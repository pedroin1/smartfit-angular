import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ILocation, ILocationResponse } from '../types/location.types';

@Injectable({
  providedIn: 'root',
})
export class LocationsService {
  private allLocationsSubject: BehaviorSubject<ILocation[]> =
    new BehaviorSubject<ILocation[]>([]);

  //Ler sobre o padrão de Observable em angular.
  private allLocations: Observable<ILocation[]> =
    this.allLocationsSubject.asObservable();

  private filteredLocations: ILocation[] = [];

  constructor(private httpClient: HttpClient) {
    this.httpClient
      .get<ILocationResponse>(
        'https://test-frontend-developer.s3.amazonaws.com/data/locations.json'
      )
      .subscribe((data) => {
        this.allLocationsSubject.next(data.locations);
        this.filteredLocations = data.locations;
      });
  }

  public listAllLocations(): Observable<ILocation[]> {
    return this.allLocations;
  }

  public getFilteredLocations(): ILocation[] {
    return this.filteredLocations;
  }

  public setfilteredLocations(value: ILocation[]) {
    this.filteredLocations = value;
  }
}
