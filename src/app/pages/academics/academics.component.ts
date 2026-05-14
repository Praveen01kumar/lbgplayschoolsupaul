import { Component, OnInit, AfterViewInit, OnDestroy, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { SeoService } from '../../core/services/seo.service';
import { ScrollService } from '../../core/services/scroll.service';
import { SectionHeadingComponent } from '../../shared/section-heading/section-heading.component';

@Component({
  selector: 'app-academics',
  standalone: true,
  imports: [CommonModule, SectionHeadingComponent],
  template: `
    <section class="page-banner"><h1 class="font-heading">Academics</h1><p>Comprehensive curriculum designed for holistic development</p></section>

    <section class="section-padding">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="reveal">
            <span class="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary mb-4">Curriculum</span>
            <h2 class="text-3xl md:text-4xl font-bold font-heading text-dark mb-6">CBSE <span class="text-primary">Curriculum</span></h2>
            <p class="text-muted leading-relaxed mb-4">Our school follows the CBSE curriculum enriched with international best practices. We integrate STEAM education, experiential learning, and skill-based assessments to create a comprehensive educational experience.</p>
            <p class="text-muted leading-relaxed mb-6">From foundational literacy in primary years to advanced subject specialization in senior secondary, our academic programs are designed to nurture critical thinking, creativity, and a lifelong love for learning.</p>
            <div class="flex flex-wrap gap-3">
              @for (tag of ['CBSE Affiliated','STEAM Education','Project-Based Learning','Digital Classrooms']; track tag) {
                <span class="px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-semibold">{{ tag }}</span>
              }
            </div>
          </div>
          <div class="reveal-right">
            <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop" alt="Students studying in classroom" class="rounded-2xl shadow-2xl w-full object-cover" loading="lazy">
          </div>
        </div>
      </div>
    </section>

    <section class="section-padding bg-light">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <app-section-heading title="Our Departments" subtitle="Academic Wings" description="Specialized departments led by expert educators" />
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          @for (dept of departments; track dept.name) {
            <div class="reveal bg-white rounded-2xl p-6 shadow-md card-hover border border-gray-100 group">
              <div class="text-4xl mb-4 group-hover:scale-110 transition-transform">{{ dept.icon }}</div>
              <h3 class="text-lg font-bold font-heading text-dark mb-2">{{ dept.name }}</h3>
              <p class="text-muted text-sm leading-relaxed">{{ dept.description }}</p>
            </div>
          }
        </div>
      </div>
    </section>

    <section class="section-padding">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <app-section-heading title="Academic Programs" subtitle="Programs" description="Structured programs across all levels" />
        <div class="grid md:grid-cols-3 gap-6">
          @for (program of programs; track program.title) {
            <div class="reveal bg-white rounded-2xl overflow-hidden shadow-md card-hover border border-gray-100">
              <div class="h-3" [style.background]="program.color"></div>
              <div class="p-6">
                <h3 class="text-xl font-bold font-heading text-dark mb-2">{{ program.title }}</h3>
                <p class="text-xs text-primary font-semibold mb-3">{{ program.grades }}</p>
                <p class="text-muted text-sm leading-relaxed mb-4">{{ program.description }}</p>
                <ul class="space-y-2">
                  @for (feature of program.features; track feature) {
                    <li class="flex items-center gap-2 text-sm text-muted">
                      <svg class="w-4 h-4 text-accent shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                      {{ feature }}
                    </li>
                  }
                </ul>
              </div>
            </div>
          }
        </div>
      </div>
    </section>

    <section class="section-padding gradient-dark text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <span class="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-accent/20 text-accent mb-4">Methodology</span>
          <h2 class="text-3xl md:text-4xl font-bold font-heading mb-4">Teaching Methodology</h2>
          <p class="text-white/70 max-w-2xl mx-auto">Our innovative approach to education</p>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          @for (method of methods; track method.title) {
            <div class="reveal bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 hover:bg-white/20 transition-all">
              <div class="text-4xl mb-4">{{ method.icon }}</div>
              <h3 class="text-lg font-bold font-heading mb-2">{{ method.title }}</h3>
              <p class="text-white/70 text-sm">{{ method.description }}</p>
            </div>
          }
        </div>
      </div>
    </section>
  `
})
export class AcademicsComponent implements OnInit, AfterViewInit, OnDestroy {
  private readonly seo = inject(SeoService);
  private readonly scroll = inject(ScrollService);
  private readonly platformId = inject(PLATFORM_ID);

  departments = [
    { icon: '🔬', name: 'Science', description: 'Physics, Chemistry, Biology with advanced lab facilities.' },
    { icon: '📐', name: 'Mathematics', description: 'Strong mathematical foundation with problem-solving focus.' },
    { icon: '📖', name: 'Languages', description: 'English, Hindi, and third language options with literature focus.' },
    { icon: '🌍', name: 'Social Studies', description: 'History, Geography, Civics, and Economics for global awareness.' },
    { icon: '💻', name: 'Computer Science', description: 'Coding, AI, robotics, and digital literacy programs.' },
    { icon: '🎨', name: 'Arts & Humanities', description: 'Visual arts, music, drama, and creative expression.' }
  ];

  programs = [
    { title: 'Primary School', grades: 'Nursery - Grade 5', color: '#3b82f6', description: 'Foundation years focused on building literacy, numeracy, and curiosity.', features: ['Activity-based learning', 'Phonics & reading program', 'Environmental awareness', 'Value education'] },
    { title: 'Middle School', grades: 'Grade 6 - Grade 8', color: '#d4a843', description: 'Transitional years developing analytical thinking and subject depth.', features: ['Subject specialization', 'Lab-based science', 'Research projects', 'Leadership programs'] },
    { title: 'Senior Secondary', grades: 'Grade 9 - Grade 12', color: '#1e3a8a', description: 'Advanced academics with board exam preparation and career guidance.', features: ['CBSE board preparation', 'Stream selection (Sci/Com/Arts)', 'Career counseling', 'Competitive exam coaching'] }
  ];

  methods = [
    { icon: '🎯', title: 'Experiential', description: 'Hands-on activities and real-world applications' },
    { icon: '🤝', title: 'Collaborative', description: 'Group projects and peer-to-peer learning' },
    { icon: '💡', title: 'Inquiry-Based', description: 'Student-driven questions and exploration' },
    { icon: '📊', title: 'Data-Driven', description: 'Continuous assessment and personalized feedback' }
  ];

  ngOnInit(): void {
    this.seo.updatePageMeta({ title: 'Academics', description: 'Explore our CBSE curriculum, departments, and academic programs at Greenfield International Academy.', canonicalPath: '/academics' });
  }
  ngAfterViewInit(): void { if (isPlatformBrowser(this.platformId)) setTimeout(() => this.scroll.initScrollReveal(), 100); }
  ngOnDestroy(): void { this.scroll.destroy(); }
}
