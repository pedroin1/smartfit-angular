import { FormControl } from '@angular/forms';

export type FilterFormType = {
  hour: FormControl<string>;
  showClosedUnits: FormControl<boolean>;
};

export type FilterFormTypeHelper = keyof FilterFormType;
