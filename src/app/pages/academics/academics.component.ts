import { Component, OnInit, AfterViewInit, OnDestroy, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { SeoService } from '../../core/services/seo.service';
import { ScrollService } from '../../core/services/scroll.service';
import { SectionHeadingComponent } from '../../shared/section-heading/section-heading.component';
import { ACADEMICS_CONTENT } from '../../shared/constants';

@Component({
  selector: 'app-academics',
  standalone: true,
  imports: [CommonModule, SectionHeadingComponent],
  template: `
    <section class="page-banner">
      <h1 class="font-heading">{{ content.BANNER.TITLE }}</h1>
      <p>{{ content.BANNER.SUBTITLE }}</p>
    </section>

    <section class="section-padding">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="reveal">
            <span class="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary mb-4">
              {{ content.CURRICULUM.BADGE }}
            </span>
            <h2 class="text-3xl md:text-4xl font-bold font-heading text-dark mb-6">
              {{ content.CURRICULUM.TITLE_START }} <span class="text-primary">{{ content.CURRICULUM.TITLE_ACCENT }}</span>
            </h2>
            <p class="text-muted leading-relaxed mb-4">{{ content.CURRICULUM.DESC_1 }}</p>
            <p class="text-muted leading-relaxed mb-6">{{ content.CURRICULUM.DESC_2 }}</p>
            <div class="flex flex-wrap gap-3">
              @for (tag of content.CURRICULUM.TAGS; track tag) {
                <span class="px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-semibold">{{ tag }}</span>
              }
            </div>
          </div>
          <div class="reveal-right">
            <img [src]="content.CURRICULUM.IMAGE" [alt]="content.CURRICULUM.IMAGE_ALT" class="rounded-2xl shadow-2xl w-full object-cover" loading="lazy" decoding="async" fetchpriority="high">
          </div>
        </div>
      </div>
    </section>

    <section class="section-padding bg-light">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <app-section-heading 
          [title]="content.DEPARTMENTS_HEADER.TITLE" 
          [subtitle]="content.DEPARTMENTS_HEADER.SUBTITLE" 
          [description]="content.DEPARTMENTS_HEADER.DESC" 
        />
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          @for (dept of content.DEPARTMENTS; track dept.name) {
            <div class="reveal bg-white rounded-2xl p-6 shadow-md card-hover border border-gray-100 group">
              <div class="text-4xl mb-4 group-hover:scale-110 transition-transform">{{ dept.icon }}</div>
              <h3 class="text-lg font-bold font-heading text-dark mb-2">{{ dept.name }}</h3>
              <p class="text-muted text-sm leading-relaxed">{{ dept.description }}</p>
            </div>
          }
        </div>
      </div>
    </section>

    <section class="section-padding">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <app-section-heading 
          [title]="content.PROGRAMS_HEADER.TITLE" 
          [subtitle]="content.PROGRAMS_HEADER.SUBTITLE" 
          [description]="content.PROGRAMS_HEADER.DESC" 
        />
        <div class="grid md:grid-cols-3 gap-6">
          @for (program of content.PROGRAMS; track program.title) {
            <div class="reveal bg-white rounded-2xl overflow-hidden shadow-md card-hover border border-gray-100">
              <div class="h-3" [style.background]="program.color"></div>
              <div class="p-6">
                <h3 class="text-xl font-bold font-heading text-dark mb-2">{{ program.title }}</h3>
                <p class="text-xs text-primary font-semibold mb-3">{{ program.grades }}</p>
                <p class="text-muted text-sm leading-relaxed mb-4">{{ program.description }}</p>
                <ul class="space-y-2">
                  @for (feature of program.features; track feature) {
                    <li class="flex items-center gap-2 text-sm text-muted">
                      <svg class="w-4 h-4 text-accent shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                      {{ feature }}
                    </li>
                  }
                </ul>
              </div>
            </div>
          }
        </div>
      </div>
    </section>

    <section class="section-padding gradient-dark text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <span class="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-accent/20 text-accent mb-4">
            {{ content.METHODS_HEADER.SUBTITLE }}
          </span>
          <h2 class="text-3xl md:text-4xl font-bold font-heading mb-4">{{ content.METHODS_HEADER.TITLE }}</h2>
          <p class="text-white/70 max-w-2xl mx-auto">{{ content.METHODS_HEADER.DESC }}</p>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          @for (method of content.METHODS; track method.title) {
            <div class="reveal bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 hover:bg-white/20 transition-all">
              <div class="text-4xl mb-4">{{ method.icon }}</div>
              <h3 class="text-lg font-bold font-heading mb-2">{{ method.title }}</h3>
              <p class="text-white/70 text-sm">{{ method.description }}</p>
            </div>
          }
        </div>
      </div>
    </section>
  `
})
export class AcademicsComponent implements OnInit, AfterViewInit, OnDestroy {
  private readonly seo = inject(SeoService);
  private readonly scroll = inject(ScrollService);
  private readonly platformId = inject(PLATFORM_ID);

  readonly content = ACADEMICS_CONTENT;

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