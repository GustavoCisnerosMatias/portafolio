import { Component } from '@angular/core';
import { faRocket, faImages, faXmark, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  faRocket = faRocket;
  faGithub = faGithub;
  faImages = faImages;
  faXmark = faXmark;
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;

  projects = [
    { title: 'Sistema Asistencias - CAC Santa Elena', description: 'Aplicación web con Firestore en tiempo real que optimizó el control de asistencias. 161K lecturas, 5.9K escrituras, reemplazando el seguimiento manual en Excel.', technologies: ['Firestore','Real-time','Cloud Functions','Web App'], period: '2024-07 / 2024-10', images: ['./assets/attendance1.png', './assets/attendance2.png', './assets/attendance3.png', './assets/attendance4.jpg'] },
    { title: 'Sistema de Monitoreo ECG - VITECED', description: 'Sistema para adquisición y visualización de señales ECG en tiempo real con IoT. Módulo de análisis estadístico para detectar falsos positivos con más de 50K registros.', technologies: ['IoT','ECG','Real-time Analytics','Database','Statistics'], period: '2025-03 / 2025-09', images: ['./assets/teced_ECG.PNG', './assets/teced_ECG falsos positivos.PNG', './assets/teced_datos.png'] },
    { title: 'Sistema de Gestión - FACSISTEL', description: 'Sistema de gestión de reportes e incidencias técnicas para el área de TI de la universidad, desde la concepción hasta el despliegue en servidores.', technologies: ['Angular','NestJS','MySQL','Git','Deployment'], period: '2024-11 / 2025-02', images: ['./assets/upse_dashboard.png', './assets/upse_manual.png', './assets/upse_reporte.png', './assets/upse_reportes.png'] },
    { title: 'Sistema de Reportes - AGUAPEN', description: 'Sistema de reportes operativos para la empresa de agua potable de Manglaralto, con visualización de datos y apoyo en facturación electrónica con el SRI.', technologies: ['Angular','Express','MySQL','Git','SRI Integration'], period: '2024-03 / 2024-06', images: ['./assets/jaapman_reporte 1.jpg', './assets/jaapman_reporte 2.jpg', './assets/jaapman_reporte 3.jpg', './assets/jaapman_reporte 4.jpg'] },
    { title: 'Sistema de Gestión Hotelera', description: 'Aplicación de escritorio con SQL Server, FXML y Java para gestión de reservas de habitaciones, facturación y reportes.', technologies: ['Java','FXML','SQL Server','Desktop App'], period: 'Proyecto Personal', url: 'https://github.com/GustavoCisnerosMatias/projectHotel/tree/main' },
    { title: 'Sistema Arcane Restaurant', description: 'App para gestión de mesas en restaurante con pedidos por QR. Ionic + Angular en frontend, Fat-Free como backend y MySQL.', technologies: ['Ionic','Angular','Fat-Free','PHP','MySQL','QR Code'], period: 'Proyecto Personal', url: 'https://github.com/GustavoCisnerosMatias/Arcane' },
  ];

  selectedProject: (typeof this.projects)[number] | null = null;
  currentImageIndex = 0;

  openProject(p: (typeof this.projects)[number]) {
    this.selectedProject = p;
    this.currentImageIndex = 0;
  }

  closeProject() {
    this.selectedProject = null;
  }

  prevImage() {
    if (!this.selectedProject?.images) return;
    const total = this.selectedProject.images.length;
    this.currentImageIndex = (this.currentImageIndex - 1 + total) % total;
  }

  nextImage() {
    if (!this.selectedProject?.images) return;
    const total = this.selectedProject.images.length;
    this.currentImageIndex = (this.currentImageIndex + 1) % total;
  }

  goToImage(index: number) {
    this.currentImageIndex = index;
  }
}
