import { Component } from '@angular/core';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css'],
})
export class TechnologiesComponent {
  faLaptopCode = faLaptopCode;
}
