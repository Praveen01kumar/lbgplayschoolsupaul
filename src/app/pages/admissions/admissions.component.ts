import { Component, OnInit, AfterViewInit, OnDestroy, inject, signal, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SeoService } from '../../core/services/seo.service';
import { ScrollService } from '../../core/services/scroll.service';
import { SectionHeadingComponent } from '../../shared/section-heading/section-heading.component';
import { ADMISSIONS_CONTENT } from '../../shared/constants';

@Component({
  selector: 'app-admissions',
  standalone: true,
  imports: [CommonModule, FormsModule, SectionHeadingComponent],
  template: `
    <section class="page-banner" [attr.aria-label]="content.BANNER.AREA_LABEL">
      <h1 class="font-heading">{{ content.BANNER.TITLE }}</h1>
      <p>{{ content.BANNER.SUBTITLE }}</p>
    </section>

    <section class="section-padding" [attr.aria-label]="content.PROCESS.AREA_LABEL">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <app-section-heading [title]="content.PROCESS.TITLE" [subtitle]="content.PROCESS.SUBTITLE" [description]="content.PROCESS.DESC" />
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          @for (step of content.PROCESS.STEPS; track $index; let i = $index) {
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

    <section class="section-padding bg-[#eef4ff]" [attr.aria-label]="content.ELIGIBILITY.AREA_LABEL">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <app-section-heading [title]="content.ELIGIBILITY.TITLE" [subtitle]="content.ELIGIBILITY.SUBTITLE" />
        <div class="reveal max-w-4xl mx-auto bg-white rounded-2xl shadow-md overflow-x-auto">
         <table class="w-full min-w-[720px] text-sm md:text-base">
          <thead>
            <tr
              class="bg-gradient-to-r border-b border-slate-100 from-primary to-primary/90 text-red-600 uppercase tracking-wide text-xs md:text-sm">
              <th class="px-6 py-5 text-left font-semibold">Grade</th>
              <th class="px-6 py-5 text-left font-semibold">Age Criteria</th>
              <th class="px-6 py-5 text-left font-semibold">Assessment Process</th>
            </tr>
          </thead>
            <tbody>
            @for (row of content.ELIGIBILITY.ELIGIBILITY_TABLE; track $index; let i = $index) {
              <tr class="group border-b border-slate-100 transition-all duration-300 hover:bg-primary/[0.03] hover:shadow-inner">
                <td class="px-6 py-5">
                  <div class="flex items-center gap-4">
                    <div
                      class="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary font-bold shadow-sm">
                      {{ i + 1 }}
                    </div>
                    <div>
                      <p class="font-semibold text-dark text-base">
                        {{ row.grade }}
                      </p>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-5">
                  <span class="inline-flex items-center rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 ring-1 ring-blue-100">
                    {{ row.age }}
                  </span>
                </td>
                <td class="px-6 py-5 text-muted leading-relaxed">
                  {{ row.assessment }}
                </td>
              </tr>
            }
          </tbody>
          </table>
        </div>
      </div>
    </section>

    <section class="section-padding bg-white" [attr.aria-label]="content.FEES.AREA_LABEL">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <app-section-heading [title]="content.FEES.TITLE" [subtitle]="content.FEES.SUBTITLE" />
        <div class="reveal mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
          <div class="overflow-x-auto">
            <table class="w-full min-w-[760px] text-sm md:text-base">
              <thead>
                <tr class="bg-gradient-to-r border-b border-slate-100 from-primary to-primary/90 text-red-600 uppercase tracking-wide text-xs md:text-sm">
                  <th class="px-6 py-5 text-left font-semibold uppercase tracking-wide">Class</th>
                  <th class="px-6 py-5 text-left font-semibold uppercase tracking-wide">Admission Fee</th>
                  <th class="px-6 py-5 text-left font-semibold uppercase tracking-wide">Monthly Fee</th>
                  <th class="px-6 py-5 text-left font-semibold uppercase tracking-wide">Annual Charges</th>
                </tr>
              </thead>
              <tbody>
                @for (fee of content.FEES.FEE_TABLE; track $index) {
                  <tr class="border-b border-slate-100 transition-all duration-300 hover:bg-primary/[0.03]">
                    <td class="px-6 py-5 font-semibold text-dark">
                      {{ fee.class }}
                    </td>
                    <td class="px-6 py-5 text-muted">
                      {{ fee.admissionFee }}
                    </td>
                    <td class="px-6 py-5">
                      <span class="inline-flex items-center rounded-full bg-green-50 px-4 py-2 text-sm font-semibold text-green-700 ring-1 ring-green-100">
                        {{ fee.monthlyFee }}
                      </span>
                    </td>
                    <td class="px-6 py-5 text-muted">
                      {{ fee.annualCharges }}
                    </td>
                  </tr>
                }
              </tbody>
            </table>
          </div>
          <div class="flex flex-col gap-3 border-t border-slate-200 bg-slate-50 px-6 py-5 text-sm text-muted md:flex-row md:items-center md:justify-between">
            <p>{{content.FEES.FOOTER_TEXT_1}}</p>
            <p class="font-medium text-dark">{{content.FEES.FOOTER_TEXT_2}}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section-padding bg-[#eef4ff]" [attr.aria-label]="content.PROSPECTUS.AREA_LABEL">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="reveal gradient-primary rounded-3xl p-10 md:p-14 text-center text-white relative overflow-hidden">
          <div class="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <h2 class="text-3xl font-bold font-heading mb-4 relative">{{ content.PROSPECTUS.TITLE }}</h2>
          <p class="text-white/80 max-w-xl mx-auto mb-8 relative">{{ content.PROSPECTUS.DESC }}</p>
          <button class="relative px-8 py-4 bg-accent text-white font-bold rounded-xl hover:bg-accent-dark transition-all shadow-lg inline-flex items-center gap-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17v3a2 2 0 002 2h14a2 2 0 002-2v-3"/>
            </svg>
            {{ content.PROSPECTUS.BUTTON_TEXT }}
          </button>
        </div>
      </div>
    </section>

    <section class="section-padding" [attr.aria-label]="content.FAQS.AREA_LABEL">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <app-section-heading [title]="content.FAQS.TITLE" [subtitle]="content.FAQS.SUBTITLE"/>
        <div class="max-w-3xl mx-auto space-y-4">
          @for (faq of content.FAQS.FAQ_LIST; track $index; let i = $index) {
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

    <section class="section-padding bg-[#eef4ff]" [attr.aria-label]="content.INQUIRY.HEADER.AREA_LABEL">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <app-section-heading [title]="content.INQUIRY.HEADER.TITLE" [subtitle]="content.INQUIRY.HEADER.SUBTITLE" />
        <div class="reveal max-w-2xl mx-auto bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <form action="https://formspree.io/f/xexample" method="POST" class="space-y-5">
            <div class="grid sm:grid-cols-2 gap-5">
              <div>
                <label for="pname" class="block text-sm font-medium text-dark mb-1.5">{{content.INQUIRY.FORM.PARENT_NAME_LABEL}}</label>
                <input type="text" id="pname" name="parent_name" required [placeholder]="content.INQUIRY.FORM.PARENT_NAME_PLACEHOLDER" class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm">
              </div>
              <div>
                <label for="sname" class="block text-sm font-medium text-dark mb-1.5">{{content.INQUIRY.FORM.STUDENT_NAME_LABEL}}</label>
                <input type="text" id="sname" name="student_name" required [placeholder]="content.INQUIRY.FORM.STUDENT_NAME_PLACEHOLDER" class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm">
              </div>
            </div>
            <div class="grid sm:grid-cols-2 gap-5">
              <div>
                <label for="iemail" class="block text-sm font-medium text-dark mb-1.5">{{content.INQUIRY.FORM.EMAIL_LABEL}}</label>
                <input type="email" id="iemail" name="email" required [placeholder]="content.INQUIRY.FORM.EMAIL_PLACEHOLDER" class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm">
              </div>
              <div>
                <label for="iphone" class="block text-sm font-medium text-dark mb-1.5">{{content.INQUIRY.FORM.PHONE_LABEL}}</label>
                <input type="tel" id="iphone" name="phone" required [placeholder]="content.INQUIRY.FORM.PHONE_PLACEHOLDER" class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm">
              </div>
            </div>
            <div>
              <label for="igrade" class="block text-sm font-medium text-dark mb-1.5">{{content.INQUIRY.FORM.GRADE_LABEL}}</label>
              <select id="igrade" name="grade" class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm bg-white">
                <option value="">{{content.INQUIRY.FORM.GRADE_PLACEHOLDER}}</option>
                <option>{{content.INQUIRY.FORM.NURSERY}}</option>
                <option>{{content.INQUIRY.FORM.KG}}</option>
                @for(g of [1,2,3,4,5,6,7,8]; track $index; let i = $index){<option>Grade {{g}}</option>}
              </select>
            </div>
            <div>
              <label for="imsg" class="block text-sm font-medium text-dark mb-1.5">{{content.INQUIRY.FORM.MESSAGE_LABEL}}</label>
              <textarea id="imsg" name="message" rows="4" [placeholder]="content.INQUIRY.FORM.MESSAGE_PLACEHOLDER" class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm resize-none"></textarea>
            </div>
            <button type="submit" class="w-full px-8 py-4 bg-red-500/10 text-red-600 font-bold rounded-xl hover:bg-primary-dark transition-all shadow-lg shadow-primary/20">
              {{content.INQUIRY.FORM.SUBMIT_BUTTON}}
            </button>
          </form>
        </div>
      </div>
    </section>
  `
})
export class AdmissionsComponent implements OnInit, AfterViewInit, OnDestroy {
  private readonly seo = inject(SeoService);
  private readonly scroll = inject(ScrollService);
  private readonly platformId = inject(PLATFORM_ID);
  readonly content = ADMISSIONS_CONTENT;
  readonly openFaqId = signal<number | null>(null);

  ngOnInit():void {
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

  toggleFaq(id: number): void {
    this.openFaqId.update(c => (c === id ? null : id));
  }
}