import { Component, OnInit, AfterViewInit, OnDestroy, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { SeoService } from '../../core/services/seo.service';
import { ScrollService } from '../../core/services/scroll.service';
import { SectionHeadingComponent } from '../../shared/section-heading/section-heading.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, SectionHeadingComponent],
  template: `
    <!-- Page Banner -->
    <section class="page-banner" aria-label="About page header">
      <h1 class="font-heading">About Us</h1>
      <p>Discover our legacy of educational excellence spanning three decades</p>
    </section>

    <!-- History -->
    <section class="section-padding" aria-label="School history">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="reveal">
            <span class="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary mb-4">Our Story</span>
            <h2 class="text-3xl md:text-4xl font-bold font-heading text-dark mb-6">A Legacy Since <span class="text-primary">1995</span></h2>
            <p class="text-muted leading-relaxed mb-4">
              Greenfield International Academy was founded in 1995 by a group of visionary educators who believed that quality education should be accessible to all. What started as a small school with just 50 students and 5 teachers has now grown into a premier institution with over 2,500 students and 150 dedicated faculty members.
            </p>
            <p class="text-muted leading-relaxed mb-4">
              Over three decades, we have continuously evolved our teaching methods, expanded our facilities, and embraced technology while staying true to our core values of integrity, excellence, and compassion.
            </p>
            <p class="text-muted leading-relaxed">
              Today, Greenfield International Academy stands as a testament to what can be achieved when passion meets purpose — producing generations of confident, capable, and caring individuals who make a positive impact on the world.
            </p>
          </div>
          <div class="reveal-right">
            <img src="https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=450&fit=crop"
                 alt="Greenfield International Academy campus aerial view"
                 class="rounded-2xl shadow-2xl w-full object-cover" loading="lazy">
          </div>
        </div>
      </div>
    </section>

    <!-- Vision & Mission -->
    <section class="section-padding bg-light" aria-label="Vision and mission">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <app-section-heading title="Vision & Mission" subtitle="Our Purpose" description="Guiding principles that drive everything we do" />
        <div class="grid md:grid-cols-2 gap-8">
          <div class="reveal bg-white rounded-2xl p-8 shadow-md border border-gray-100 card-hover">
            <div class="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
            </div>
            <h3 class="text-2xl font-bold font-heading text-dark mb-4">Our Vision</h3>
            <p class="text-muted leading-relaxed">
              To be a globally recognized institution that nurtures innovative thinkers, compassionate leaders, and responsible citizens who are prepared to shape a sustainable and equitable future.
            </p>
          </div>
          <div class="reveal bg-white rounded-2xl p-8 shadow-md border border-gray-100 card-hover">
            <div class="w-16 h-16 rounded-2xl gradient-accent flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
            </div>
            <h3 class="text-2xl font-bold font-heading text-dark mb-4">Our Mission</h3>
            <p class="text-muted leading-relaxed">
              To provide a holistic, inclusive, and stimulating learning environment that empowers students with knowledge, skills, and values to excel academically, grow personally, and contribute meaningfully to society.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Campus Overview -->
    <section class="section-padding" aria-label="Campus overview">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <app-section-heading title="Our Campus" subtitle="Infrastructure" description="A world-class campus designed to inspire learning" />
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          @for (facility of facilities; track facility.title) {
            <div class="reveal bg-white rounded-2xl p-6 shadow-md card-hover border border-gray-100 group">
              <div class="text-4xl mb-4 group-hover:scale-110 transition-transform">{{ facility.icon }}</div>
              <h3 class="text-lg font-bold font-heading text-dark mb-2">{{ facility.title }}</h3>
              <p class="text-muted text-sm leading-relaxed">{{ facility.description }}</p>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="section-padding gradient-dark text-white" aria-label="School values">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <span class="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-accent/20 text-accent mb-4">Core Values</span>
          <h2 class="text-3xl md:text-4xl font-bold font-heading mb-4">Values We Live By</h2>
          <p class="text-white/70 max-w-2xl mx-auto text-lg">The pillars that define our school culture</p>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          @for (value of values; track value.title) {
            <div class="reveal bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 hover:bg-white/20 transition-all">
              <div class="text-4xl mb-4">{{ value.icon }}</div>
              <h3 class="text-lg font-bold font-heading mb-2">{{ value.title }}</h3>
              <p class="text-white/70 text-sm">{{ value.description }}</p>
            </div>
          }
        </div>
      </div>
    </section>
  `
})
export class AboutComponent implements OnInit, AfterViewInit, OnDestroy {
  private readonly seo = inject(SeoService);
  private readonly scroll = inject(ScrollService);
  private readonly platformId = inject(PLATFORM_ID);

  facilities = [
    { icon: '🏫', title: 'Smart Classrooms', description: 'Air-conditioned classrooms equipped with interactive whiteboards, projectors, and digital learning tools.' },
    { icon: '🔬', title: 'Science Laboratories', description: 'Fully equipped Physics, Chemistry, and Biology labs for hands-on learning and experimentation.' },
    { icon: '💻', title: 'Computer Labs', description: 'State-of-the-art computer labs with high-speed internet and latest software for digital literacy.' },
    { icon: '📚', title: 'Library', description: 'A well-stocked library with over 15,000 books, digital resources, and a dedicated reading zone.' },
    { icon: '🏊', title: 'Swimming Pool', description: 'Olympic-size swimming pool with trained instructors for swimming lessons and competitive training.' },
    { icon: '⚽', title: 'Sports Complex', description: 'Multi-sport complex with cricket ground, basketball court, football field, and indoor games.' },
    { icon: '🎭', title: 'Auditorium', description: '800-seat auditorium with professional sound and lighting for events and performances.' },
    { icon: '🎨', title: 'Art & Music Studio', description: 'Dedicated studios for visual arts, music, and performing arts with professional equipment.' },
    { icon: '🚌', title: 'Transport', description: 'GPS-enabled bus fleet covering major routes with trained drivers and attendants.' }
  ];

  values = [
    { icon: '⭐', title: 'Excellence', description: 'Striving for the highest standards in everything we do' },
    { icon: '🤝', title: 'Integrity', description: 'Acting with honesty, fairness, and ethical responsibility' },
    { icon: '💡', title: 'Innovation', description: 'Embracing creativity and forward-thinking approaches' },
    { icon: '❤️', title: 'Compassion', description: 'Fostering empathy, kindness, and respect for all' }
  ];

  ngOnInit(): void {
    this.seo.updatePageMeta({
      title: 'About Us',
      description: 'Learn about Greenfield International Academy\'s rich history, vision, mission, world-class campus, and values since 1995.',
      keywords: 'about school, history, vision, mission, campus, facilities',
      canonicalPath: '/about'
    });
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => this.scroll.initScrollReveal(), 100);
    }
  }

  ngOnDestroy(): void { this.scroll.destroy(); }
}
