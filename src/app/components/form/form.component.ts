import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LocationsService } from '../../services/locations.service';
import { ILocation } from '../../types/location.types';

import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  providers: [LocationsService, FilterService],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent implements OnInit {
  protected results: ILocation[] = [];
  protected filteredResults: ILocation[] = [];
  protected formGroup!: FormGroup;

  constructor(
    private locationsService: LocationsService,
    private filterService: FilterService
  ) {}

  protected onSubmitForm(): void {
    let { showClosedUnits, hour } = this.formGroup.value;
    this.filteredResults = this.filterService.filter(
      this.results,
      showClosedUnits,
      hour
    );
  }

  protected onCleanForm(): void {
    this.formGroup.reset();
    this.filteredResults = this.results;
  }

  ngOnInit(): void {
    this.locationsService.listAllLocations().subscribe((data) => {
      this.results = data.locations;
      this.filteredResults = data.locations;
    });

    this.formGroup = new FormGroup({
      hour: new FormControl(''),
      showClosedUnits: new FormControl(true),
    });
  }
}
