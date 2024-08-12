import {AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, OnInit, ViewChild} from '@angular/core';
import {SwiperContainer} from "swiper/element";
import {SpeakerCardComponent} from "../speaker-card/speaker-card.component";


@Component({
  selector: 'app-team-swiper',
  standalone: true,
  imports: [
    SpeakerCardComponent
  ],
  templateUrl: './team-swiper.component.html',
  styleUrl: './team-swiper.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class TeamSwiperComponent  implements AfterViewInit {
  @ViewChild('swiper2') swiperEl!: ElementRef<SwiperContainer>;

  ngAfterViewInit() {
    const swiperParams = {
      breakpoints: {
        1024: {
          slidesPerView: 3,
          spaceBetween: 25,
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
