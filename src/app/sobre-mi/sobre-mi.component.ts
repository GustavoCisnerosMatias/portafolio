import { Component } from '@angular/core';
import { faCode, faDatabase, faBolt, faShield } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent {
  features = [
    {
      icon: faCode,
      title: 'Desarrollo Full Stack',
      description: 'Experiencia en Angular, Ionic, Spring Boot, NestJS, Laravel y Express.'
    },
    {
      icon: faDatabase,
      title: 'Gestión de Datos',
      description: 'Manejo de SQL Server, MySQL, MongoDB y Firestore para soluciones escalables.'
    },
    {
      icon: faBolt,
      title: 'IoT & Sistemas en Tiempo Real',
      description: 'Desarrollo de sistemas de monitoreo remoto con procesamiento de datos en tiempo real.'
    },
    {
      icon: faShield,
      title: 'Seguridad & Hacking Ético',
      description: 'Formación en seguridad informática, pentesting y ethical hacking.'
    },
  ];
}
