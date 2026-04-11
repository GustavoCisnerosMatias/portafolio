import { Component } from '@angular/core';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { Certificado } from '../entities/certificados.entities';
@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css'],
})
export class CertificatesComponent {
  certificados: Certificado[] = [
    // {
    //   id: '1',
    //   description: 'Programacion desde cero',
    //   plataforma: 'EDteam',
    //   img: './assets/programacionCero_certificado.jpeg',
    // },
    // {
    //   id: '2',
    //   description: '¿Como Funciona La Tecnologia Computadoras?',
    //   plataforma: 'EDteam',
    //   img: './assets/ComoFuncionaLaTecnologiaComputadoras.jpeg',
    // },
    // {
    //   id: '3',
    //   description: '¿Como Funciona La Tecnologia Software?',
    //   plataforma: 'EDteam',
    //   img: './assets/ComoFuncionaLaTecnologiaSoftware.jpeg',
    // },
    // {
    //   id: '4',
    //   description: 'RutaDesarrolloWeb',
    //   plataforma: 'EDteam',
    //   img: './assets/RutaDesarrolloWeb.jpeg',
    // },
    {
      id: '5',
      description: 'Python Fundamentals',
      plataforma: 'Platzi',
      img: './assets/FundamentosPy_certificado.jpg',
    },
    {
      id: '6',
      description: 'Comprehensions, Functions and Error Handling',
      plataforma: 'Platzi',
      img: './assets/FuncionesPy_certificados.jpg',
    },
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
      description: 'NestJS-Typeorm',
      plataforma: 'Platzi',
      img: './assets/nestJsTypeorm.jpg',
    },
    {
      id: '10',
      description: 'NestJS-MongoDB',
      plataforma: 'Platzi',
      img: './assets//NestJS-MongoDB.jpg',
    },
  ];

  faBook = faBook;
}
