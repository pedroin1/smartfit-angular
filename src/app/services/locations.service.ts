import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILocationResponse } from '../types/location.types';

@Injectable({
  providedIn: 'root',
})
export class LocationsService {
  constructor(private httpClient: HttpClient) {}

  public listAllLocations(): Observable<ILocationResponse> {
    return this.httpClient.get<ILocationResponse>(
      'https://test-frontend-developer.s3.amazonaws.com/data/locations.json'
    );
  }
}
