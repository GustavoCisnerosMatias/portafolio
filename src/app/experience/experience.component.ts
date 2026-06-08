import { Component } from '@angular/core';
import { faBriefcase, faCalendar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent {
  faBriefcase = faBriefcase;
  faCalendar = faCalendar;

  experiences = [
    {
      role: 'Desarrollador de Software',
      company: 'Ministerio de Desarrollo Humano',
      period: 'Diciembre 2025 - Actualmente',
      description: 'Encargado del desarrollo full stack, utilizando Spring Boot, Angular y SQL Server para crear soluciones eficientes que mejoran la operatividad y la transformación digital.',
      achievements: [
        'Desarrollo de soluciones digitales institucionales',
        'Implementación de buenas prácticas de programación',
        'Optimización de procesos administrativos'
      ]
    },
    {
      role: 'Desarrollador de Software',
      company: 'Ministerio de Gobierno',
      period: 'Noviembre 2025 - Diciembre 2025',
      description: 'Desarrollador de software en los sistemas del Ministerio de Gobierno, responsable del diseño, implementación y optimización de soluciones digitales.',
      achievements: [
        'Diseño de arquitectura de software',
        'Mejora de eficiencia en gestión administrativa',
        'Implementación de sistemas escalables'
      ]
    },
    {
      role: 'Desarrollador Full Stack',
      company: 'Sistema TECED - Proyecto Universitario',
      period: 'Marzo 2025 - Septiembre 2025',
      description: 'Desarrollé un sistema de monitoreo remoto de ECG con adquisición y visualización de señales en tiempo real.',
      achievements: [
        'Procesamiento de más de 50K registros de señales ECG',
        'Implementación de módulo de análisis estadístico',
        'Detección de falsos positivos con IoT',
        'Desarrollo de sistema de tiempo real'
      ]
    },
    {
      role: 'Desarrollador Full Stack',
      company: 'FACSISTEL - Universidad UPSE',
      period: 'Noviembre 2024 - Febrero 2025',
      description: 'Implementé un sistema de gestión de reportes e incidencias técnicas para el área de TI de la universidad.',
      achievements: [
        'Desarrollo desde concepción hasta despliegue',
        'Configuración de servidores de producción',
        'Implementación de entorno seguro y escalable',
        'Gestión de reportes técnicos en tiempo real'
      ]
    },
    {
      role: 'Desarrollador Web',
      company: 'CAC Santa Elena - Freelance',
      period: 'Julio 2024 - Octubre 2024',
      description: 'Implementé una aplicación web con Firestore en tiempo real para optimizar el control de asistencias en la provincia.',
      achievements: [
        '161K lecturas en Firestore',
        '5.9K escrituras de datos',
        '500 eliminaciones optimizadas',
        'Reemplazo de sistema manual en Excel'
      ]
    },
    {
      role: 'Desarrollador Full Stack',
      company: 'AGUAPEN Manglaralto',
      period: 'Marzo 2024 - Junio 2024',
      description: 'Colaboré en el desarrollo de un sistema de reportes para la empresa de agua potable.',
      achievements: [
        'Generación y visualización de reportes operativos',
        'Apoyo en facturación electrónica con SRI',
        'Control de versiones con Git y GitHub',
        'Desarrollo con Angular, Express y MySQL'
      ]
    },
    {
      role: 'Desarrollador',
      company: 'BMCodigoMarriet S.A.S',
      period: 'Marzo 2023 - Marzo 2024',
      description: 'Encargado del desarrollo del sistema contable y de la plataforma de eventos deportivos.',
      achievements: [
        'Diseño de sistema contable completo',
        'Implementación de plataforma de eventos deportivos',
        'Fortalecimiento de gestión contable',
        'Innovación en gestión de eventos'
      ]
    }
  ];
}
