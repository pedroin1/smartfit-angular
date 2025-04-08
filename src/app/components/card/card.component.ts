import { Component, input } from '@angular/core';
import {
  TypeFountain,
  TypeLockerRoom,
  TypeMask,
  TypeTowel,
} from '../../types/masks';
import { CommonModule } from '@angular/common';
import { ILocation } from '../../types/location';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  public location = input.required<ILocation>();

  private URL_IMAGE_FOLDER: string = '../../../assets/images/';

  constructor() {}

  protected maskInfo(statusMask: TypeMask) {
    switch (statusMask) {
      case 'required':
        return this.URL_IMAGE_FOLDER + 'required-mask.png';
      case 'recommended':
        return this.URL_IMAGE_FOLDER + 'recommended-mask.png';
    }
  }

  protected towelInfo(statusTowel: TypeTowel) {
    switch (statusTowel) {
      case 'required':
        return this.URL_IMAGE_FOLDER + 'required-towel.png';
      case 'recommended':
        return this.URL_IMAGE_FOLDER + 'recommended-mask.png';
    }
  }

  protected fountainInfo(statusFountain: TypeFountain) {
    switch (statusFountain) {
      case 'partial':
        return this.URL_IMAGE_FOLDER + 'partial-fountain.png';
      case 'not_allowed':
        return this.URL_IMAGE_FOLDER + 'forbidden-fountain.png';
    }
  }

  protected lockerromInfo(statusLocker: TypeLockerRoom) {
    switch (statusLocker) {
      case 'allowed':
        return this.URL_IMAGE_FOLDER + 'required-lockerroom.png';
      case 'partial':
        return this.URL_IMAGE_FOLDER + 'partial-lockerroom.png';
      case 'closed':
        return this.URL_IMAGE_FOLDER + 'forbidden-lockerroom.png';
    }
  }
}
