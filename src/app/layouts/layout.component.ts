import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { ScrollToTopComponent } from '../shared/scroll-to-top/scroll-to-top.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, ScrollToTopComponent],
  template: `
    <app-header />
    <main id="main-content" role="main">
      <router-outlet />
    </main>
    <app-footer />
    <app-scroll-to-top />
  `
})
export class MainLayoutComponent {}
