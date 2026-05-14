import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-heading',
  standalone: true,
  template: `
    <div class="text-center mb-12">
      <span class="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary mb-4">
        {{ subtitle }}
      </span>
      <h2 class="text-3xl md:text-4xl font-bold font-heading text-dark mb-4">
        {{ title }}
      </h2>
      @if (description) {
        <p class="text-muted max-w-2xl mx-auto text-lg">
          {{ description }}
        </p>
      }
      <div class="mt-5 flex items-center justify-center gap-2">
        <span class="w-8 h-1 rounded-full bg-accent"></span>
        <span class="w-16 h-1 rounded-full bg-primary"></span>
        <span class="w-8 h-1 rounded-full bg-accent"></span>
      </div>
    </div>
  `
})
export class SectionHeadingComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) subtitle!: string;
  @Input() description?: string;
}
