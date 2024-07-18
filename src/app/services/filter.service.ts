import { Injectable, OnInit } from '@angular/core';
import {
  HORARIOS_DIA,
  ILocation,
  TypesMomentoDia,
} from '../types/location.types';
import { capitalize, convert_today } from '../utils/Utils';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  today: string = capitalize(
    new Date().toLocaleDateString('pt-BR', {
      weekday: 'short',
    })
  );

  constructor() {}

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

        if (formatedCloseHour >= openHour && formatedOpenHour <= closeHour) {
          return true;
        } else return false;
      }
    }
    return false;
  }

  public filter(results: ILocation[], showClosedUnits: boolean, hour: string) {
    let intermediateResults = results;

    if (!showClosedUnits) {
      intermediateResults = results.filter((data) => data.opened === true);
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
