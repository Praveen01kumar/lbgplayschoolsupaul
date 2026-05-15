import { Component, OnInit, AfterViewInit, OnDestroy, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { SeoService } from '../../core/services/seo.service';
import { ScrollService } from '../../core/services/scroll.service';
import { SectionHeadingComponent } from '../../shared/section-heading/section-heading.component';
import { ABOUT_CONTENT } from '../../shared/constants';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, SectionHeadingComponent],
  template: `
    <!-- Page Banner -->
    <section class="page-banner" aria-label="About page header">
      <h1 class="font-heading">{{ content.BANNER.TITLE }}</h1>
      <p>{{ content.BANNER.SUBTITLE }}</p>
    </section>

    <!-- History -->
    <section class="section-padding" aria-label="School history">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="reveal">
            <span class="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary mb-4">
              {{ content.STORY.BADGE }}
            </span>
            <h2 class="text-3xl md:text-4xl font-bold font-heading text-dark mb-6">
              {{ content.STORY.TITLE_START }} <span class="text-primary">{{ content.STORY.TITLE_ACCENT }}</span>
            </h2>
            <p class="text-muted leading-relaxed mb-4">{{ content.STORY.DESC_1 }}</p>
            <p class="text-muted leading-relaxed mb-4">{{ content.STORY.DESC_2 }}</p>
            <p class="text-muted leading-relaxed">{{ content.STORY.DESC_3 }}</p>
          </div>
          <div class="reveal-right">
            <img [src]="content.STORY.IMAGE" loading="lazy" decoding="async" fetchpriority="high"
                 [alt]="content.STORY.IMAGE_ALT" class="rounded-2xl shadow-2xl w-full object-cover">
          </div>
        </div>
      </div>
    </section>

    <!-- Vision & Mission -->
    <section class="section-padding bg-light" aria-label="Vision and mission">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <app-section-heading 
          [title]="content.PURPOSE_HEADER.TITLE" 
          [subtitle]="content.PURPOSE_HEADER.SUBTITLE" 
          [description]="content.PURPOSE_HEADER.DESC" 
        />
        <div class="grid md:grid-cols-2 gap-8">
          <div class="reveal bg-white rounded-2xl p-8 shadow-md border border-gray-100 card-hover">
            <div class="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
            </div>
            <h3 class="text-2xl font-bold font-heading text-dark mb-4">{{ content.VISION.TITLE }}</h3>
            <p class="text-muted leading-relaxed">{{ content.VISION.DESC }}</p>
          </div>
          <div class="reveal bg-white rounded-2xl p-8 shadow-md border border-gray-100 card-hover">
            <div class="w-16 h-16 rounded-2xl gradient-accent flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
            </div>
            <h3 class="text-2xl font-bold font-heading text-dark mb-4">{{ content.MISSION.TITLE }}</h3>
            <p class="text-muted leading-relaxed">{{ content.MISSION.DESC }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Campus Overview -->
    <section class="section-padding" aria-label="Campus overview">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <app-section-heading 
          [title]="content.INFRA_HEADER.TITLE" 
          [subtitle]="content.INFRA_HEADER.SUBTITLE" 
          [description]="content.INFRA_HEADER.DESC" 
        />
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          @for (facility of content.FACILITIES; track facility.title) {
            <div class="reveal bg-white rounded-2xl p-6 shadow-md card-hover border border-gray-100 group">
              <div class="text-4xl mb-4 group-hover:scale-110 transition-transform">{{ facility.icon }}</div>
              <h3 class="text-lg font-bold font-heading text-dark mb-2">{{ facility.title }}</h3>
              <p class="text-muted text-sm leading-relaxed">{{ facility.description }}</p>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="section-padding gradient-dark text-white" aria-label="School values">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <span class="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-accent/20 text-accent mb-4">
            {{ content.VALUES_HEADER.SUBTITLE }}
          </span>
          <h2 class="text-3xl md:text-4xl font-bold font-heading mb-4">{{ content.VALUES_HEADER.TITLE }}</h2>
          <p class="text-white/70 max-w-2xl mx-auto text-lg">{{ content.VALUES_HEADER.DESC }}</p>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          @for (value of content.VALUES; track value.title) {
            <div class="reveal bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 hover:bg-white/20 transition-all">
              <div class="text-4xl mb-4">{{ value.icon }}</div>
              <h3 class="text-lg font-bold font-heading mb-2">{{ value.title }}</h3>
              <p class="text-white/70 text-sm">{{ value.description }}</p>
            </div>
          }
        </div>
      </div>
    </section>
  `
})
export class AboutComponent implements OnInit, AfterViewInit, OnDestroy {
  private readonly seo = inject(SeoService);
  private readonly scroll = inject(ScrollService);
  private readonly platformId = inject(PLATFORM_ID);

  readonly content = ABOUT_CONTENT;

  ngOnInit(): void {
    const { SEO } = this.content;
    this.seo.updatePageMeta({
      title: SEO.TITLE,
      description: SEO.DESCRIPTION,
      keywords: SEO.KEYWORDS,
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