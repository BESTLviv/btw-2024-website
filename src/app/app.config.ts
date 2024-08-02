import {ApplicationConfig, CUSTOM_ELEMENTS_SCHEMA, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';
import {routes} from './app.routes';
import {register} from 'swiper/element/bundle';

register();
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes)],
};
