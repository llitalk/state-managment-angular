import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HeaderComponent } from './app/header/header.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent],
  standalone: true,
  template: `
 <app-header></app-header>
  `,
})
export class App {
  
}

bootstrapApplication(App, {
  providers: [provideAnimationsAsync()]
});
