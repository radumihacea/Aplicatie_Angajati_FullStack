import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

// 1. Am adăugat importul pentru funcția HTTP
import { provideHttpClient } from '@angular/common/http'; 

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    
    // 2. Am activat clientul HTTP pentru toată aplicația
    provideHttpClient() 
  ]
};