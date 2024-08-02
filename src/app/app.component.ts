import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./components/header/header.component";
import {SomecComponent} from "./components/somec/somec.component";
import {ScrollProgressComponent} from "./components/scroll-progress/scroll-progress.component";
import {ScrollToTopComponent} from "./components/scroll-to-top/scroll-to-top.component";
import {StarBackgroundComponent} from "./components/star-background/star-background.component";
import {HeroComponent} from "./components/hero/hero.component";
import {Somec2Component} from "./components/somec2/somec2.component";
import {CustomCursorComponent} from "./components/custom-cursor/custom-cursor.component";
import {CursorTrailComponent} from "./components/cursor-trail/cursor-trail.component";
import {MarqueeComponent} from "./components/marquee/marquee.component";
import {FooterComponent} from "./components/footer/footer.component";
import {TeamSwiperComponent} from "./components/team-swiper/team-swiper.component";
import {TestSwiperComponent} from "./components/test-swiper/test-swiper.component";
import {PlanetComponent} from "./components/planet/planet.component";
import {SpeakersSwiperComponent} from "./components/speakers-swiper/speakers-swiper.component";
import {SpeakerComponent} from "./components/speaker/speaker.component";
import {SpeakerCardComponent} from "./components/speaker-card/speaker-card.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    HeaderComponent,
    SomecComponent,
    ScrollProgressComponent,
    ScrollToTopComponent,
    StarBackgroundComponent,
    HeroComponent,
    Somec2Component,
    CustomCursorComponent,
    CursorTrailComponent,
    MarqueeComponent,
    FooterComponent, TeamSwiperComponent, TestSwiperComponent, PlanetComponent, SpeakersSwiperComponent, SpeakerComponent, SpeakerCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
