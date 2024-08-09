import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-photos-section',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './photos-section.component.html',
  styleUrl: './photos-section.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PhotosSectionComponent {

}
