import { Component } from '@angular/core';
import {
  faArrowLeft,
  faArrowUpRightFromSquare,
  faShieldHalved,
  faTerminal,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-writeup-htb-cap',
  templateUrl: './writeup-htb-cap.component.html',
  styleUrls: ['./writeup-htb-cap.component.css'],
})
export class WriteupHtbCapComponent {
  faArrowLeft = faArrowLeft;
  faExternalLink = faArrowUpRightFromSquare;
  faShieldHalved = faShieldHalved;
  faTerminal = faTerminal;

  readonly htbProfileUrl = 'https://profile.hackthebox.com/profile/019dd9d6-3075-73f4-8d62-5b123346e6fc';
  readonly htbAchievementUrl = 'https://labs.hackthebox.com/achievement/machine/2142131/351';

  flagRevealed: { [key: string]: boolean } = {
    user: false,
    root: false,
  };

  toggleFlag(key: string): void {
    this.flagRevealed[key] = !this.flagRevealed[key];
  }
}
