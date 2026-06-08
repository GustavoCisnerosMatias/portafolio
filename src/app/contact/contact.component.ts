import { Component } from '@angular/core';
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faCreditCard,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  faSend = faPaperPlane;

  form = { name: '', email: '', message: '' };

  contactInfo = [
    {
      icon: faEnvelope,
      label: 'Email',
      value: 'gustavo.cisnerosmatias@gmail.com',
      href: 'mailto:gustavo.cisnerosmatias@gmail.com',
    },
    {
      icon: faPhone,
      label: 'Teléfono',
      value: '+593 96 289 9185',
      href: 'tel:+593962899185',
    },
    { icon: faMapMarkerAlt, label: 'Ubicación', value: 'Ecuador', href: null },
  ];

  references = [
    { name: 'Ing. Marjorie Coronel. Mgt', email: 'mcoronel@upse.edu.ec' },
    { name: 'Ing. Marcia Bayas. Ph.D', email: 'm.bayas@upse.edu.ec' },
    { name: 'Ing. Angela Parra', email: 'angela14parrafernandez@gmail.com' },
  ];

  onSubmit() {
    alert('¡Mensaje enviado! (Demo)');
    this.form = { name: '', email: '', message: '' };
  }
}
