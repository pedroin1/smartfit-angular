import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ILocation } from '../types/location';
import { ILocationResponse } from '../types/location-response';

@Injectable({ providedIn: 'root' })
export class LocationsService {
  private _allLocations$: BehaviorSubject<ILocation[]> = new BehaviorSubject<
    ILocation[]
  >([]);

  public readonly allLocations$: Observable<ILocation[]> =
    this._allLocations$.asObservable();

  private _filteredLocations$: BehaviorSubject<ILocation[]> =
    new BehaviorSubject<ILocation[]>([]);

  public readonly filteredLocations$ = this._filteredLocations$.asObservable();

  constructor(private httpClient: HttpClient) {
    this.httpClient
      .get<ILocationResponse>(
        'https://test-frontend-developer.s3.amazonaws.com/data/locations.json'
      )
      .subscribe((data: ILocationResponse) => {
        this._allLocations$.next(data.locations);
        this._filteredLocations$.next(data.locations);
      });
  }

  public filterLocations(value: ILocation[]) {
    this._filteredLocations$.next(value);
  }
}
