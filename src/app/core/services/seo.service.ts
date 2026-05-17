import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);

  private readonly siteName = 'Little Buds Garden Play School';
  private readonly siteUrl = 'https://littlebudsgardenplayschool.in';

  updatePageMeta(config: {
    title: string;
    description: string;
    keywords?: string;
    ogImage?: string;
    canonicalPath?: string;
  }): void {
    const fullTitle = `${config.title} | ${this.siteName}`;
    // Title
    this.title.setTitle(fullTitle);
    // Standard meta tags
    this.meta.updateTag({ name: 'description', content: config.description });
    if (config.keywords) {this.meta.updateTag({ name: 'keywords', content: config.keywords });}
    // Open Graph tags
    this.meta.updateTag({ property: 'og:title', content: fullTitle });
    this.meta.updateTag({ property: 'og:description', content: config.description });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:site_name', content: this.siteName });
    if (config.ogImage) {      this.meta.updateTag({ property: 'og:image', content: config.ogImage });    }
    // Twitter Card tags
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: fullTitle });
    this.meta.updateTag({ name: 'twitter:description', content: config.description });
    // Canonical URL
    if (config.canonicalPath && isPlatformBrowser(this.platformId)) {
      this.updateCanonicalUrl(`${this.siteUrl}${config.canonicalPath}`);
    }
  }

  setJsonLd(data: object): void {
    if (!isPlatformBrowser(this.platformId)) return;

    // Remove existing JSON-LD
    const existing = this.document.querySelector('script[type="application/ld+json"]');
    if (existing) {
      existing.remove();
    }

    const script = this.document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    this.document.head.appendChild(script);
  }

  private updateCanonicalUrl(url: string): void {
    let link: HTMLLinkElement | null = this.document.querySelector('link[rel="canonical"]');
    if (link) {
      link.href = url;
    } else {
      link = this.document.createElement('link');
      link.rel = 'canonical';
      link.href = url;
      this.document.head.appendChild(link);
    }
  }
}
