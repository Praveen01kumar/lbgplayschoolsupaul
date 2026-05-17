import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FOOTER_CONTENT } from '../constants';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="bg-dark bg-dark gradient-dark text-white" role="contentinfo" aria-label="Website Footer" [attr.aria-label]="content.BRAND.AREA_LABEL">
      <!-- Main Footer -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <!-- School Info -->
          <div>
            <div class="flex items-center gap-3 mb-5">
              <div class="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center text-white font-bold text-xl shadow-md">
               <img src="assets/image/logo.jpeg" class="rounded-xl" [alt]="content.BRAND.LOGO_ALT">
              </div>
              <div>
                <h3 class="text-xl font-bold font-heading">{{content.BRAND.NAME}}</h3> 
                <p class="text-sm text-muted-light -mt-0.5">{{content.BRAND.TAGLINE}}</p>
              </div>
            </div>
            <p class="text-gray-400 text-sm leading-relaxed mb-5">{{content.BRAND.DESCRIPTION}}</p>
            <!-- Social Media -->
            <div class="flex gap-3" [attr.aria-label]="content.SOCIAL.SOCIAL_ARIA_LABEL">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" [attr.aria-label]="content.SOCIAL.FACEBOOK"
                 class="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-primary-light transition-colors">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" [attr.aria-label]="content.SOCIAL.TWITTER"
                 class="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-primary-light transition-colors">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" [attr.aria-label]="content.SOCIAL.INSTAGRAM"
                 class="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-primary-light transition-colors">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" [attr.aria-label]="content.SOCIAL.YOUTUBE"
                 class="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-primary-light transition-colors">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>

          <!-- Quick Links -->
          <div>
            <h3 class="text-lg font-bold font-heading mb-5 text-accent">{{content.QUICK_LINKS.TITLE}}</h3>
            <ul class="space-y-3">
              <li><a [routerLink]="content.QUICK_LINKS.ABOUT.ROUTE" class="text-gray-400 hover:text-white text-sm transition-colors hover:pl-1 duration-200 block" [attr.aria-label]="content.QUICK_LINKS.ABOUT.ARIA_LABEL">{{content.QUICK_LINKS.ABOUT.LABEL}}</a></li>
              <li><a [routerLink]="content.QUICK_LINKS.ACADEMICS.ROUTE" class="text-gray-400 hover:text-white text-sm transition-colors hover:pl-1 duration-200 block" [attr.aria-label]="content.QUICK_LINKS.ACADEMICS.ARIA_LABEL">{{content.QUICK_LINKS.ACADEMICS.LABEL}}</a></li>
              <li><a [routerLink]="content.QUICK_LINKS.ADMISSIONS.ROUTE" class="text-gray-400 hover:text-white text-sm transition-colors hover:pl-1 duration-200 block" [attr.aria-label]="content.QUICK_LINKS.ADMISSIONS.ARIA_LABEL">{{content.QUICK_LINKS.ADMISSIONS.LABEL}}</a></li>
              <li><a [routerLink]="content.QUICK_LINKS.FACULTY.ROUTE" class="text-gray-400 hover:text-white text-sm transition-colors hover:pl-1 duration-200 block" [attr.aria-label]="content.QUICK_LINKS.FACULTY.ARIA_LABEL">{{content.QUICK_LINKS.FACULTY.LABEL}}</a></li>
              <li><a [routerLink]="content.QUICK_LINKS.GALLERY.ROUTE" class="text-gray-400 hover:text-white text-sm transition-colors hover:pl-1 duration-200 block" [attr.aria-label]="content.QUICK_LINKS.GALLERY.ARIA_LABEL">{{content.QUICK_LINKS.GALLERY.LABEL}}</a></li>
              <li><a [routerLink]="content.QUICK_LINKS.EVENTS.ROUTE" class="text-gray-400 hover:text-white text-sm transition-colors hover:pl-1 duration-200 block" [attr.aria-label]="content.QUICK_LINKS.EVENTS.ARIA_LABEL">{{content.QUICK_LINKS.EVENTS.LABEL}}</a></li>
              <li><a [routerLink]="content.QUICK_LINKS.NOTICES.ROUTE" class="text-gray-400 hover:text-white text-sm transition-colors hover:pl-1 duration-200 block" [attr.aria-label]="content.QUICK_LINKS.NOTICES.ARIA_LABEL">{{content.QUICK_LINKS.NOTICES.LABEL}}</a></li>
            </ul>
          </div>

          <!-- Contact Info -->
          <div>
            <h3 class="text-lg font-bold font-heading mb-5 text-accent">{{content.CONTACT.TITLE}}</h3>
            <ul class="space-y-4">
              <li class="flex gap-3 text-sm">
                <svg class="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span class="text-gray-400">{{content.CONTACT.ADDRESS}}</span>
              </li>
              <li class="flex gap-3 text-sm">
                <svg class="w-5 h-5 text-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <div class="text-gray-400">
                  <p>{{content.CONTACT.PHONE_1}}</p>
                  <p>{{content.CONTACT.PHONE_2}}</p>
                </div>
              </li>
              <li class="flex gap-3 text-sm">
                <svg class="w-5 h-5 text-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <span class="text-gray-400">{{content.CONTACT.EMAIL}}</span>
              </li>
            </ul>
          </div>

          <!-- School Hours -->
          <div>
            <h3 class="text-lg font-bold font-heading mb-5 text-accent">{{content.HOURS.TITLE}}</h3>
            <ul class="space-y-3 text-sm text-gray-400">
              <li class="flex justify-between">
                <span>{{content.HOURS.MONDAY_FRIDAY}}</span>
                <span class="text-white">{{content.HOURS.MONDAY_FRIDAY_TIME}}</span>
              </li>
              <li class="flex justify-between">
                <span>{{content.HOURS.SATURDAY}}</span>
                <span class="text-white">{{content.HOURS.SATURDAY_TIME}}</span>
              </li>
              <li class="flex justify-between">
                <span>{{content.HOURS.SUNDAY}}</span>
                <span class="text-white">{{content.HOURS.SUNDAY_TIME}}</span>
              </li>
            </ul>
            <div class="mt-6 p-4 rounded-xl bg-white/5 border border-white/10">
              <p class="text-xs text-gray-400">{{content.HOURS.OFFICE_HOURS_TITLE}}</p>
              <p class="text-sm text-white mt-1">{{content.HOURS.OFFICE_HOURS_TIME}}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-white/10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p class="text-sm text-gray-500">
            &copy; {{ currentYear }} {{content.BOTTOM_BAR.COPYRIGHT}}
          </p>
          <div class="flex gap-6 text-sm text-gray-500">
            <a href="#" class="hover:text-white transition-colors">{{content.BOTTOM_BAR.PRIVACY_POLICY}}</a>
            <a href="#" class="hover:text-white transition-colors">{{content.BOTTOM_BAR.TERMS}}</a>
            <a href="#" class="hover:text-white transition-colors">{{content.BOTTOM_BAR.SITEMAP}}</a>
          </div>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  readonly content = FOOTER_CONTENT;
}
