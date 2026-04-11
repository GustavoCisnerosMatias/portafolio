import { Component, AfterViewInit   } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent   implements AfterViewInit  {
  ngAfterViewInit(): void {
    this.createParticles();
  }

  createParticles(): void {
    const container = document.getElementById('particle-container');
    const numParticles = 100;
    const particles = [];

    for (let i = 0; i < numParticles; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      particle.style.position = 'absolute';
      particle.style.borderRadius = '50%';
      particle.style.backgroundColor = '#ffffff';
      particle.style.opacity = Math.random().toString();
      particle.style.width = `${Math.random() * 5 + 2}px`; // Tamaño aleatorio
      particle.style.height = particle.style.width;
      particle.style.top = `${Math.random() * window.innerHeight}px`;
      particle.style.left = `${Math.random() * window.innerWidth}px`;
      container?.appendChild(particle);
      particles.push(particle);
    }

    // Animación de partículas
    const animateParticles = () => {
      particles.forEach((particle: HTMLElement) => {
        const speed = 0.8;
        const x = parseFloat(particle.style.left || '0');
        const y = parseFloat(particle.style.top || '0');

        const dx = (Math.random() + 1) * speed;
        const dy = (Math.random() + 1) * speed;

        particle.style.left = `${x + dx}px`;
        particle.style.top = `${y + dy}px`;

        // Si la partícula se sale del borde, la reposicionamos en la parte opuesta
        if (x < 0 || x > window.innerWidth || y < 0 || y > window.innerHeight) {
          particle.style.left = `${Math.random() * window.innerWidth}px`;
          particle.style.top = `${Math.random() * window.innerHeight}px`;
        }
      });

      requestAnimationFrame(animateParticles); // Llamamos recursivamente para la animación continua
    };

    animateParticles();
  }
  title = 'portafolio';

  scrollToElement(elementId: string): void {
    const navbarHeight = 56;
    const element = document.getElementById(elementId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({
        top: offsetPosition,
      });
    }
  }
}
