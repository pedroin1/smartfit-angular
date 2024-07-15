import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent implements OnInit {
  results = [];
  formGroup!: FormGroup;

  constructor() {}

  onSubmitForm() {
    console.log(this.formGroup);
  }

  onCleanForm() {
    this.formGroup.reset();
    this.results = [];
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      hour: new FormControl(''),
      showCLosedUnits: new FormControl(false),
    });
  }
}
