import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay } from 'rxjs';
import { Notice } from '../../models/notice.model';
import { SchoolEvent } from '../../models/event.model';
import { FacultyMember } from '../../models/faculty.model';
import { Testimonial } from '../../models/testimonial.model';
import { GalleryItem } from '../../models/gallery.model';
import { FAQ } from '../../models/faq.model';
import { isPlatformServer } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly http = inject(HttpClient);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly basePath = this.getBasePath();

  private getBasePath(): string {
    if (isPlatformServer(this.platformId)) {
      return 'http://localhost:4200/assets/data';
    }
    return '/assets/data';
  }

  // Cached observables
  private notices$?: Observable<Notice[]>;
  private events$?: Observable<SchoolEvent[]>;
  private faculty$?: Observable<FacultyMember[]>;
  private testimonials$?: Observable<Testimonial[]>;
  private gallery$?: Observable<GalleryItem[]>;
  private statistics$?: Observable<any>;
  private faq$?: Observable<FAQ[]>;

  getNotices(): Observable<Notice[]> {
    if (!this.notices$) {
      this.notices$ = this.http.get<Notice[]>(`${this.basePath}/notices.json`).pipe(shareReplay(1));
    }
    return this.notices$;
  }

  getEvents(): Observable<SchoolEvent[]> {
    if (!this.events$) {
      this.events$ = this.http.get<SchoolEvent[]>(`${this.basePath}/events.json`).pipe(shareReplay(1));
    }
    return this.events$;
  }

  getFaculty(): Observable<FacultyMember[]> {
    if (!this.faculty$) {
      this.faculty$ = this.http.get<FacultyMember[]>(`${this.basePath}/faculty.json`).pipe(shareReplay(1));
    }
    return this.faculty$;
  }

  getTestimonials(): Observable<Testimonial[]> {
    if (!this.testimonials$) {
      this.testimonials$ = this.http.get<Testimonial[]>(`${this.basePath}/testimonials.json`).pipe(shareReplay(1));
    }
    return this.testimonials$;
  }

  getGallery(): Observable<GalleryItem[]> {
    if (!this.gallery$) {
      this.gallery$ = this.http.get<GalleryItem[]>(`${this.basePath}/gallery.json`).pipe(shareReplay(1));
    }
    return this.gallery$;
  }

  getStatistics(): Observable<any> {
    if (!this.statistics$) {
      this.statistics$ = this.http.get<any>(`${this.basePath}/statistics.json`).pipe(shareReplay(1));
    }
    return this.statistics$;
  }

  getFaq(): Observable<FAQ[]> {
    if (!this.faq$) {
      this.faq$ = this.http.get<FAQ[]>(`${this.basePath}/faq.json`).pipe(shareReplay(1));
    }
    return this.faq$;
  }
}
