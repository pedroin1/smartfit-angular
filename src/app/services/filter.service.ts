import { DestroyRef, Injectable, signal } from '@angular/core';
import { capitalize, convert_today } from '../utils/Utils';
import { LocationsService } from './locations.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ILocation } from '../types/location';
import { TypesMomentoDia } from '../types/masks';
import { HORARIOS_DIA } from '../constants/hours-of-day';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  private today: string = capitalize(
    new Date().toLocaleDateString('pt-BR', {
      weekday: 'short',
    })
  );

  private allLocationsResult = signal<ILocation[]>([]);

  constructor(
    private destroyRef: DestroyRef,
    private locationService: LocationsService
  ) {
    this.getAllLocationsResult();
  }

  private getAllLocationsResult() {
    this.locationService.allLocations$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((allLocations) => this.allLocationsResult.set(allLocations));
  }

  private filterBySchedule(
    dataLocation: ILocation,
    openHour: number,
    closeHour: number
  ) {
    if (!dataLocation.schedules) return true;

    for (let i = 0; i < dataLocation.schedules.length; i++) {
      let scheduleHour = dataLocation.schedules[i].hour;
      let scheduleWeekDay = dataLocation.schedules[i].weekdays;

      if (
        scheduleHour !== 'Fechada' &&
        scheduleWeekDay === convert_today(this.today)
      ) {
        let [locationOpenHour, locationCloseHour] = scheduleHour.split(' às ');

        let formatedOpenHour = Number(locationOpenHour.replace('h', ''));
        let formatedCloseHour = Number(locationCloseHour.replace('h', ''));

        if (formatedOpenHour >= openHour && formatedCloseHour <= closeHour) {
          return true;
        } else return false;
      }
    }
    return false;
  }

  public filter(showClosedUnits: boolean, hour: string) {
    let intermediateResults = this.allLocationsResult();

    if (!showClosedUnits) {
      intermediateResults = this.allLocationsResult().filter(
        (data) => data.opened === true
      );
    }

    if (hour !== '') {
      const OPEN_HOUR = Number(HORARIOS_DIA[hour as TypesMomentoDia].inicio);
      const CLOSE_HOUR = Number(HORARIOS_DIA[hour as TypesMomentoDia].fim);

      return intermediateResults.filter((data) =>
        this.filterBySchedule(data, OPEN_HOUR, CLOSE_HOUR)
      );
    } else {
      return intermediateResults;
    }
  }
}
