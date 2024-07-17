import { Component, Input } from '@angular/core';
import {
  ILocation,
  TypeFountain,
  TypeLockerRoom,
  TypeMask,
  TypeTowel,
} from '../../types/location.types';
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

  maskInfo(statusMask: TypeMask) {
    if (statusMask === 'required') {
      return '../../../assets/images/required-mask.png';
    } else return '../../../assets/images/recommended-mask.png';
  }

  towelInfo(statusTowel: TypeTowel) {
    if (statusTowel === 'required') {
      return '../../../assets/images/required-towel.png';
    } else return '../../../assets/images/recommended-mask.png';
  }

  fountainInfo(statusFountain: TypeFountain) {
    if (statusFountain === 'partial') {
      return '../../../assets/images/partial-fountain.png';
    } else return '../../../assets/images/forbidden-fountain.png';
  }

  lockerromInfo(statusLocker: TypeLockerRoom) {
    if (statusLocker === 'allowed') {
      return '../../../assets/images/required-lockerroom.png';
    } else if (statusLocker === 'partial') {
      return '../../../assets/images/partial-lockerroom.png';
    } else return '../../../assets/images/forbidden-lockerroom.png';
  }

  constructor() {}
}
