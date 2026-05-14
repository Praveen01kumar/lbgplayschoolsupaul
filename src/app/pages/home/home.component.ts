import { Component, OnInit, OnDestroy, inject, signal, AfterViewInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/services/seo.service';
import { DataService } from '../../core/services/data.service';
import { ScrollService } from '../../core/services/scroll.service';
import { SectionHeadingComponent } from '../../shared/section-heading/section-heading.component';
import { StatsCounterComponent } from '../../shared/stats-counter/stats-counter.component';
import { Notice } from '../../models/notice.model';
import { SchoolEvent } from '../../models/event.model';
import { Testimonial } from '../../models/testimonial.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, SectionHeadingComponent, StatsCounterComponent],
  template: `
    <!-- ===== HERO SECTION ===== -->
    <section class="relative min-h-[90vh] flex items-center overflow-hidden" aria-label="Hero">
      <!-- Background -->
      <div class="absolute inset-0 gradient-dark"></div>
      <div class="absolute inset-0 opacity-20"
           style="background-image: url('https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1920&h=1080&fit=crop'); background-size: cover; background-position: center;">
      </div>
      <div class="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>

      <!-- Decorative Elements -->
      <div class="absolute top-20 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-float"></div>
      <div class="absolute bottom-20 left-10 w-96 h-96 bg-primary-light/20 rounded-full blur-3xl"></div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div class="max-w-3xl">
          <span class="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-semibold mb-6 animate-fade-in">
            🏫 Admissions Open for 2026-27
          </span>
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-heading leading-tight mb-6 animate-fade-in-up">
            Nurturing Minds,
            <span class="text-accent">Shaping Futures</span>
          </h1>
          <p class="text-lg sm:text-xl text-white/80 mb-8 leading-relaxed max-w-2xl animate-fade-in-up" style="animation-delay: 0.2s">
            At Greenfield International Academy, we cultivate academic excellence, creativity, and character to prepare students for the challenges of tomorrow.
          </p>
          <div class="flex flex-wrap gap-4 animate-fade-in-up" style="animation-delay: 0.4s">
            <a routerLink="/admissions"
               class="px-8 py-4 bg-accent text-white font-semibold rounded-xl hover:bg-accent-dark transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
              Apply for Admission
            </a>
            <a routerLink="/about"
               class="px-8 py-4 bg-white/10 text-white font-semibold rounded-xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
              Explore Our School
            </a>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg class="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
        </svg>
      </div>
    </section>

    <!-- ===== QUICK LINKS ===== -->
    <section class="relative -mt-16 z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Quick links">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        @for (link of quickLinks; track link.label) {
          <a [routerLink]="link.path"
             class="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
            <div class="w-14 h-14 rounded-xl gradient-primary mx-auto mb-3 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
              {{ link.icon }}
            </div>
            <h3 class="font-semibold text-dark text-sm">{{ link.label }}</h3>
          </a>
        }
      </div>
    </section>

    <!-- ===== ABOUT INTRO ===== -->
    <section class="section-padding" aria-label="School introduction">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="reveal">
            <span class="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary mb-4">
              About Us
            </span>
            <h2 class="text-3xl md:text-4xl font-bold font-heading text-dark mb-6">
              30 Years of <span class="text-primary">Academic Excellence</span>
            </h2>
            <p class="text-muted leading-relaxed mb-4">
              Since 1995, Greenfield International Academy has been a beacon of quality education. We believe in nurturing the whole child — mind, body, and spirit — through innovative teaching methods, state-of-the-art facilities, and a caring community.
            </p>
            <p class="text-muted leading-relaxed mb-6">
              Our CBSE-affiliated curriculum, combined with a strong emphasis on extracurricular activities, ensures that every student develops the skills, knowledge, and values needed to thrive in a rapidly changing world.
            </p>
            <div class="flex flex-wrap gap-4">
              <div class="flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-accent"></span>
                <span class="text-sm font-medium text-dark">CBSE Affiliated</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-accent"></span>
                <span class="text-sm font-medium text-dark">Smart Classrooms</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-accent"></span>
                <span class="text-sm font-medium text-dark">15 Acre Campus</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-accent"></span>
                <span class="text-sm font-medium text-dark">100% Results</span>
              </div>
            </div>
            <a routerLink="/about" class="inline-flex items-center gap-2 mt-8 text-primary font-semibold hover:gap-3 transition-all">
              Learn More About Us
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </a>
          </div>
          <div class="reveal-right">
            <div class="relative">
              <img src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop"
                   alt="Students learning in a modern classroom at Greenfield International Academy"
                   class="rounded-2xl shadow-2xl w-full object-cover"
                   loading="lazy">
              <div class="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl">
                <div class="text-3xl font-bold font-heading">30+</div>
                <div class="text-sm opacity-90">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== STATISTICS ===== -->
    <section class="gradient-primary section-padding" aria-label="School statistics">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <app-stats-counter [targetValue]="2500" label="Students Enrolled" />
          <app-stats-counter [targetValue]="150" label="Expert Teachers" />
          <app-stats-counter [targetValue]="30" label="Years of Excellence" />
          <app-stats-counter [targetValue]="200" label="Awards Won" />
        </div>
      </div>
    </section>

    <!-- ===== PRINCIPAL'S MESSAGE ===== -->
    <section class="section-padding bg-light" aria-label="Principal's message">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="reveal-left order-2 lg:order-1">
            <div class="relative">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=600&fit=crop&crop=face"
                   alt="Dr. Ananya Sharma - Principal of Greenfield International Academy"
                   class="rounded-2xl shadow-2xl w-full object-cover max-h-[500px]"
                   loading="lazy">
              <div class="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
                <p class="font-bold text-dark text-sm">Dr. Ananya Sharma</p>
                <p class="text-xs text-muted">Principal, GIA</p>
              </div>
            </div>
          </div>
          <div class="reveal order-1 lg:order-2">
            <span class="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-accent/10 text-accent mb-4">
              Principal's Desk
            </span>
            <h2 class="text-3xl md:text-4xl font-bold font-heading text-dark mb-6">
              A Message from <span class="text-primary">Our Principal</span>
            </h2>
            <blockquote class="border-l-4 border-accent pl-6 mb-6">
              <p class="text-muted leading-relaxed italic text-lg">
                "Education is not merely about filling minds with information — it is about igniting the spark of curiosity, building character, and empowering young people to create a better world."
              </p>
            </blockquote>
            <p class="text-muted leading-relaxed mb-4">
              Welcome to Greenfield International Academy. With over 25 years of experience in education, I am committed to ensuring that every child who walks through our doors receives the best possible education in a nurturing environment.
            </p>
            <p class="text-muted leading-relaxed">
              Our dedicated faculty, modern infrastructure, and innovative curriculum work together to provide a learning experience that prepares students not just for exams, but for life.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== ACHIEVEMENTS ===== -->
    <section class="section-padding" aria-label="Achievements">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <app-section-heading
          title="Our Achievements"
          subtitle="Pride"
          description="Celebrating the milestones that make us proud"
        />
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          @for (achievement of achievements; track achievement.title) {
            <div class="reveal bg-white rounded-2xl p-8 shadow-md card-hover border border-gray-100">
              <div class="text-4xl mb-4">{{ achievement.icon }}</div>
              <h3 class="text-xl font-bold font-heading text-dark mb-2">{{ achievement.title }}</h3>
              <p class="text-muted text-sm leading-relaxed">{{ achievement.description }}</p>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- ===== LATEST NOTICES ===== -->
    <section class="section-padding bg-light" aria-label="Latest notices">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <app-section-heading
          title="Latest Notices"
          subtitle="Updates"
          description="Stay informed with the latest announcements"
        />
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          @for (notice of latestNotices(); track notice.id) {
            <article class="reveal bg-white rounded-2xl p-6 shadow-md card-hover border border-gray-100">
              <div class="flex items-center gap-3 mb-4">
                <span class="px-3 py-1 rounded-full text-xs font-semibold"
                      [class]="notice.important ? 'bg-red-100 text-red-700' : 'bg-primary/10 text-primary'">
                  {{ notice.category }}
                </span>
                <span class="text-xs text-muted">{{ notice.date }}</span>
              </div>
              <h3 class="text-lg font-bold font-heading text-dark mb-2 line-clamp-2">{{ notice.title }}</h3>
              <p class="text-muted text-sm leading-relaxed line-clamp-3">{{ notice.content }}</p>
            </article>
          }
        </div>
        <div class="text-center mt-10">
          <a routerLink="/notices" class="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary rounded-xl font-semibold hover:bg-primary-dark transition-all shadow-md hover:shadow-lg">
            View All Notices
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </a>
        </div>
      </div>
    </section>

    <!-- ===== UPCOMING EVENTS ===== -->
    <section class="section-padding" aria-label="Upcoming events">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <app-section-heading
          title="Upcoming Events"
          subtitle="Calendar"
          description="Join us in our exciting upcoming events"
        />
        <div class="grid md:grid-cols-2 gap-6">
          @for (event of upcomingEvents(); track event.id) {
            <article class="reveal bg-white rounded-2xl shadow-md card-hover border border-gray-100 overflow-hidden flex flex-col sm:flex-row">
              <div class="sm:w-32 gradient-primary flex flex-col items-center justify-center p-4 text-white shrink-0">
                <span class="text-3xl font-bold font-heading">{{ getDay(event.date) }}</span>
                <span class="text-sm uppercase">{{ getMonth(event.date) }}</span>
                <span class="text-xs opacity-80">{{ getYear(event.date) }}</span>
              </div>
              <div class="p-6 flex-1">
                @if (event.featured) {
                  <span class="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold mb-2">⭐ Featured</span>
                }
                <h3 class="text-lg font-bold font-heading text-dark mb-2">{{ event.title }}</h3>
                <p class="text-muted text-sm mb-3 line-clamp-2">{{ event.description }}</p>
                <div class="flex items-center gap-4 text-xs text-muted">
                  <span class="flex items-center gap-1">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    {{ event.time }}
                  </span>
                  <span class="flex items-center gap-1">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/></svg>
                    {{ event.location }}
                  </span>
                </div>
              </div>
            </article>
          }
        </div>
        <div class="text-center mt-10">
          <a routerLink="/events" class="inline-flex items-center gap-2 px-8 py-3 border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary hover:text-primary transition-all">
            View All Events
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </a>
        </div>
      </div>
    </section>

    <!-- ===== TESTIMONIALS ===== -->
    <section class="section-padding gradient-dark text-white" aria-label="Testimonials">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <span class="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-accent/20 text-accent mb-4">
            Testimonials
          </span>
          <h2 class="text-3xl md:text-4xl font-bold font-heading mb-4">
            What Parents & Alumni Say
          </h2>
          <p class="text-white/70 max-w-2xl mx-auto text-lg">Hear from our school community</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          @for (testimonial of testimonials(); track testimonial.id) {
            <div class="reveal bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div class="flex gap-1 mb-4">
                @for (star of [1,2,3,4,5]; track star) {
                  <svg class="w-5 h-5" [class]="star <= testimonial.rating ? 'text-accent' : 'text-white/20'" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                }
              </div>
              <p class="text-white/80 text-sm leading-relaxed mb-5 italic">"{{ testimonial.quote }}"</p>
              <div class="flex items-center gap-3">
                <img [src]="testimonial.photo" [alt]="testimonial.name"
                     class="w-11 h-11 rounded-full object-cover border-2 border-accent" loading="lazy">
                <div>
                  <p class="font-semibold text-sm">{{ testimonial.name }}</p>
                  <p class="text-xs text-white/60">{{ testimonial.role }}</p>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- ===== CTA SECTION ===== -->
    <section class="section-padding" aria-label="Call to action">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="reveal gradient-accent rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
          <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div class="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
          <div class="relative">
            <h2 class="text-3xl md:text-4xl font-bold font-heading mb-4">Ready to Join Our Family?</h2>
            <p class="text-white/90 max-w-xl mx-auto mb-8 text-lg">
              Give your child the gift of quality education. Admissions are now open for the 2026-27 academic session.
            </p>
            <div class="flex flex-wrap justify-center gap-4">
              <a routerLink="/admissions"
                 class="px-8 py-4 bg-white text-accent-dark font-bold rounded-xl hover:bg-white/90 transition-all shadow-lg hover:shadow-xl text-primry hover:-translate-y-1">
                Apply Now
              </a>
              <a routerLink="/contact"
                 class="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  private readonly seo = inject(SeoService);
  private readonly data = inject(DataService);
  private readonly scroll = inject(ScrollService);
  private readonly platformId = inject(PLATFORM_ID);

  latestNotices = signal<Notice[]>([]);
  upcomingEvents = signal<SchoolEvent[]>([]);
  testimonials = signal<Testimonial[]>([]);

  quickLinks = [
    { icon: '📋', label: 'Admissions', path: '/admissions' },
    { icon: '📚', label: 'Academics', path: '/academics' },
    { icon: '📅', label: 'Events', path: '/events' },
    { icon: '📞', label: 'Contact Us', path: '/contact' }
  ];

  achievements = [
    { icon: '🏆', title: '100% Board Results', description: 'Consistently achieving 100% pass rate in CBSE board examinations for the past 10 years.' },
    { icon: '🥇', title: 'National Science Olympiad', description: 'Our students secured top 10 positions in the National Science Olympiad three years running.' },
    { icon: '⚽', title: 'State Sports Champions', description: 'Winners of the State-Level Inter-School Sports Championship in cricket, basketball, and athletics.' },
    { icon: '🎨', title: 'INTACH Heritage Award', description: 'Recognized by INTACH for outstanding contributions to heritage awareness and conservation education.' },
    { icon: '💻', title: 'Digital Innovation Award', description: 'Awarded for pioneering STEAM education and robotics curriculum in the region.' },
    { icon: '🌱', title: 'Green School Certification', description: 'Certified as an eco-friendly campus with sustainable practices and environmental education programs.' }
  ];

  ngOnInit(): void {
    this.seo.updatePageMeta({
      title: 'Home',
      description: 'Greenfield International Academy - A premier institution committed to academic excellence, holistic development, and nurturing future leaders since 1995.',
      keywords: 'school, education, academy, CBSE, admissions, international school',
      canonicalPath: '/'
    });

    this.seo.setJsonLd({
      '@context': 'https://schema.org',
      '@type': 'School',
      'name': 'Greenfield International Academy',
      'description': 'A premier institution committed to academic excellence, holistic development, and nurturing future leaders since 1995.',
      'url': 'https://greenfieldacademy.edu',
      'telephone': '+919876543210',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '123 Education Lane, Knowledge Park',
        'addressLocality': 'City',
        'postalCode': '110001',
        'addressCountry': 'IN'
      },
      'foundingDate': '1995'
    });

    this.data.getNotices().subscribe(notices => {
      this.latestNotices.set(notices.slice(0, 3));
    });

    this.data.getEvents().subscribe(events => {
      this.upcomingEvents.set(events.filter(e => new Date(e.date) >= new Date()).slice(0, 4));
    });

    this.data.getTestimonials().subscribe(t => {
      this.testimonials.set(t.slice(0, 3));
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

  getDay(date: string): string {
    return new Date(date).getDate().toString().padStart(2, '0');
  }

  getMonth(date: string): string {
    return new Date(date).toLocaleString('en', { month: 'short' });
  }

  getYear(date: string): string {
    return new Date(date).getFullYear().toString();
  }
}
