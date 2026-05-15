import { Component, OnInit, AfterViewInit, OnDestroy, inject, signal, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SeoService } from '../../core/services/seo.service';
import { ScrollService } from '../../core/services/scroll.service';
import { SectionHeadingComponent } from '../../shared/section-heading/section-heading.component';
import { CONTACT_CONTENT } from '../../shared/constants';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, SectionHeadingComponent],
  template: `
    <section class="page-banner">
      <h1 class="font-heading">{{ content.BANNER.TITLE }}</h1>
      <p>{{ content.BANNER.SUBTITLE }}</p>
    </section>

    <!-- Contact Info Cards -->
    <section class="section-padding">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-3 gap-8">
          @for (item of content.INFO_CARDS; track item.title) {
            <div class="reveal bg-white rounded-3xl p-8 shadow-lg border border-gray-100 text-center card-hover">
              <div class="w-16 h-16 rounded-2xl gradient-primary/10 text-primary text-3xl flex items-center justify-center mx-auto mb-6">
                {{ item.icon }}
              </div>
              <h3 class="text-xl font-bold font-heading text-dark mb-4">{{ item.title }}</h3>
              <div class="space-y-1 mb-6">
                @for (line of item.details; track line) {
                  <p class="text-muted">{{ line }}</p>
                }
              </div>
              <a [href]="item.link" class="text-primary font-bold text-sm hover:underline inline-flex items-center gap-2">
                {{ item.actionText }}
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </a>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- Contact Form & Map -->
    <section class="section-padding bg-light">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-start">
          
          <!-- Form -->
          <div class="reveal bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100">
            <app-section-heading [title]="content.FORM.TITLE" [subtitle]="content.FORM.SUBTITLE" />
            <p class="text-muted mb-8 -mt-4">{{ content.FORM.DESC }}</p>

            <form action="https://formspree.io/f/xexample" method="POST" class="space-y-5">
              <div class="grid sm:grid-cols-2 gap-5">
                <div>
                  <label for="name" class="block text-sm font-medium text-dark mb-1.5">Full Name *</label>
                  <input type="text" id="name" name="name" required class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm">
                </div>
                <div>
                  <label for="email" class="block text-sm font-medium text-dark mb-1.5">Email Address *</label>
                  <input type="email" id="email" name="email" required class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm">
                </div>
              </div>

              <div>
                <label for="dept" class="block text-sm font-medium text-dark mb-1.5">Department</label>
                <select id="dept" name="department" class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm bg-white">
                  @for (dept of content.DEPARTMENTS; track dept.name) {
                    <option [value]="dept.name">{{ dept.name }}</option>
                  }
                </select>
              </div>

              <div>
                <label for="subject" class="block text-sm font-medium text-dark mb-1.5">Subject *</label>
                <input type="text" id="subject" name="subject" required class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm">
              </div>

              <div>
                <label for="message" class="block text-sm font-medium text-dark mb-1.5">Message *</label>
                <textarea id="message" name="message" rows="5" required class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm resize-none"></textarea>
              </div>

              <button type="submit" class="w-full px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-all shadow-lg shadow-primary/20">
                Send Message
              </button>
            </form>
          </div>

          <!-- Map & Extra Info -->
          <div class="space-y-8">
            <div class="reveal rounded-3xl overflow-hidden shadow-lg border-4 border-white h-[400px]">
              <iframe [src]="safeMapUrl" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            </div>

            <div class="reveal gradient-primary rounded-3xl p-8 text-white">
              <h3 class="text-xl font-bold font-heading mb-4">Emergency Contacts</h3>
              <div class="grid sm:grid-cols-2 gap-6">
                <div>
                  <p class="text-white/60 text-xs uppercase font-bold tracking-wider mb-1">Security Desk</p>
                  <p class="font-semibold">+91 98765 43211</p>
                </div>
                <div>
                  <p class="text-white/60 text-xs uppercase font-bold tracking-wider mb-1">Medical Room</p>
                  <p class="font-semibold">+91 98765 43212</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  `
})
export class ContactComponent implements OnInit, AfterViewInit, OnDestroy {
  private readonly seo = inject(SeoService);
  private readonly scroll = inject(ScrollService);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly sanitizer = inject(DomSanitizer);

  readonly content = CONTACT_CONTENT;
  readonly safeMapUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.content.MAP_URL);

  ngOnInit(): void {
    const { SEO } = this.content;
    this.seo.updatePageMeta({
      title: SEO.TITLE,
      description: SEO.DESCRIPTION,
      canonicalPath: SEO.PATH
    });
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => this.scroll.initScrollReveal(), 100);
    }
  }

  ngOnDestroy(): void {
    this.scroll.destroy();
  }
}