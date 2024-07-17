import { Component, Input } from '@angular/core';
import { ILocation } from '../../types/location.types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input({ required: true }) location!: ILocation;

  constructor() {}
}
