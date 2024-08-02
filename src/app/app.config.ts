import {ApplicationConfig, CUSTOM_ELEMENTS_SCHEMA, provideZoneChangeDetection} from '@angular/core';
import { provideRouter } from '@angular/router';
import { register } from 'swiper/element/bundle';


import { routes } from './app.routes';
register();
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes)],
};
