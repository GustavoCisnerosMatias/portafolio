import { Component } from '@angular/core';
import { faAward, faArrowUpRightFromSquare, faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css'],
})
export class CertificatesComponent {
  faAward = faAward;
  faExternalLink = faArrowUpRightFromSquare;
  faXmark = faXmark;

  selectedCert: { title: string; issuer: string; img: string } | null = null;
  certImgLoaded = false;

  openCert(cert: { title: string; issuer: string; img: string }) {
    this.selectedCert = cert;
    this.certImgLoaded = false;
  }

  closeCert() {
    this.selectedCert = null;
    this.certImgLoaded = false;
  }

  categories = ['Todos', 'Backend', 'DevOps', 'Hacking', 'Programming', 'Testing'];
  selectedCategory = 'Todos';

  categoryTaglines: { [key: string]: string } = {
    'Todos': 'Cada certificado de aquí es una pieza del rompecabezas: una habilidad concreta que hoy sostiene los proyectos que construyo.',
    'Backend': 'Toda gran aplicación tiene un motor que nadie ve, pero que sostiene todo lo que sí se ve. Aquí está el mío, afinado capa por capa.',
    'DevOps': '¿De qué sirve una aplicación brillante si se queda encerrada en mi laptop? Firebase me dio el hosting, Docker las cajas para moverla sin que se rompa, y AWS la infraestructura para escalarla sin límites.',
    'Hacking': '¿De qué me sirve construir una casa hermosa si al final no le pongo una puerta segura? Por eso estos certificados: para pensar como quien ataca y así defender mejor lo que construyo.',
    'Programming': 'Antes de correr hay que aprender a caminar. Estas son las bases sobre las que construyo todo lo demás, sin atajos y sin saltarse pasos.',
    'Testing': '¿De qué sirve escribir código si no sé que funciona? Un sistema sin pruebas es una promesa sin garantía. Aquí aprendo a firmar mis entregas con confianza.',
  };

  get categoryTagline(): string {
    return this.categoryTaglines[this.selectedCategory] || '';
  }

