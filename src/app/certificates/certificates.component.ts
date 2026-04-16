import { Component } from '@angular/core';
import {
  faBook,
  faServer,
  faCode,
  faShield,
} from '@fortawesome/free-solid-svg-icons';
import { Certificado } from '../entities/certificados.entities';

interface CertificadoCategoria {
  nombre: string;
  icono: any;
  certificados: Certificado[];
}

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css'],
})
export class CertificatesComponent {
  faBook = faBook;

  categorias: CertificadoCategoria[] = [
    {
      nombre: 'Backend',
      icono: faServer,
      certificados: [
        {
          id: '7',
          description: 'Backend with NestJS',
          plataforma: 'Platzi',
          img: './assets/BackendConNestjs_certificado.jpg',
        },
        {
          id: '8',
          description: 'NestJS Modular Programming',
          plataforma: 'Platzi',
          img: './assets/nestJS_programacionModular.jpg',
        },
        {
          id: '9',
          description: 'NestJS Typeorm',
          plataforma: 'Platzi',
          img: './assets/nestJsTypeorm.jpg',
        },
        {
          id: '10',
          description: 'NestJS MongoDB',
          plataforma: 'Platzi',
          img: './assets/NestJS-MongoDB.jpg',
        },
        {
          id: '11',
          description: 'NestJS Authentication',
          plataforma: 'Platzi',
          img: './assets/nest auth.jpg',
        },
      ],
    },
    {
      nombre: 'Programming',
      icono: faCode,
      certificados: [
        {
          id: '5',
          description: 'Python Fundamentals',
          plataforma: 'Platzi',
          img: './assets/FundamentosPy_certificado.jpg',
        },
        {
          id: '6',
          description: 'Comprehensions, Functions & Error Handling',
          plataforma: 'Platzi',
          img: './assets/FuncionesPy_certificados.jpg',
        },
        {
          id: '12',
          description: 'AWS Cloud Practitioner',
          plataforma: 'AWS',
          img: './assets/aws.jpg',
        },
        {
          id: '13',
          description: 'Web Development Path',
          plataforma: 'EDteam',
          img: './assets/RutaDesarrolloWeb.jpeg',
        },
        {
          id: '14',
          description: 'Programming from Zero',
          plataforma: 'EDteam',
          img: './assets/programacionCero_certificado.jpeg',
        },
      ],
    },
    {
      nombre: 'Hacking',
      icono: faShield,
      certificados: [
        {
          id: '15',
          description: 'Ethical Hacking',
          plataforma: '',
          img: './assets/hack etico.jpg',
        },
        {
          id: '16',
          description: 'Pentesting',
          plataforma: '',
          img: './assets/hack pentesting.jpg',
        },
        {
          id: '17',
          description: 'Social Engineering',
          plataforma: '',
          img: './assets/hack social.jpg',
        },
        {
          id: '18',
          description: 'Web Hacking',
          plataforma: '',
          img: './assets/hack web.jpg',
        },
      ],
    },
  ];
}
