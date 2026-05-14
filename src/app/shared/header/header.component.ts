import { Component, signal, inject, PLATFORM_ID, HostListener } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <header
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      [class]="isScrolled() ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-md'"
      role="banner"
    >
      <!-- Announcement Ticker -->
      <div class="bg-primary text-primary text-sm py-1.5 overflow-hidden" *ngIf="!isScrolled()">
        <div class="animate-marquee whitespace-nowrap">
          <span class="mx-8">📢 Admissions Open for 2026-27 Session — Apply Now!</span>
          <span class="mx-8">🏆 Our students secured top positions in National Science Olympiad!</span>
          <span class="mx-8">📅 Annual Sports Day on June 15, 2026 — Register Today!</span>
          <span class="mx-8">📚 New Library Wing inaugurated with 10,000+ books</span>
        </div>
      </div>

      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div class="flex items-center justify-between h-16 md:h-20">
          <!-- Logo -->
          <a routerLink="/" class="flex items-center gap-3 group" aria-label="Greenfield International Academy Home">
            <div class="w-10 h-10 md:w-12 md:h-12 rounded-xl gradient-primary flex items-center justify-center text-white font-bold text-lg md:text-xl shadow-md group-hover:scale-105 transition-transform">
              G
            </div>
            <div class="hidden sm:block">
              <h1 class="text-lg md:text-xl font-bold text-primary font-heading leading-tight">Greenfield</h1>
              <p class="text-xs text-muted -mt-0.5">International Academy</p>
            </div>
          </a>

          <!-- Desktop Navigation -->
          <div class="hidden lg:flex items-center gap-1">
            @for (item of navItems; track item.path) {
              <a
                [routerLink]="item.path"
                routerLinkActive="text-primary bg-primary/5"
                [routerLinkActiveOptions]="{ exact: item.path === '/' }"
                class="px-3 py-2 text-sm font-medium text-dark-light rounded-lg hover:text-primary hover:bg-primary/5 transition-all duration-200"
              >
                {{ item.label }}
              </a>
            }
            <a
              routerLink="/admissions"
              class="ml-2 px-5 py-2.5 bg-accent text-primary text-sm font-semibold rounded-lg hover:bg-accent-dark transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Apply Now
            </a>
          </div>

          <!-- Mobile Menu Button -->
          <button
            class="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            (click)="toggleMobileMenu()"
            [attr.aria-expanded]="isMobileMenuOpen()"
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            <svg class="w-6 h-6 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              @if (isMobileMenuOpen()) {
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              } @else {
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              }
            </svg>
          </button>
        </div>

        <!-- Mobile Menu -->
        @if (isMobileMenuOpen()) {
          <div
            id="mobile-menu"
            class="lg:hidden pb-4 border-t border-gray-100 animate-fade-in"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div class="flex flex-col gap-1 pt-3">
              @for (item of navItems; track item.path) {
                <a
                  [routerLink]="item.path"
                  routerLinkActive="text-primary bg-primary/5 font-semibold"
                  [routerLinkActiveOptions]="{ exact: item.path === '/' }"
                  class="px-4 py-3 text-sm text-dark-light rounded-lg hover:text-primary hover:bg-primary/5 transition-all"
                  (click)="closeMobileMenu()"
                >
                  {{ item.label }}
                </a>
              }
              <a
                routerLink="/admissions"
                class="mx-4 mt-2 px-5 py-3 bg-accent text-white text-sm font-semibold rounded-lg text-center hover:bg-accent-dark transition-all"
                (click)="closeMobileMenu()"
              >
                Apply Now
              </a>
            </div>
          </div>
        }
      </nav>
    </header>

    <!-- Spacer for fixed header -->
    <div [class]="isScrolled() ? 'h-16 md:h-20' : 'h-[calc(2.5rem+4rem)] md:h-[calc(2.5rem+5rem)]'"></div>
  `
})
export class HeaderComponent {
  private readonly platformId = inject(PLATFORM_ID);

  isScrolled = signal(false);
  isMobileMenuOpen = signal(false);

  navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Academics', path: '/academics' },
    { label: 'Faculty', path: '/faculty' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Events', path: '/events' },
    { label: 'Notices', path: '/notices' },
    { label: 'Contact', path: '/contact' }
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.isScrolled.set(window.scrollY > 50);
    }
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update(v => !v);
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }
}
