import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  ViewChild
} from '@angular/core';
import {SpeakerCardComponent} from "../speaker-card/speaker-card.component";
import {SwiperContainer} from "swiper/element";


@Component({
  selector: 'app-speakers-swiper',
  standalone: true,
  imports: [
    SpeakerCardComponent
  ],
  templateUrl: './speakers-swiper.component.html',
  styleUrl: './speakers-swiper.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SpeakersSwiperComponent implements AfterViewInit  {
  @ViewChild('swiper1') swiperEl!: ElementRef<SwiperContainer>;

  ngAfterViewInit() {
    const swiperParams = {
      breakpoints: {
        1024: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 1,
        },
        0: {
          slidesPerView: 1
        },
      },
    };

    Object.assign(this.swiperEl.nativeElement, swiperParams);
    this.swiperEl.nativeElement.initialize();
  }

  prevSlide() {
    this.swiperEl.nativeElement.swiper.slidePrev();
  }

  nextSlide() {
    this.swiperEl.nativeElement.swiper.slideNext();
  }



}
