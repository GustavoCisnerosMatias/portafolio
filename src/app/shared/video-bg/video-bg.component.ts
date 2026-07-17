import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-video-bg',
  templateUrl: './video-bg.component.html',
  styles: [`
    :host {
      position: absolute;
      inset: 0;
      overflow: hidden;
      z-index: 0;
      pointer-events: none;
    }
    video {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .overlay {
      position: absolute;
      inset: 0;
    }
  `]
})
export class VideoBgComponent {
  @Input() src!: string;
  /** CSS color string for the overlay, e.g. 'rgba(255,255,255,0.55)' */
  @Input() overlay: string = 'rgba(255,255,255,0.55)';
}
