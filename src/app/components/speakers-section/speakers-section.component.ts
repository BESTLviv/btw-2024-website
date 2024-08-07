import { Component } from '@angular/core';
import {SpeakersSwiperComponent} from "../speakers-swiper/speakers-swiper.component";

@Component({
  selector: 'app-speakers-section',
  standalone: true,
  imports: [
    SpeakersSwiperComponent,
  ],
  templateUrl: './speakers-section.component.html',
  styleUrl: './speakers-section.component.scss'
})
export class SpeakersSectionComponent {

}
