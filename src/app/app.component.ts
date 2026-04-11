import { Component } from '@angular/core';
import { Certificado } from './entities/certificados.entities';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'portafolio';

  certificados: Certificado[] = [
    {
      id: '1',
      description: 'Programacion desde cero',
      plataforma: 'EDteam',
      img: './resources/programcionCero_certificado.jpeg',
    },
    {
      id: '2',
      description: '¿Como Funciona La Tecnologia Computadoras?',
      plataforma: 'EDteam',
      img: './resources/ComoFuncionaLaTecnologiaComputadoras.jpeg',
    },
    {
      id: '3',
      description: '¿Como Funciona La Tecnologia Software?',
      plataforma: 'EDteam',
      img: './resources/ComoFuncionaLaTecnologiaSoftware.jpeg',
    },
  ];
}
