import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isScrolled = false;
  menuOpen = false;

  navItems = [
    { label: 'Inicio', id: 'inicio' },
    { label: 'Sobre Mí', id: 'sobre-mi' },
    { label: 'Proyectos', id: 'proyectos' },
    { label: 'Experiencia', id: 'experiencia' },
    { label: 'Habilidades', id: 'habilidades' },
    { label: 'Certificados', id: 'certificados' },
    { label: 'Contacto', id: 'contacto' },
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  scrollToSection(id: string): void {
    if (id === 'inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
    this.menuOpen = false;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
