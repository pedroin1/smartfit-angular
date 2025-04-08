import { FormControl, FormGroup } from '@angular/forms';
import { FilterFormType } from '../types/form';

export const createForm = (): FormGroup<FilterFormType> => {
  return new FormGroup({
    hour: new FormControl<string>('', { nonNullable: true }),
    showClosedUnits: new FormControl<boolean>(true, { nonNullable: true }),
  });
};
