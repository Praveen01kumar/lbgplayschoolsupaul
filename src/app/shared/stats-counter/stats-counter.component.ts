import { Component, Input, signal, inject, PLATFORM_ID, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-stats-counter',
  standalone: true,
  template: `
    <div class="text-center p-6" #counterEl>
      <div class="text-4xl md:text-5xl font-bold text-white mb-2 font-heading">
        {{ displayValue() }}{{ suffix }}
      </div>
      <p class="text-white/80 text-sm md:text-base">{{ label }}</p>
    </div>
  `
})
export class StatsCounterComponent implements AfterViewInit, OnDestroy {
  @Input({ required: true }) targetValue!: number;
  @Input({ required: true }) label!: string;
  @Input() suffix = '+';
  @Input() duration = 2000;

  private readonly platformId = inject(PLATFORM_ID);
  private readonly elementRef = inject(ElementRef);

  displayValue = signal(0);
  private observer?: IntersectionObserver;
  private animated = false;

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    this.observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !this.animated) {
          this.animated = true;
          this.animateCount();
        }
      },
      { threshold: 0.5 }
    );

    this.observer.observe(this.elementRef.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private animateCount(): void {
    const startTime = performance.now();
    const target = this.targetValue;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / this.duration, 1);

      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      this.displayValue.set(Math.floor(eased * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        this.displayValue.set(target);
      }
    };

    requestAnimationFrame(animate);
  }
}
