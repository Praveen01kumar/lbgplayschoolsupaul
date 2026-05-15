import { Component, OnInit, AfterViewInit, OnDestroy, inject, signal, PLATFORM_ID, computed } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { firstValueFrom } from 'rxjs';
import { SeoService } from '../../core/services/seo.service';
import { DataService } from '../../core/services/data.service';
import { ScrollService } from '../../core/services/scroll.service';
import { SectionHeadingComponent } from '../../shared/section-heading/section-heading.component';
import { GalleryItem } from '../../models/gallery.model';
import { GALLERY_CONTENT } from '../../shared/constants';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, SectionHeadingComponent],
  template: `
    <section class="page-banner">
      <h1 class="font-heading">{{ content.BANNER.TITLE }}</h1>
      <p>{{ content.BANNER.SUBTITLE }}</p>
    </section>

    <section class="section-padding">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <app-section-heading 
          [title]="content.HEADER.TITLE" 
          [subtitle]="content.HEADER.SUBTITLE" 
          [description]="content.HEADER.DESC" 
        />

        <div class="flex flex-wrap justify-center gap-3 mb-10">
          @for (cat of content.CATEGORIES; track cat) {
            <button (click)="selectedCategory.set(cat)"
              class="px-5 py-2 rounded-full text-sm font-medium transition-all"
              [class]="selectedCategory() === cat ? 'bg-primary text-white shadow-md' : 'bg-gray-100 text-muted hover:bg-gray-200'">
              {{ cat }}
            </button>
          }
        </div>

        <div class="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          @for (item of filteredGallery(); track item.id) {
            <div class="reveal break-inside-avoid bg-white rounded-2xl shadow-md overflow-hidden card-hover group cursor-pointer" (click)="openLightbox(item)">
              <div class="relative overflow-hidden">
                <img [src]="item.thumbnail" [alt]="item.title" class="w-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" decoding="async" fetchpriority="high">
                <div class="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center">
                  <svg class="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/></svg>
                </div>
              </div>
              <div class="p-4">
                <h3 class="font-semibold text-dark text-sm">{{ item.title }}</h3>
                <p class="text-xs text-muted mt-1">{{ item.category }}</p>
              </div>
            </div>
          }
        </div>
      </div>
    </section>

    @if (lightboxItem()) {
      <div class="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in" (click)="closeLightbox()" role="dialog" aria-label="Image preview">
        <button class="absolute top-4 right-4 text-white hover:text-accent transition-colors p-2" aria-label="Close lightbox">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
        <div (click)="$event.stopPropagation()" class="max-w-5xl w-full">
          <img [src]="lightboxItem()!.image" [alt]="lightboxItem()!.title" class="w-full max-h-[80vh] object-contain rounded-xl" loading="lazy" decoding="async" fetchpriority="high">
          <div class="text-center mt-4">
            <h3 class="text-white text-lg font-semibold">{{ lightboxItem()!.title }}</h3>
            <p class="text-white/60 text-sm mt-1">{{ lightboxItem()!.description }}</p>
          </div>
        </div>
      </div>
    }
  `
})
export class GalleryComponent implements OnInit, AfterViewInit, OnDestroy {
  private readonly seo = inject(SeoService);
  private readonly data = inject(DataService);
  private readonly scroll = inject(ScrollService);
  private readonly platformId = inject(PLATFORM_ID);

  readonly content = GALLERY_CONTENT;
  readonly allGallery = signal<GalleryItem[]>([]);
  readonly selectedCategory = signal('All');
  readonly lightboxItem = signal<GalleryItem | null>(null);

  readonly filteredGallery = computed(() => {
    const category = this.selectedCategory();
    const items = this.allGallery();
    return category === 'All' ? items : items.filter(g => g.category === category);
  });

  async ngOnInit(): Promise<void> {
    const { SEO } = this.content;
    this.seo.updatePageMeta({
      title: SEO.TITLE,
      description: SEO.DESCRIPTION,
      canonicalPath: SEO.PATH
    });

    const items = await firstValueFrom(this.data.getGallery());
    this.allGallery.set(items);
  }

  openLightbox(item: GalleryItem): void {
    this.lightboxItem.set(item);
  }

  closeLightbox(): void {
    this.lightboxItem.set(null);
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