  allCerts: {
    title: string;
    issuer: string;
    category: string;
    description: string;
    gradient: string;
    img: string;
    writeupRoute?: string;
  }[] = [
    { title: 'Backend with NestJS', issuer: 'Platzi', category: 'Backend', description: 'Desarrollo backend completo con NestJS', gradient: 'linear-gradient(to right,#ef4444,#ec4899)', img: './assets/BackendConNestjs_certificado.jpg' },
    { title: 'NestJS Modular Programming', issuer: 'Platzi', category: 'Backend', description: 'Programación modular con NestJS', gradient: 'linear-gradient(to right,#ef4444,#ec4899)', img: './assets/nestJS_programacionModular.jpg' },
    { title: 'NestJS TypeORM', issuer: 'Platzi', category: 'Backend', description: 'ORM y gestión de bases de datos', gradient: 'linear-gradient(to right,#ef4444,#ec4899)', img: './assets/nestJsTypeorm.jpg' },
    { title: 'NestJS MongoDB', issuer: 'Platzi', category: 'Backend', description: 'Integración de MongoDB con NestJS', gradient: 'linear-gradient(to right,#ef4444,#ec4899)', img: './assets/NestJS-MongoDB.jpg' },
    { title: 'NestJS Authentication', issuer: 'Platzi', category: 'Backend', description: 'Autenticación y autorización con NestJS', gradient: 'linear-gradient(to right,#ef4444,#ec4899)', img: './assets/nest auth.jpg' },
    { title: 'Firebase con Angular 20', issuer: 'Platzi', category: 'DevOps', description: 'Hosting y despliegue de aplicaciones Angular en Firebase', gradient: 'linear-gradient(to right,#f97316,#facc15)', img: './assets/Firabase con angular 20.jpg' },
    { title: 'Fundamentos de Docker', issuer: 'Platzi', category: 'DevOps', description: 'Contenedores, imágenes y despliegue portable de aplicaciones', gradient: 'linear-gradient(to right,#0ea5e9,#2563eb)', img: './assets/Fundamentos docker.jpg' },
    { title: 'Docker Avanzado', issuer: 'Platzi', category: 'DevOps', description: 'Orquestación, redes y buenas prácticas con contenedores', gradient: 'linear-gradient(to right,#0ea5e9,#2563eb)', img: './assets/Docker Avanzado.jpg' },
    { title: 'Ethical Hacking', issuer: '', category: 'Hacking', description: 'Fundamentos de hacking ético', gradient: 'linear-gradient(to right,#7c3aed,#4f46e5)', img: './assets/hack etico.jpg' },
    { title: 'Pentesting', issuer: '', category: 'Hacking', description: 'Pruebas de penetración y seguridad', gradient: 'linear-gradient(to right,#7c3aed,#4f46e5)', img: './assets/hack pentesting.jpg' },
    { title: 'Social Engineering', issuer: '', category: 'Hacking', description: 'Ingeniería social y seguridad', gradient: 'linear-gradient(to right,#7c3aed,#4f46e5)', img: './assets/hack social.jpg' },
    { title: 'Web Hacking', issuer: '', category: 'Hacking', description: 'Seguridad en aplicaciones web', gradient: 'linear-gradient(to right,#7c3aed,#4f46e5)', img: './assets/hack web.jpg' },
    { title: 'HackTheBox — Cap (Root Owned)', issuer: 'Hack The Box', category: 'Hacking', description: 'Explotación de una vulnerabilidad IDOR y escalada de privilegios a root abusando de Linux Capabilities (cap_setuid).', gradient: 'linear-gradient(to right,#9fef00,#5ec404)', img: './assets/Cap Certificate.PNG', writeupRoute: '/informes/htb-cap' },
    { title: 'Python Fundamentals', issuer: 'Platzi', category: 'Programming', description: 'Fundamentos de programación en Python', gradient: 'linear-gradient(to right,#3b82f6,#06b6d4)', img: './assets/FundamentosPy_certificado.jpg' },
    { title: 'Comprehensions, Functions & Error Handling', issuer: 'Platzi', category: 'Programming', description: 'Python avanzado y manejo de errores', gradient: 'linear-gradient(to right,#3b82f6,#06b6d4)', img: './assets/FuncionesPy_certificados.jpg' },
    { title: 'AWS Cloud Practitioner', issuer: 'Platzi', category: 'DevOps', description: 'Infraestructura cloud: cómputo, almacenamiento, redes y servicios gestionados en AWS', gradient: 'linear-gradient(to right,#f97316,#eab308)', img: './assets/aws.jpg' },
    { title: 'Web Development Path', issuer: 'EDteam', category: 'Programming', description: 'Ruta completa de desarrollo web', gradient: 'linear-gradient(to right,#22c55e,#10b981)', img: './assets/RutaDesarrolloWeb.jpeg' },
    { title: 'Programming from Zero', issuer: 'EDteam', category: 'Programming', description: 'Fundamentos de programación', gradient: 'linear-gradient(to right,#6b7280,#475569)', img: './assets/programacionCero_certificado.jpeg' },
    { title: 'Introducción a la Automatización de Pruebas', issuer: 'Platzi', category: 'Testing', description: 'Fundametos de pruebas automatizadas para validar software de forma rápida, repetible y confiable', gradient: 'linear-gradient(to right,#10b981,#14b8a6)', img: './assets/Automatizacion_pruebas.jpg' },
    { title: 'Fundamentos de Pruebas de Software', issuer: 'Platzi', category: 'Testing', description: 'Testing y aseguramiento de calidad del software', gradient: 'linear-gradient(to right,#10b981,#14b8a6)', img: './assets/Fundamentos de pruebas de software.jpg' },
  ];

  get filteredCerts() {
    return this.selectedCategory === 'Todos'
      ? this.allCerts
      : this.allCerts.filter(c => c.category === this.selectedCategory);
  }
}
