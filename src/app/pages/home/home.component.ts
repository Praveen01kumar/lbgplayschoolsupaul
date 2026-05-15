import { Component, OnInit, OnDestroy, inject, signal, AfterViewInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { SeoService } from '../../core/services/seo.service';
import { DataService } from '../../core/services/data.service';
import { ScrollService } from '../../core/services/scroll.service';
import { SectionHeadingComponent } from '../../shared/section-heading/section-heading.component';
import { StatsCounterComponent } from '../../shared/stats-counter/stats-counter.component';
import { Notice } from '../../models/notice.model';
import { SchoolEvent } from '../../models/event.model';
import { Testimonial } from '../../models/testimonial.model';
import { HOME_CONTENT } from '../../shared/constants';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, SectionHeadingComponent, StatsCounterComponent],
  template: `
    <!-- ===== HERO SECTION ===== -->
    <section class="relative min-h-[90vh] flex items-center overflow-hidden" aria-label="Hero">
      <div class="absolute inset-0 gradient-dark"></div>
      <div class="absolute inset-0 opacity-20"
           [style.backgroundImage]="'url(' + content.HERO.BG_IMAGE + ')'"
           style="background-size: cover; background-position: center;">
      </div>
      <div class="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>

      <div class="absolute top-20 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-float"></div>
      <div class="absolute bottom-20 left-10 w-96 h-96 bg-primary-light/20 rounded-full blur-3xl"></div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div class="max-w-3xl">
          <span class="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-semibold mb-6 animate-fade-in">
            {{ content.HERO.BADGE }}
          </span>
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-heading leading-tight mb-6 animate-fade-in-up">
            {{ content.HERO.TITLE_START }}
            <span class="text-accent">{{ content.HERO.TITLE_ACCENT }}</span>
          </h1>
          <p class="text-lg sm:text-xl text-white/80 mb-8 leading-relaxed max-w-2xl animate-fade-in-up" style="animation-delay: 0.2s">
            {{ content.HERO.DESCRIPTION }}
          </p>
          <div class="flex flex-wrap gap-4 animate-fade-in-up" style="animation-delay: 0.4s">
            <a routerLink="/admissions"
               class="px-8 py-4 bg-accent text-white font-semibold rounded-xl hover:bg-accent-dark transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
              Apply for Admission
            </a>
            <a routerLink="/about"
               class="px-8 py-4 bg-white/10 text-white font-semibold rounded-xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
              Explore Our School
            </a>
          </div>
        </div>
      </div>

      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg class="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
        </svg>
      </div>
    </section>

    <!-- ===== QUICK LINKS ===== -->
    <section class="relative -mt-16 z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Quick links">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        @for (link of content.QUICK_LINKS; track link.label) {
          <a [routerLink]="link.path"
             class="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
            <div class="w-14 h-14 rounded-xl gradient-primary mx-auto mb-3 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
              {{ link.icon }}
            </div>
            <h3 class="font-semibold text-dark text-sm">{{ link.label }}</h3>
          </a>
        }
      </div>
    </section>

    <!-- ===== ABOUT INTRO ===== -->
    <section class="section-padding" aria-label="School introduction">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="reveal">
            <span class="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary mb-4">
              {{ content.ABOUT.BADGE }}
            </span>
            <h2 class="text-3xl md:text-4xl font-bold font-heading text-dark mb-6">
              {{ content.ABOUT.TITLE_START }} <span class="text-primary">{{ content.ABOUT.TITLE_ACCENT }}</span>
            </h2>
            <p class="text-muted leading-relaxed mb-4">{{ content.ABOUT.DESC_1 }}</p>
            <p class="text-muted leading-relaxed mb-6">{{ content.ABOUT.DESC_2 }}</p>
            <div class="flex flex-wrap gap-4">
              @for (feature of content.ABOUT.FEATURES; track feature) {
                <div class="flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full bg-accent"></span>
                  <span class="text-sm font-medium text-dark">{{ feature }}</span>
                </div>
              }
            </div>
            <a routerLink="/about" class="inline-flex items-center gap-2 mt-8 text-primary font-semibold hover:gap-3 transition-all">
              Learn More About Us
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </a>
          </div>
          <div class="reveal-right">
            <div class="relative">
              <img [src]="content.ABOUT.IMAGE" [alt]="content.ABOUT.IMAGE_ALT"
                   class="rounded-2xl shadow-2xl w-full object-cover"
                   loading="lazy" decoding="async" fetchpriority="high">
              <div class="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl">
                <div class="text-3xl font-bold font-heading">30+</div>
                <div class="text-sm opacity-90">{{ content.ABOUT.STATS_LABEL }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== STATISTICS ===== -->
    <section class="gradient-primary section-padding" aria-label="School statistics">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          @for (stat of content.STATS; track stat.label) {
            <app-stats-counter [targetValue]="stat.value" [label]="stat.label" />
          }
        </div>
      </div>
    </section>

    <!-- ===== PRINCIPAL'S MESSAGE ===== -->
    <section class="section-padding bg-light" aria-label="Principal's message">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="reveal-left order-2 lg:order-1">
            <div class="relative">
              <img [src]="content.PRINCIPAL.IMAGE" [alt]="content.PRINCIPAL.NAME"
                   class="rounded-2xl shadow-2xl w-full object-cover max-h-[500px]"
                   loading="lazy" decoding="async" fetchpriority="high">
              <div class="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
                <p class="font-bold text-dark text-sm">{{ content.PRINCIPAL.NAME }}</p>
                <p class="text-xs text-muted">{{ content.PRINCIPAL.ROLE }}</p>
              </div>
            </div>
          </div>
          <div class="reveal order-1 lg:order-2">
            <span class="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-accent/10 text-accent mb-4">
              {{ content.PRINCIPAL.BADGE }}
            </span>
            <h2 class="text-3xl md:text-4xl font-bold font-heading text-dark mb-6">
              {{ content.PRINCIPAL.TITLE_START }} <span class="text-primary">{{ content.PRINCIPAL.TITLE_ACCENT }}</span>
            </h2>
            <blockquote class="border-l-4 border-accent pl-6 mb-6">
              <p class="text-muted leading-relaxed italic text-lg">"{{ content.PRINCIPAL.QUOTE }}"</p>
            </blockquote>
            <p class="text-muted leading-relaxed mb-4">{{ content.PRINCIPAL.DESC_1 }}</p>
            <p class="text-muted leading-relaxed">{{ content.PRINCIPAL.DESC_2 }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== ACHIEVEMENTS ===== -->
    <section class="section-padding" aria-label="Achievements">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <app-section-heading
          [title]="content.ACHIEVEMENTS_HEADER.TITLE"
          [subtitle]="content.ACHIEVEMENTS_HEADER.SUBTITLE"
          [description]="content.ACHIEVEMENTS_HEADER.DESC"
        />
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          @for (achievement of content.ACHIEVEMENTS; track achievement.title) {
            <div class="reveal bg-white rounded-2xl p-8 shadow-md card-hover border border-gray-100">
              <div class="text-4xl mb-4">{{ achievement.icon }}</div>
              <h3 class="text-xl font-bold font-heading text-dark mb-2">{{ achievement.title }}</h3>
              <p class="text-muted text-sm leading-relaxed">{{ achievement.description }}</p>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- ===== LATEST NOTICES ===== -->
    <section class="section-padding bg-light" aria-label="Latest notices">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <app-section-heading
          [title]="content.NOTICES_HEADER.TITLE"
          [subtitle]="content.NOTICES_HEADER.SUBTITLE"
          [description]="content.NOTICES_HEADER.DESC"
        />
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          @for (notice of latestNotices(); track notice.id) {
            <article class="reveal bg-white rounded-2xl p-6 shadow-md card-hover border border-gray-100">
              <div class="flex items-center gap-3 mb-4">
                <span class="px-3 py-1 rounded-full text-xs font-semibold"
                      [class]="notice.important ? 'bg-red-100 text-red-700' : 'bg-primary/10 text-primary'">
                  {{ notice.category }}
                </span>
                <span class="text-xs text-muted">{{ notice.date }}</span>
              </div>
              <h3 class="text-lg font-bold font-heading text-dark mb-2 line-clamp-2">{{ notice.title }}</h3>
              <p class="text-muted text-sm leading-relaxed line-clamp-3">{{ notice.content }}</p>
            </article>
          }
        </div>
      </div>
    </section>

    <!-- ===== UPCOMING EVENTS ===== -->
    <section class="section-padding" aria-label="Upcoming events">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <app-section-heading
          [title]="content.EVENTS_HEADER.TITLE"
          [subtitle]="content.EVENTS_HEADER.SUBTITLE"
          [description]="content.EVENTS_HEADER.DESC"
        />
        <div class="grid md:grid-cols-2 gap-6">
          @for (event of upcomingEvents(); track event.id) {
            <article class="reveal bg-white rounded-2xl shadow-md card-hover border border-gray-100 overflow-hidden flex flex-col sm:flex-row">
              <div class="sm:w-32 gradient-primary flex flex-col items-center justify-center p-4 text-white shrink-0">
                <span class="text-3xl font-bold font-heading">{{ getDay(event.date) }}</span>
                <span class="text-sm uppercase">{{ getMonth(event.date) }}</span>
                <span class="text-xs opacity-80">{{ getYear(event.date) }}</span>
              </div>
              <div class="p-6 flex-1">
                @if (event.featured) {
                  <span class="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold mb-2">⭐ Featured</span>
                }
                <h3 class="text-lg font-bold font-heading text-dark mb-2">{{ event.title }}</h3>
                <p class="text-muted text-sm mb-3 line-clamp-2">{{ event.description }}</p>
                <div class="flex items-center gap-4 text-xs text-muted">
                  <span class="flex items-center gap-1">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    {{ event.time }}
                  </span>
                  <span class="flex items-center gap-1">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/></svg>
                    {{ event.location }}
                  </span>
                </div>
              </div>
            </article>
          }
        </div>
      </div>
    </section>

    <!-- ===== TESTIMONIALS ===== -->
    <section class="section-padding gradient-dark text-white" aria-label="Testimonials">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <span class="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-accent/20 text-accent mb-4">
            {{ content.TESTIMONIALS_HEADER.SUBTITLE }}
          </span>
          <h2 class="text-3xl md:text-4xl font-bold font-heading mb-4">{{ content.TESTIMONIALS_HEADER.TITLE }}</h2>
          <p class="text-white/70 max-w-2xl mx-auto text-lg">{{ content.TESTIMONIALS_HEADER.DESC }}</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          @for (testimonial of testimonials(); track testimonial.id) {
            <div class="reveal bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div class="flex gap-1 mb-4">
                @for (star of [1,2,3,4,5]; track star) {
                  <svg class="w-5 h-5" [class]="star <= testimonial.rating ? 'text-accent' : 'text-white/20'" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                }
              </div>
              <p class="text-white/80 text-sm leading-relaxed mb-5 italic">"{{ testimonial.quote }}"</p>
              <div class="flex items-center gap-3">
                <img [src]="testimonial.photo" [alt]="testimonial.name"
                     class="w-11 h-11 rounded-full object-cover border-2 border-accent" loading="lazy" decoding="async" fetchpriority="high">
                <div>
                  <p class="font-semibold text-sm">{{ testimonial.name }}</p>
                  <p class="text-xs text-white/60">{{ testimonial.role }}</p>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- ===== CTA SECTION ===== -->
    <section class="section-padding" aria-label="Call to action">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="reveal gradient-accent rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
          <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div class="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
          <div class="relative">
            <h2 class="text-3xl md:text-4xl font-bold font-heading mb-4">{{ content.CTA.TITLE }}</h2>
            <p class="text-white/90 max-w-xl mx-auto mb-8 text-lg">{{ content.CTA.DESC }}</p>
            <div class="flex flex-wrap justify-center gap-4">
              <a routerLink="/admissions"
                 class="px-8 py-4 bg-white text-accent-dark font-bold rounded-xl hover:bg-white/90 transition-all shadow-lg hover:shadow-xl text-primry hover:-translate-y-1">
                Apply Now
              </a>
              <a routerLink="/contact"
                 class="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  private readonly seo = inject(SeoService);
  private readonly data = inject(DataService);
  private readonly scroll = inject(ScrollService);
  private readonly platformId = inject(PLATFORM_ID);

  readonly content = HOME_CONTENT;
  latestNotices = signal<Notice[]>([]);
  upcomingEvents = signal<SchoolEvent[]>([]);
  testimonials = signal<Testimonial[]>([]);

  async ngOnInit(): Promise<void> {
    this.initSeo();
    await this.loadData();
  }

  private initSeo(): void {
    const { SEO, SCHEMA } = this.content;
    this.seo.updatePageMeta({
      title: SEO.TITLE,
      description: SEO.DESCRIPTION,
      keywords: SEO.KEYWORDS,
      canonicalPath: SEO.PATH
    });

    this.seo.setJsonLd({
      '@context': 'https://schema.org',
      '@type': 'School',
      'name': SCHEMA.NAME,
      'description': SEO.DESCRIPTION,
      'url': SCHEMA.URL,
      'telephone': SCHEMA.PHONE,
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': SCHEMA.STREET,
        'addressLocality': SCHEMA.CITY,
        'postalCode': SCHEMA.POSTAL_CODE,
        'addressCountry': SCHEMA.COUNTRY
      },
      'foundingDate': SCHEMA.FOUNDED
    });
  }

  private async loadData(): Promise<void> {
    const [notices, events, testimonials] = await Promise.all([
      firstValueFrom(this.data.getNotices()),
      firstValueFrom(this.data.getEvents()),
      firstValueFrom(this.data.getTestimonials())
    ]);

    this.latestNotices.set(notices.slice(0, 3));
    this.upcomingEvents.set(events.filter(e => new Date(e.date) >= new Date()).slice(0, 4));
    this.testimonials.set(testimonials.slice(0, 3));
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => this.scroll.initScrollReveal(), 100);
    }
  }

  ngOnDestroy(): void {
    this.scroll.destroy();
  }

  getDay(date: string): string {
    return new Date(date).getDate().toString().padStart(2, '0');
  }

  getMonth(date: string): string {
    return new Date(date).toLocaleString('en', { month: 'short' });
  }

  getYear(date: string): string {
    return new Date(date).getFullYear().toString();
  }
}