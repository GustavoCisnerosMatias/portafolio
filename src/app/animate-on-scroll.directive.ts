import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[animateOnScroll]'
})
export class AnimateOnScrollDirective implements OnInit {
  @Input() animDelay = 0;
  @Input() animDir: 'up' | 'left' | 'right' = 'up';

  constructor(private el: ElementRef) {}

  ngOnInit() {
    const el: HTMLElement = this.el.nativeElement;

    const translateMap = {
      up: 'translateY(30px)',
      left: 'translateX(-40px)',
      right: 'translateX(40px)'
    };

    el.style.opacity = '0';
    el.style.transform = translateMap[this.animDir];
    el.style.transition = `opacity 0.6s ease ${this.animDelay}ms, transform 0.6s ease ${this.animDelay}ms`;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'translate(0, 0)';
          observer.disconnect();
        }
      });
    }, { threshold: 0.15 });

    observer.observe(el);
  }
}
