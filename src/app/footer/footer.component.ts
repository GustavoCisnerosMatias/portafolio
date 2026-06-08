import { Component } from '@angular/core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faEnvelope = faEnvelope;
  year = new Date().getFullYear();

  navItems = [
    { label: 'Inicio', id: 'inicio' },
    { label: 'Sobre Mí', id: 'sobre-mi' },
    { label: 'Proyectos', id: 'proyectos' },
    { label: 'Experiencia', id: 'experiencia' },
    { label: 'Certificados', id: 'certificados' },
    { label: 'Contacto', id: 'contacto' },
  ];

  scrollTo(id: string) {
    if (id === 'inicio') { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
