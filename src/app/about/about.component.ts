import { Component } from '@angular/core';

import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import {
  faCalendarDays,
  faChevronDown,
  faEnvelope,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  faCalendarDays = faCalendarDays;
  faChevronDown = faChevronDown;
  faEnvelope = faEnvelope;
  faLocationDot = faLocationDot;
  faFacebook = faFacebook;
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faInstagram = faInstagram;

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
