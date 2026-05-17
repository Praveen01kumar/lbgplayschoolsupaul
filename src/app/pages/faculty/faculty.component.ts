import { Component, OnInit, AfterViewInit, OnDestroy, inject, signal, computed, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { SeoService } from '../../core/services/seo.service';
import { ScrollService } from '../../core/services/scroll.service';
import { SectionHeadingComponent } from '../../shared/section-heading/section-heading.component';
import { FACULTY_CONTENT } from '../../shared/constants';

@Component({
  selector: 'app-faculty',
  standalone: true,
  imports: [CommonModule, SectionHeadingComponent],
  template: `
    <section class="page-banner" [attr.aria-label]="content.BANNER.AREA_LABEL">
      <h1 class="font-heading">{{ content.BANNER.TITLE }}</h1>
      <p>{{ content.BANNER.SUBTITLE }}</p>
    </section>

    <!-- Statistics Section -->
    <section class="py-12 bg-white" [attr.aria-label]="content.STATS.AREA_LABEL">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          @for (stat of content.STATS.STAT_LIST; track $index; let i = $index) {
            <div class="text-center reveal">
              <div class="text-3xl font-bold text-primary font-heading">{{ stat.value }}</div>
              <div class="text-sm text-muted font-medium">{{ stat.label }}</div>
            </div>
          }
        </div>
      </div>
    </section>

    <section class="section-padding bg-[#eef4ff]" [attr.aria-label]="content.HEADER.AREA_LABEL">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <app-section-heading [title]="content.HEADER.TITLE" [subtitle]="content.HEADER.SUBTITLE" [description]="content.HEADER.DESC" />
        <!-- Filter Tabs -->
        <div class="flex flex-wrap justify-center gap-2 mb-12">
          @for (dept of content.DEPARTMENTS; track $index; let i = $index) {
            <button (click)="selectedDepartment.set(dept)"
              class="px-6 py-2 rounded-full text-sm font-semibold transition-all"
              [class]="selectedDepartment() === dept ? 'text-red-600 bg-red-500/10 shadow-lg' : 'bg-white text-muted hover:bg-gray-200'">
              {{ dept }}
            </button>
          }
        </div>

        <!-- Faculty Grid -->
        <div class="grid sm:columns-2 lg:grid-cols-4 gap-8">
          @for (member of filteredFaculty(); track $index; let i = $index) {
            <div class="reveal bg-white rounded-3xl overflow-hidden shadow-md card-hover group">
              <div class="relative h-72 overflow-hidden">
                <img [src]="member.photo" [alt]="member.name" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500">
                <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p class="text-accent text-xs font-bold uppercase tracking-widest">{{ member.designation }}</p>
                </div>
              </div>
              <div class="p-6">
                <h3 class="font-bold font-heading text-lg text-dark mb-1">{{ member.name }}</h3>
                <p class="text-primary text-xs font-semibold mb-3">{{ member.department }}</p>
                <div class="pt-4 border-t border-gray-100">
                  <p class="text-muted text-xs italic">"{{ member.qualification }}"</p>
                </div>
              </div>
            </div>
          }
        </div>

        <!-- Recruitment CTA -->
        <div class="mt-20 reveal gradient-primary rounded-3xl p-10 text-center text-white">
          <h3 class="text-2xl font-bold font-heading mb-4">{{content.RECRUITMENT.TITLE}}</h3>
          <p class="text-white/80 mb-8 max-w-2xl mx-auto">{{content.RECRUITMENT.DESC}}</p>
          <a href="mailto:singjpratibha76@gmail.com" class="inline-block text-red-600 bg-white px-8 py-3 rounded-xl font-bold transition-all">
            {{content.RECRUITMENT.BTN}}
          </a>
        </div>
      </div>
    </section>
  `
})
export class FacultyComponent implements OnInit, AfterViewInit, OnDestroy {
  private readonly seo = inject(SeoService);
  private readonly scroll = inject(ScrollService);
  private readonly platformId = inject(PLATFORM_ID);
  readonly content = FACULTY_CONTENT;
  allFaculty = this.content.FACULTY_LIST;
  readonly selectedDepartment = signal('All');

  readonly filteredFaculty = computed(() => {
    const dept = this.selectedDepartment();
    const members = this.allFaculty;
    return dept === 'All' ? members : members.filter(f => f.department === dept);
  });

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