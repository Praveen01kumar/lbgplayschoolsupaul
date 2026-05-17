import { Component, signal, inject, PLATFORM_ID, HostListener } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HEADER_CONTENT } from '../constants';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <header [attr.aria-label]="content.HEADER_ARIA_LABEL" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300" [class]="isScrolled() ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-md'" role="banner">
      <!-- Announcement Ticker -->
      <div class="bg-[#eef4ff] text-primary text-sm py-1.5 overflow-hidden" *ngIf="!isScrolled()">
        <div class="animate-marquee whitespace-nowrap">
          @for (item of content.ANNOUNCEMENTS; track $index; let i = $index) {
            <span class="mx-8">{{item}}</span>
          }
        </div>
      </div>

      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" [attr.aria-label]="content.BRAND.ARIA_LABEL">
        <div class="flex items-center justify-between h-16 md:h-20">
          <!-- Logo -->
          <a routerLink="/" class="flex items-center gap-3 group" [attr.aria-label]="content.BRAND.HOME_ARIA_LABEL">
            <div class="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
              <img src="assets/image/logo.webp" class="rounded-xl" [alt]="content.BRAND.LOGO_ALT">
            </div>
            <div class="hidden sm:block">
              <h1 class="text-lg md:text-xl font-bold text-primary font-heading leading-tight">{{content.BRAND.NAME}}</h1>
              <p class="text-xs text-muted -mt-0.5">{{content.BRAND.TAGLINE}}</p>
            </div>
          </a>

          <!-- Desktop Navigation -->
          <div class="hidden lg:flex items-center gap-1">
            @for (item of content.LINKS; track $index; let i = $index) {
              <a [attr.aria-label]="item.ARIA_LABEL" [routerLink]="item.PATH" routerLinkActive="text-primary bg-primary/5" [routerLinkActiveOptions]="{ exact: item.PATH === '/' }"
                class="px-3 py-2 text-sm font-semibold text-dark-light rounded-lg hover:text-red-600 hover:bg-red-500/10 transition-all duration-200 hover:shadow-md">
                {{ item.LABEL }}
              </a>
            }
            <a [routerLink]="content.APPLY_BUTTON.PATH" [attr.aria-label]="content.APPLY_BUTTON.ARIA_LABEL"
              class="ml-2 px-5 py-2.5 bg-red-500/10 text-red-600 text-primary text-sm font-semibold rounded-lg hover:bg-accent-dark transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5">
              {{content.APPLY_BUTTON.LABEL}}
            </a>
          </div>

          <!-- Mobile Menu Button -->
          <button class="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            (click)="toggleMobileMenu()" [attr.aria-expanded]="isMobileMenuOpen()" [attr.aria-label]="content.MOBILE_MENU.ARIA_LABEL">
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
          <div id="mobile-menu"
            class="lg:hidden pb-4 border-t border-gray-100 animate-fade-in"
            role="navigation" [attr.aria-label]="content.MOBILE_MENU.MENU_ARIA_LABEL">
            <div class="flex flex-col gap-1 pt-3">
              @for (item of content.LINKS; track $index; let i = $index) {
                <a [routerLink]="item.PATH" routerLinkActive="text-primary bg-primary/5 font-semibold"
                  [routerLinkActiveOptions]="{ exact: item.PATH === '/' }"
                  class="px-4 py-3 text-sm text-dark-light rounded-lg hover:text-primary hover:bg-primary/5 transition-all"
                  (click)="closeMobileMenu()">
                  {{ item.LABEL }}
                </a>
              }
              <a [routerLink]="content.APPLY_BUTTON.PATH" [attr.aria-label]="content.APPLY_BUTTON.ARIA_LABEL"
                class="mx-4 mt-2 px-5 py-3 bg-accent text-white text-sm font-semibold rounded-lg text-center hover:bg-accent-dark transition-all"
                (click)="closeMobileMenu()">
                {{content.APPLY_BUTTON.LABEL}}
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
  readonly content = HEADER_CONTENT;

  isScrolled = signal(false);
  isMobileMenuOpen = signal(false);

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
