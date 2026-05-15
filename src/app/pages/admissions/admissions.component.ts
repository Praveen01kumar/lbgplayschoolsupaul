import { Component, OnInit, AfterViewInit, OnDestroy, inject, signal, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { SeoService } from '../../core/services/seo.service';
import { DataService } from '../../core/services/data.service';
import { ScrollService } from '../../core/services/scroll.service';
import { SectionHeadingComponent } from '../../shared/section-heading/section-heading.component';
import { FAQ } from '../../models/faq.model';
import { ADMISSIONS_CONTENT } from '../../shared/constants';

@Component({
  selector: 'app-admissions',
  standalone: true,
  imports: [CommonModule, FormsModule, SectionHeadingComponent],
  template: `
    <section class="page-banner">
      <h1 class="font-heading">{{ content.BANNER.TITLE }}</h1>
      <p>{{ content.BANNER.SUBTITLE }}</p>
    </section>

    <section class="section-padding">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <app-section-heading 
          [title]="content.PROCESS_HEADER.TITLE" 
          [subtitle]="content.PROCESS_HEADER.SUBTITLE" 
          [description]="content.PROCESS_HEADER.DESC" 
        />
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          @for (step of content.STEPS; track step.number) {
            <div class="reveal bg-white rounded-2xl p-6 shadow-md card-hover border border-gray-100 text-center relative">
              <div class="w-14 h-14 rounded-full gradient-primary text-white text-xl font-bold flex items-center justify-center mx-auto mb-4">
                {{ step.number }}
              </div>
              <h3 class="text-lg font-bold font-heading text-dark mb-2">{{ step.title }}</h3>
              <p class="text-muted text-sm">{{ step.description }}</p>
            </div>
          }
        </div>
      </div>
    </section>

    <section class="section-padding bg-light">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <app-section-heading 
          [title]="content.ELIGIBILITY_HEADER.TITLE" 
          [subtitle]="content.ELIGIBILITY_HEADER.SUBTITLE" 
        />
        <div class="reveal max-w-4xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-primary text-white">
                <th class="px-6 py-4 text-left font-semibold">Grade</th>
                <th class="px-6 py-4 text-left font-semibold">Age</th>
                <th class="px-6 py-4 text-left font-semibold">Assessment</th>
              </tr>
            </thead>
            <tbody>
              @for (row of content.ELIGIBILITY_TABLE; track row.grade) {
                <tr class="border-b border-gray-100 hover:bg-gray-50">
                  <td class="px-6 py-4 font-medium text-dark">{{ row.grade }}</td>
                  <td class="px-6 py-4 text-muted">{{ row.age }}</td>
                  <td class="px-6 py-4 text-muted">{{ row.assessment }}</td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section class="section-padding">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="reveal gradient-primary rounded-3xl p-10 md:p-14 text-center text-white relative overflow-hidden">
          <div class="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <h2 class="text-3xl font-bold font-heading mb-4 relative">{{ content.PROSPECTUS.TITLE }}</h2>
          <p class="text-white/80 max-w-xl mx-auto mb-8 relative">{{ content.PROSPECTUS.DESC }}</p>
          <button class="relative px-8 py-4 bg-accent text-white font-bold rounded-xl hover:bg-accent-dark transition-all shadow-lg inline-flex items-center gap-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17v3a2 2 0 002 2h14a2 2 0 002-2v-3"/></svg>
            {{ content.PROSPECTUS.BUTTON_TEXT }}
          </button>
        </div>
      </div>
    </section>

    <section class="section-padding bg-light">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <app-section-heading 
          [title]="content.FAQ_HEADER.TITLE" 
          [subtitle]="content.FAQ_HEADER.SUBTITLE" 
        />
        <div class="max-w-3xl mx-auto space-y-4">
          @for (faq of faqs(); track faq.id) {
            <div class="reveal bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <button class="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors" 
                (click)="toggleFaq(faq.id)" 
                [attr.aria-expanded]="openFaqId() === faq.id">
                <span class="font-semibold text-dark pr-4">{{ faq.question }}</span>
                <svg class="w-5 h-5 text-muted shrink-0 transition-transform duration-300" [class.rotate-180]="openFaqId() === faq.id" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              @if (openFaqId() === faq.id) {
                <div class="px-6 pb-5 text-muted text-sm leading-relaxed border-t border-gray-100 pt-4 animate-fade-in">
                  {{ faq.answer }}
                </div>
              }
            </div>
          }
        </div>
      </div>
    </section>

    <section class="section-padding">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <app-section-heading 
          [title]="content.INQUIRY_HEADER.TITLE" 
          [subtitle]="content.INQUIRY_HEADER.SUBTITLE" 
        />
        <div class="reveal max-w-2xl mx-auto bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <form action="https://formspree.io/f/xexample" method="POST" class="space-y-5">
            <div class="grid sm:grid-cols-2 gap-5">
              <div>
                <label for="pname" class="block text-sm font-medium text-dark mb-1.5">Parent Name *</label>
                <input type="text" id="pname" name="parent_name" required class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm">
              </div>
              <div>
                <label for="sname" class="block text-sm font-medium text-dark mb-1.5">Student Name *</label>
                <input type="text" id="sname" name="student_name" required class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm">
              </div>
            </div>
            <div class="grid sm:grid-cols-2 gap-5">
              <div>
                <label for="iemail" class="block text-sm font-medium text-dark mb-1.5">Email *</label>
                <input type="email" id="iemail" name="email" required class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm">
              </div>
              <div>
                <label for="iphone" class="block text-sm font-medium text-dark mb-1.5">Phone *</label>
                <input type="tel" id="iphone" name="phone" required class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm">
              </div>
            </div>
            <div>
              <label for="igrade" class="block text-sm font-medium text-dark mb-1.5">Grade Applying For</label>
              <select id="igrade" name="grade" class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm bg-white">
                <option value="">Select Grade</option>
                <option>Nursery</option>
                <option>KG</option>
                @for(g of [1,2,3,4,5,6,7,8,9,10,11,12]; track g){<option>Grade {{g}}</option>}
              </select>
            </div>
            <div>
              <label for="imsg" class="block text-sm font-medium text-dark mb-1.5">Message</label>
              <textarea id="imsg" name="message" rows="4" class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm resize-none"></textarea>
            </div>
            <button type="submit" class="w-full px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-all shadow-md">
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  `
})
export class AdmissionsComponent implements OnInit, AfterViewInit, OnDestroy {
  private readonly seo = inject(SeoService);
  private readonly data = inject(DataService);
  private readonly scroll = inject(ScrollService);
  private readonly platformId = inject(PLATFORM_ID);

  readonly content = ADMISSIONS_CONTENT;
  readonly faqs = signal<FAQ[]>([]);
  readonly openFaqId = signal<number | null>(null);

  async ngOnInit(): Promise<void> {
    const { SEO } = this.content;
    this.seo.updatePageMeta({
      title: SEO.TITLE,
      description: SEO.DESCRIPTION,
      canonicalPath: SEO.PATH
    });
    const faqs = await firstValueFrom(this.data.getFaq());
    this.faqs.set(faqs);
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => this.scroll.initScrollReveal(), 100);
    }
  }

  ngOnDestroy(): void {
    this.scroll.destroy();
  }

  toggleFaq(id: number): void {
    this.openFaqId.update(c => (c === id ? null : id));
  }
}