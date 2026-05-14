import { Component, OnInit, AfterViewInit, OnDestroy, inject, signal, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { SeoService } from '../../core/services/seo.service';
import { DataService } from '../../core/services/data.service';
import { ScrollService } from '../../core/services/scroll.service';
import { SectionHeadingComponent } from '../../shared/section-heading/section-heading.component';
import { FacultyMember } from '../../models/faculty.model';

@Component({
  selector: 'app-faculty',
  standalone: true,
  imports: [CommonModule, SectionHeadingComponent],
  template: `
    <section class="page-banner"><h1 class="font-heading">Our Faculty</h1><p>Meet the dedicated educators shaping the future</p></section>

    <section class="section-padding">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <app-section-heading title="Our Expert Team" subtitle="Faculty" description="Experienced and passionate educators committed to student success" />

        <!-- Filter -->
        <div class="flex flex-wrap justify-center gap-3 mb-10">
          @for (dept of departments; track dept) {
            <button (click)="filterByDept(dept)"
              class="px-5 py-2 rounded-full text-sm font-medium transition-all"
              [class]="selectedDept() === dept ? 'bg-primary text-white shadow-md' : 'bg-gray-100 text-muted hover:bg-gray-200'">
              {{ dept }}
            </button>
          }
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          @for (member of filteredFaculty(); track member.id) {
            <article class="reveal bg-white rounded-2xl shadow-md card-hover border border-gray-100 overflow-hidden group">
              <div class="relative overflow-hidden">
                <img [src]="member.photo" [alt]="member.name + ' - ' + member.designation"
                     class="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-500" loading="lazy">
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <span class="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-accent text-white text-xs font-semibold">{{ member.department }}</span>
              </div>
              <div class="p-5">
                <h3 class="text-lg font-bold font-heading text-dark">{{ member.name }}</h3>
                <p class="text-primary text-sm font-medium mb-2">{{ member.designation }}</p>
                <div class="space-y-1.5 text-xs text-muted">
                  <p class="flex items-center gap-2">
                    <svg class="w-3.5 h-3.5 text-accent" fill="currentColor" viewBox="0 0 20 20"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/></svg>
                    {{ member.qualification }}
                  </p>
                  <p class="flex items-center gap-2">
                    <svg class="w-3.5 h-3.5 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"/></svg>
                    {{ member.experience }} experience
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
export class FacultyComponent implements OnInit, AfterViewInit, OnDestroy {
  private readonly seo = inject(SeoService);
  private readonly data = inject(DataService);
  private readonly scroll = inject(ScrollService);
  private readonly platformId = inject(PLATFORM_ID);

  allFaculty = signal<FacultyMember[]>([]);
  filteredFaculty = signal<FacultyMember[]>([]);
  selectedDept = signal('All');
  departments = ['All', 'Administration', 'Science', 'Mathematics', 'English', 'Computer Science', 'Social Studies', 'Sports', 'Arts'];

  ngOnInit(): void {
    this.seo.updatePageMeta({ title: 'Our Faculty', description: 'Meet our experienced faculty at Greenfield International Academy.', canonicalPath: '/faculty' });
    this.data.getFaculty().subscribe(f => { this.allFaculty.set(f); this.filteredFaculty.set(f); });
  }

  filterByDept(dept: string): void {
    this.selectedDept.set(dept);
    this.filteredFaculty.set(dept === 'All' ? this.allFaculty() : this.allFaculty().filter(f => f.department === dept));
  }

  ngAfterViewInit(): void { if (isPlatformBrowser(this.platformId)) setTimeout(() => this.scroll.initScrollReveal(), 100); }
  ngOnDestroy(): void { this.scroll.destroy(); }
}
