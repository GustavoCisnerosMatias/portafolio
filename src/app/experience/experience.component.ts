import { Component } from '@angular/core';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { Experience, Slide } from '../entities/experience.entities';
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent {
  faPeopleGroup = faPeopleGroup;
  experiences: Experience[] = [
    {
      id: '1',
      title: 'CAC Santa Elena',
      description: '',
      slides: [
        {
          img: './assets/attendance1.png',
          description:
            'The application was designed to optimize attendance management, replacing manual Excel tracking. This significantly reduced registration times and improved the organization and accessibility of attendance data.',
        },
        {
          img: './assets/attendance2.png',
          description:
            'Since the application was not used from the beginning of the program, I developed a Python script to clean and prepare the existing data. This allowed for a one-time bulk import of over 1,000 users from an Excel file directly into the system.',
        },
        {
          img: './assets/attendance3.png',
          description:
            'Additionally, I implemented another Python script to extract past activities and participants’ IDs, enabling the registration of historical attendance records. I also added a feature to register multiple IDs in a single submission, further optimizing the process.',
        },
        {
          img: './assets/attendance4.jpg',
          description:
            'This image shows the traffic generated in Firestore, the NoSQL database used by the application, demonstrating the high volume of queries and data operations performed.',
        },
        {
          img: './assets/tec1.png',
          description: 'Technologies used for the project.',
        },
      ],
    },
    {
      id: '2',
      title: 'VITECED',
      description: '',
      slides: [
        {
          img: './assets/teced_video.mp4',
          description:
            'Demonstration video showcasing the full functionality of the system in real time, including the acquisition and visualization of bioelectrical signals such as ECG. It also highlights biomedical data management, live monitoring, database storage, and the detection of potential false positives through statistical analysis, ensuring reliable measurements from IoT devices.',
          isVideo: true,
        },
        {
          img: './assets/teced_ECG.PNG',
          description:
            'Real-time ECG monitoring interface displaying signals collected from IoT devices.',
        },
        {
          img: './assets/teced_ECG falsos positivos.PNG',
          description:
            'View of the statistical analysis module for detecting false positives in ECG measurements.',
        },
        {
          img: './assets/teced_datos.png',
          description:
            'Control panel managing over 50,000 data entries processed from IoT devices for storage and analysis.',
        },
        {
          img: './assets/tec2.png',
          description: 'Technologies used for the project.',
        },
      ],
    },
    {
      id: '3',
      title: 'FACSISTEL',
      description: '',
      slides: [
        {
          img: './assets/upse_dashboard.png',
          description:
            'During my experience at FACSISTEL, I developed a reporting and issue-tracking system designed to document, monitor, and manage technical incidents within the IT department. The platform enabled different user roles—administrators, IT professionals, and interns—to collaborate effectively by adding comments, updating statuses, and maintaining a detailed history of resolutions. It was built with Angular for the frontend, NestJS for the backend, and MySQL as the relational database, ensuring secure and scalable data management.',
        },
        {
          img: './assets/upse_reporte.png',
          description: 'Interface for creating and registering a new report.',
        },
        {
          img: './assets/upse_reportes.png',
          description:
            'View of the complete list of reports with filtering options.',
        },
        {
          img: './assets/upse_manual.png',
          description:
            'Detailed view of an individual report, including its history and comments.',
        },
        {
          img: './assets/tec3.png',
          description: 'Technologies used for the project.',
        },
      ],
    },
    {
      id: '4',
      title: 'AGUAPEN MANGLARALTO',
      description: '',
      slides: [
        {
          img: './assets/jaapman_reporte 1.jpg',
          description:
            'During my experience at Aguapen, the drinking water service, I was responsible for managing and preparing reports, ensuring accurate data visualization. I also partially supported the SRI billing process. Throughout development, I used Git and GitHub for version control, facilitating team collaboration and efficient project tracking. The system was built with Angular and Express, using MySQL as the database.',
        },
        {
          img: './assets/jaapman_reporte 2.jpg',
          description: 'Dashboard showing key operational and service reports.',
        },
        {
          img: './assets/jaapman_reporte 3.jpg',
          description:
            'Detailed view of a generated report with structured information.',
        },
        {
          img: './assets/jaapman_reporte 4.jpg',
          description:
            'Summary report visualization for decision-making and analysis.',
        },
        {
          img: './assets/tec4.png',
          description: 'Technologies used for the project.',
        },
      ],
    },
  ];

  // experiences: Experience[] = [
  //   {
  //     id: '1',
  //     title: 'CAC Santa Elena',
  //     description: '',
  //     slides: [
  //       {
  //         img: './assets/attendance1.png',
  //         description:
  //           'La aplicación fue diseñada para optimizar la gestión de asistencias, reemplazando el control manual en Excel, lo que redujo significativamente los tiempos de registro y mejoró la organización de la información.',
  //       },
  //       {
  //         img: './assets/attendance2.png',
  //         description:
  //           'Como la aplicación no se utilizó desde el inicio del programa, desarrollé un script en Python para limpiar y preparar los datos. Esto permitió cargar masivamente la información desde un archivo Excel mediante una funcionalidad especial que solo se habilitó una vez para registrar más de 1,000 usuarios de forma automática.',
  //       },
  //       {
  //         img: './assets/attendance3.png',
  //         description:
  //           'Asimismo, implementé otro script en Python para extraer las actividades y las cédulas de todos los participantes, permitiendo registrar asistencias pasadas de manera masiva. Además, añadí la opción de registrar varias cédulas en un solo envío, optimizando aún más el proceso.',
  //       },
  //       {
  //         img: './assets/attendance4.jpg',
  //         description:
  //           'En esta imagen se puede observar el tráfico generado en Firestore, la base de datos no relacional utilizada por la aplicación, evidenciando el volumen de consultas y registros realizados.',
  //       },
  //       {
  //         img: './assets/tec1.png',
  //         description: 'Las tecnologias Usadas fueron las siguientes',
  //       },
  //     ],
  //   },
  //   {
  //     id: '2',
  //     title: 'VITECED',
  //     description: '',
  //     slides: [
  //       {
  //         img: './assets/teced_video.mp4',
  //         description:
  //           'Video demostrativo que muestra el funcionamiento completo del sistema en tiempo real, incluyendo la adquisición y visualización de señales bioeléctricas como ECG, así como la gestión de datos biomédicos. Se puede observar cómo la plataforma permite el monitoreo en vivo, el almacenamiento en la base de datos y la detección de posibles falsos positivos mediante análisis estadísticos, optimizando el control de las mediciones provenientes de dispositivos IoT.',
  //         isVideo: true,
  //       },
  //       {
  //         img: './assets/teced_ECG.PNG',
  //         description:
  //           'Interfaz de monitoreo ECG en tiempo real, mostrando las señales obtenidas desde los dispositivos IoT.',
  //       },
  //       {
  //         img: './assets/teced_ECG falsos positivos.PNG',
  //         description:
  //           'Vista del módulo de análisis estadístico para la detección de falsos positivos en las mediciones de ECG.',
  //       },
  //       {
  //         img: './assets/teced_datos.png',
  //         description:
  //           'Panel de control con la gestión de más de 50,000 datos procesados desde dispositivos IoT para su almacenamiento y análisis.',
  //       },
  //       {
  //         img: './assets/tec2.png',
  //         description: 'Las tecnologias Usadas fueron las siguientes',
  //       },
  //     ],
  //   },
  //   {
  //     id: '3',
  //     title: 'FACSISTEL',
  //     description:
  //       'During my experience at Aguapen, I managed and prepared reports ensuring accurate data visualization...',
  //     slides: [
  //       {
  //         img: './assets/upse_dashboard.png',
  //         description:
  //           'During my experience at FACSISTEL, I developed a reporting and issue-tracking system designed to document, monitor, and manage technical incidents within the IT department. The platform allowed different user roles—administrators, IT professionals, and interns—to collaborate efficiently by adding comments, updating statuses, and keeping a detailed history of resolutions. It was built with Angular for the frontend, NestJS for the backend, and MySQL as the relational database, ensuring secure and scalable data management.',
  //       },
  //       {
  //         img: './assets/upse_reporte.png',
  //         description: 'Interfaz para registrar un nuevo reporte',
  //       },
  //       {
  //         img: './assets/upse_reportes.png',
  //         description: 'Vista de la lista completa de reportes',
  //       },
  //       {
  //         img: './assets/upse_manual.png',
  //         description: 'Vista detallada de un reporte individual',
  //       },
  //       {
  //         img: './assets/tec3.png',
  //         description: 'Las tecnologias Usadas fueron las siguientes',
  //       },
  //     ],
  //   },
  //   {
  //     id: '4',
  //     title: 'AGUAPEN MANGLARALTO',
  //     description: '',
  //     slides: [
  //       {
  //         img: './assets/jaapman_reporte 1.jpg',
  //         description:
  //           'During my experience at Aguapen, the drinking water service, I was in charge of managing and preparing reports, ensuring accurate data visualization. I also partially supported the SRI billing process. Throughout development, I used Git and GitHub to manage and version the code, which facilitated team collaboration and efficient tracking of project changes. Development was done with Angular and Express, using MySQL as the database.',
  //       },
  //       {
  //         img: './assets/jaapman_reporte 2.jpg',
  //         description: 'Report',
  //       },
  //       {
  //         img: './assets/jaapman_reporte 3.jpg',
  //         description: 'Report',
  //       },
  //       {
  //         img: './assets/jaapman_reporte 4.jpg',
  //         description: 'Report',
  //       },
  //       {
  //         img: './assets/tec4.png',
  //         description: 'Las tecnologias Usadas fueron las siguientes',
  //       },
  //     ],
  //   },
  // ];
  currentSlide: { [key: string]: number } = {}; // índice actual por experiencia

  constructor() {
    // Inicializamos todos los carruseles en 0
    this.experiences.forEach((exp) => {
      this.currentSlide[exp.id] = 0;
    });
  }

  nextSlide(expId: string, total: number) {
    this.currentSlide[expId] = (this.currentSlide[expId] + 1) % total;
  }

  prevSlide(expId: string, total: number) {
    this.currentSlide[expId] = (this.currentSlide[expId] - 1 + total) % total;
  }
}
