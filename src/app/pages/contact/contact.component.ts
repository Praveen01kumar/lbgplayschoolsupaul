import { Component, OnInit, AfterViewInit, OnDestroy, inject, signal, computed, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SeoService } from '../../core/services/seo.service';
import { DataService } from '../../core/services/data.service';
import { ScrollService } from '../../core/services/scroll.service';
import { Notice } from '../../models/notice.model';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="page-banner"><h1 class="font-heading">Notices</h1><p>Important announcements and updates</p></section>

    <section class="section-padding">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Search & Filter -->
        <div class="flex flex-col md:flex-row gap-4 mb-8">
          <div class="flex-1 relative">
            <svg class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
            <input type="text" placeholder="Search notices..." [ngModel]="searchQuery()" (ngModelChange)="searchQuery.set($event)"
              class="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm" aria-label="Search notices">
          </div>
          <div class="flex flex-wrap gap-2">
            @for (cat of categories; track cat) {
              <button (click)="selectedCategory.set(cat)"
                class="px-4 py-2.5 rounded-xl text-sm font-medium transition-all"
                [class]="selectedCategory() === cat ? 'bg-primary text-white shadow-md' : 'bg-gray-100 text-muted hover:bg-gray-200'">
                {{ cat }}
              </button>
            }
          </div>
        </div>

        <!-- Notices List -->
        <div class="space-y-4">
          @for (notice of filteredNotices(); track notice.id) {
            <article class="reveal bg-white rounded-2xl p-6 shadow-md card-hover border border-gray-100">
              <div class="flex flex-col sm:flex-row sm:items-center gap-4">
                <div class="sm:w-20 sm:text-center shrink-0">
                  <div class="text-2xl font-bold font-heading text-primary">{{ getDay(notice.date) }}</div>
                  <div class="text-xs text-muted uppercase">{{ getMonth(notice.date) }} {{ getYear(notice.date) }}</div>
                </div>
                <div class="flex-1">
                  <div class="flex flex-wrap items-center gap-2 mb-2">
                    @if (notice.important) {
                      <span class="px-2 py-0.5 rounded bg-red-100 text-red-700 text-xs font-semibold">Important</span>
                    }
                    <span class="px-2 py-0.5 rounded bg-primary/10 text-primary text-xs font-semibold">{{ notice.category }}</span>
                  </div>
                  <h3 class="text-lg font-bold font-heading text-dark mb-1">{{ notice.title }}</h3>
                  <p class="text-muted text-sm leading-relaxed">{{ notice.content }}</p>
                </div>
              </div>
            </article>
          } @empty {
            <div class="text-center py-16">
              <div class="text-5xl mb-4">📋</div>
              <h3 class="text-xl font-bold text-dark mb-2">No notices found</h3>
              <p class="text-muted">Try adjusting your search or filter criteria.</p>
            </div>
          }
        </div>
      </div>
    </section>
  `
})
export class ContactComponent implements OnInit, AfterViewInit, OnDestroy {
  private readonly seo = inject(SeoService);
  private readonly data = inject(DataService);
  private readonly scroll = inject(ScrollService);
  private readonly platformId = inject(PLATFORM_ID);

  allNotices = signal<Notice[]>([]);
  searchQuery = signal('');
  selectedCategory = signal('All');
  categories = ['All', 'Academic', 'Sports', 'Meeting', 'General', 'Admission', 'Achievement', 'Transport'];

  filteredNotices = computed(() => {
    let notices = this.allNotices();
    const query = this.searchQuery().toLowerCase();
    const cat = this.selectedCategory();
    if (cat !== 'All') notices = notices.filter(n => n.category === cat);
    if (query) notices = notices.filter(n => n.title.toLowerCase().includes(query) || n.content.toLowerCase().includes(query));
    return notices.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  });

  ngOnInit(): void {
    this.seo.updatePageMeta({ title: 'Notices', description: 'Latest notices and announcements from Greenfield International Academy.', canonicalPath: '/notices' });
    this.data.getNotices().subscribe(n => this.allNotices.set(n));
  }

  getDay(d: string): string { return new Date(d).getDate().toString().padStart(2, '0'); }
  getMonth(d: string): string { return new Date(d).toLocaleString('en', { month: 'short' }); }
  getYear(d: string): string { return new Date(d).getFullYear().toString(); }

  ngAfterViewInit(): void { if (isPlatformBrowser(this.platformId)) setTimeout(() => this.scroll.initScrollReveal(), 100); }
  ngOnDestroy(): void { this.scroll.destroy(); }
}
