import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { faComments, faTimes, faPaperPlane, faRobot } from '@fortawesome/free-solid-svg-icons';
import { GeminiService } from '../services/gemini.service';

interface Message {
  role: 'user' | 'bot';
  text: string;
  loading?: boolean;
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  @ViewChild('messagesContainer') messagesContainer!: ElementRef;

  faComments = faComments;
  faTimes = faTimes;
  faPaperPlane = faPaperPlane;
  faRobot = faRobot;

  isOpen = false;
  inputText = '';
  isTyping = false;
  initialized = false;
  apiAvailable = false;

  messages: Message[] = [
    {
      role: 'bot',
      text: '¡Bienvenido al chat con IA de Gustavo Cisneros! 🚀 Soy su asistente virtual. Puedes preguntarme todo sobre su experiencia, proyectos, habilidades o trayectoria profesional. ¿En qué puedo ayudarte hoy?'
    }
  ];

  constructor(private gemini: GeminiService, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.gemini.checkAvailability().then(ok => this.apiAvailable = ok);
  }

  format(text: string): SafeHtml {
    const html = text
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      .replace(/\n/g, '<br>');
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  async toggleChat() {
    this.isOpen = !this.isOpen;
    if (this.isOpen && !this.initialized) {
      this.initialized = true;
      await this.gemini.initChat();
    }
  }

  async sendMessage() {
    const text = this.inputText.trim();
    if (!text || this.isTyping) return;

    this.messages.push({ role: 'user', text });
    this.inputText = '';
    this.isTyping = true;
    this.messages.push({ role: 'bot', text: '', loading: true });
    this.scrollAfterRender();

    try {
      const response = await this.gemini.sendMessage(text);
      this.messages[this.messages.length - 1] = { role: 'bot', text: response };
    } catch {
      this.messages[this.messages.length - 1] = {
        role: 'bot',
        text: 'Gustavo me desactivó temporalmente 😅 Por favor, vuelve más tarde.'
      };
      this.apiAvailable = false;
    } finally {
      this.isTyping = false;
      this.scrollAfterRender();
    }
  }

  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  }

  private scrollAfterRender() {
    setTimeout(() => {
      const el = this.messagesContainer?.nativeElement;
      if (el) el.scrollTop = el.scrollHeight;
    }, 50);
  }
}
