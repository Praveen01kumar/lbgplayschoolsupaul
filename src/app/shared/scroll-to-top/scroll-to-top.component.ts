import { Component, signal, inject, PLATFORM_ID, HostListener } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ScrollService } from '../../core/services/scroll.service';

@Component({
  selector: 'app-scroll-to-top',
  standalone: true,
  template: `
    @if (isVisible()) {
      <button
        (click)="scrollToTop()"
        class="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full gradient-primary text-white shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center animate-fade-in"
        aria-label="Scroll to top"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
        </svg>
      </button>
    }
  `
})
export class ScrollToTopComponent {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly scrollService = inject(ScrollService);

  isVisible = signal(false);

  @HostListener('window:scroll')
  onScroll(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.isVisible.set(window.scrollY > 400);
    }
  }

  scrollToTop(): void {
    this.scrollService.scrollToTop();
  }
}
