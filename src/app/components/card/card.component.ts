import { Component, Input } from '@angular/core';
import {
  ILocation,
  TypeFountain,
  TypeLockerRoom,
  TypeMask,
  TypeTowel,
} from '../../types/location.types';
import { CommonModule } from '@angular/common';
import { stat } from 'node:fs';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  private urlImageFolder: string = '../../../assets/images/';

  @Input({ required: true }) location!: ILocation;

  constructor() {}

  maskInfo(statusMask: TypeMask) {
    switch (statusMask) {
      case 'required':
        return this.urlImageFolder + 'required-mask.png';
      case 'recommended':
        return this.urlImageFolder + 'recommended-mask.png';
    }
  }

  towelInfo(statusTowel: TypeTowel) {
    switch (statusTowel) {
      case 'required':
        return this.urlImageFolder + 'required-towel.png';
      case 'recommended':
        return this.urlImageFolder + 'recommended-mask.png';
    }
  }

  fountainInfo(statusFountain: TypeFountain) {
    switch (statusFountain) {
      case 'partial':
        return this.urlImageFolder + 'partial-fountain.png';
      case 'not_allowed':
        return this.urlImageFolder + 'forbidden-fountain.png';
    }
  }

  lockerromInfo(statusLocker: TypeLockerRoom) {
    switch (statusLocker) {
      case 'allowed':
        return this.urlImageFolder + 'required-lockerroom.png';
      case 'partial':
        return this.urlImageFolder + 'partial-lockerroom.png';
      case 'closed':
        return this.urlImageFolder + 'forbidden-lockerroom.png';
    }
  }
}
