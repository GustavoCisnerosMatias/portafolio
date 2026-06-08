import { Component } from '@angular/core';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css'],
})
export class TechnologiesComponent {
  faLaptopCode = faLaptopCode;

  skillCategories = [
    { title: 'Backend', gradient: 'linear-gradient(to right,#a855f7,#ec4899)', skills: ['NestJS','Spring Boot','Express','Laravel','Node.js','Fat-Free Framework','PHP','Java','Python'] },
    { title: 'Frontend', gradient: 'linear-gradient(to right,#3b82f6,#06b6d4)', skills: ['Angular','Ionic','JavaScript','TypeScript','HTML5','CSS3','FXML','Responsive Design'] },
    { title: 'Bases de Datos', gradient: 'linear-gradient(to right,#22c55e,#10b981)', skills: ['SQL Server','MySQL','PostgreSQL','MongoDB','Firestore','NoSQL','Database Design'] },
    { title: 'DevOps & Herramientas', gradient: 'linear-gradient(to right,#f97316,#ef4444)', skills: ['Git','GitHub','AWS Cloud','Deployment','Linux','Server Management','CI/CD','Docker'] },
    { title: 'IoT & Sistemas Especializados', gradient: 'linear-gradient(to right,#6366f1,#a855f7)', skills: ['IoT Development','Real-time Systems','ECG Monitoring','Signal Processing','Statistical Analysis','Data Visualization'] },
    { title: 'Seguridad & Hacking', gradient: 'linear-gradient(to right,#ef4444,#ec4899)', skills: ['Ethical Hacking','Pentesting','Social Engineering','Web Hacking','Security Best Practices','Network Security'] },
  ];
}
