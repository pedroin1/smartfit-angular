import { Component, output, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LocationsService } from '../../services/locations.service';

import { FilterService } from '../../services/filter.service';
import { createForm } from '../../constants/form';
import { ILocation } from '../../types/location';
import { FilterFormTypeHelper } from '../../types/form';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  protected filteredResults = signal<ILocation[]>([]);
  protected formGroup = createForm();

  public onSubmitFormLocationEvent = output();
  public onClearLocationListEvent = output();

  constructor(
    private locationsService: LocationsService,
    private filterService: FilterService
  ) {}

  protected onSubmitForm(): void {
    const hour = this.getControlValue('hour') as string;
    const showClosedUnits = this.getControlValue('showClosedUnits') as boolean;

    this.filteredResults.set(this.filterService.filter(showClosedUnits, hour));
    this.locationsService.filterLocations(this.filteredResults());
    this.onSubmitFormLocationEvent.emit();
  }

  protected onCleanForm(): void {
    this.formGroup.reset({ hour: '', showClosedUnits: true });
    this.filteredResults.set([]);
    this.onClearLocationListEvent.emit();
  }

  private getControlValue(controlName: FilterFormTypeHelper) {
    return this.formGroup.controls[controlName].value!;
  }
}
