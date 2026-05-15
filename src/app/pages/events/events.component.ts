import { Component, OnInit, AfterViewInit, OnDestroy, inject, signal, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { firstValueFrom } from 'rxjs';
import { SeoService } from '../../core/services/seo.service';
import { DataService } from '../../core/services/data.service';
import { ScrollService } from '../../core/services/scroll.service';
import { SectionHeadingComponent } from '../../shared/section-heading/section-heading.component';
import { SchoolEvent } from '../../models/event.model';
import { EVENTS_CONTENT } from '../../shared/constants';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule, SectionHeadingComponent],
  template: `
    <section class="page-banner">
      <h1 class="font-heading">{{ content.BANNER.TITLE }}</h1>
      <p>{{ content.BANNER.SUBTITLE }}</p>
    </section>

    @if (featuredEvent()) {
      <section class="section-padding bg-light">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="reveal gradient-primary rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div class="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div class="relative grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span class="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-semibold mb-4">
                  {{ content.FEATURED_LABEL }}
                </span>
                <h2 class="text-2xl md:text-3xl font-bold font-heading mb-3">{{ featuredEvent()!.title }}</h2>
                <p class="text-white/80 text-sm mb-4">{{ featuredEvent()!.description }}</p>
                <div class="flex items-center gap-4 text-sm text-white/70">
                  <span class="flex items-center gap-1">📅 {{ featuredEvent()!.date }}</span>
                  <span class="flex items-center gap-1">🕐 {{ featuredEvent()!.time }}</span>
                  <span class="flex items-center gap-1">📍 {{ featuredEvent()!.location }}</span>
                </div>
              </div>
              <div class="flex justify-center md:justify-end gap-4">
                @for (unit of countdownUnits(); track unit.label) {
                  <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-4 min-w-[80px] text-center border border-white/10">
                    <div class="text-3xl font-bold font-heading">{{ unit.value }}</div>
                    <div class="text-xs text-white/60 uppercase mt-1">{{ unit.label }}</div>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    }

    <section class="section-padding">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <app-section-heading 
          [title]="content.CALENDAR_HEADER.TITLE" 
          [subtitle]="content.CALENDAR_HEADER.SUBTITLE" 
          [description]="content.CALENDAR_HEADER.DESC" 
        />

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          @for (event of events(); track event.id) {
            <article class="reveal bg-white rounded-2xl shadow-md card-hover border border-gray-100 overflow-hidden">
              <div class="gradient-primary p-4 text-white text-center">
                <div class="text-3xl font-bold font-heading">{{ getDay(event.date) }}</div>
                <div class="text-sm">{{ getMonth(event.date) }} {{ getYear(event.date) }}</div>
              </div>
              <div class="p-6">
                @if (event.featured) {
                  <span class="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold mb-2">⭐ Featured</span>
                }
                <span class="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">{{ event.category }}</span>
                <h3 class="text-lg font-bold font-heading text-dark mb-2">{{ event.title }}</h3>
                <p class="text-muted text-sm leading-relaxed mb-4 line-clamp-3">{{ event.description }}</p>
                <div class="space-y-2 text-xs text-muted">
                  <p class="flex items-center gap-2">
                    <svg class="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    {{ event.time }}
                  </p>
                  <p class="flex items-center gap-2">
                    <svg class="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/></svg>
                    {{ event.location }}
                  </p>
                </div>
              </div>
            </article>
          }
        </div>
      </div>
    </section>
  `
})
export class EventsComponent implements OnInit, AfterViewInit, OnDestroy {
  private readonly seo = inject(SeoService);
  private readonly data = inject(DataService);
  private readonly scroll = inject(ScrollService);
  private readonly platformId = inject(PLATFORM_ID);

  readonly content = EVENTS_CONTENT;
  readonly events = signal<SchoolEvent[]>([]);
  readonly featuredEvent = signal<SchoolEvent | null>(null);
  readonly countdownUnits = signal<{ label: string; value: number }[]>([]);

  async ngOnInit(): Promise<void> {
    this.seo.updatePageMeta({
      title: this.content.SEO.TITLE,
      description: this.content.SEO.DESCRIPTION,
      canonicalPath: this.content.SEO.PATH
    });

    const events = await firstValueFrom(this.data.getEvents());
    this.events.set(events);
    const featured = events.find(e => e.featured);
    if (featured) {
      this.featuredEvent.set(featured);
      this.updateCountdown(featured.date);
    }
  }

  private updateCountdown(dateStr: string): void {
    const target = new Date(dateStr).getTime();
    const now = new Date().getTime();
    const diff = Math.max(0, target - now);
    this.countdownUnits.set([
      { label: 'Days', value: Math.floor(diff / (1000 * 60 * 60 * 24)) },
      { label: 'Hours', value: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) },
      { label: 'Minutes', value: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)) }
    ]);
  }

  getDay(d: string): string { return new Date(d).getDate().toString().padStart(2, '0'); }
  getMonth(d: string): string { return new Date(d).toLocaleString('en', { month: 'short' }); }
  getYear(d: string): string { return new Date(d).getFullYear().toString(); }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => this.scroll.initScrollReveal(), 100);
    }
  }

  ngOnDestroy(): void {
    this.scroll.destroy();
  }
}