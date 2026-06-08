import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent';

interface GeminiPart { text: string; }
interface GeminiContent { role: string; parts: GeminiPart[]; }

@Injectable({ providedIn: 'root' })
export class GeminiService {
  private history: GeminiContent[] = [];
  private systemPrompt = '';
  private initialized = false;
  private gustavoInfo = '';

  constructor(private http: HttpClient) {}

  async initChat(): Promise<void> {
    if (this.initialized) return;

    try {
      this.gustavoInfo = await firstValueFrom(
        this.http.get('./assets/info-gustavo.txt', { responseType: 'text' })
      );
    } catch {
      this.gustavoInfo = 'Gustavo Cisneros, Ingeniero en TI de Ecuador.';
    }

    this.systemPrompt = `Eres el asistente virtual de Gustavo Cisneros, un Ingeniero en Tecnologías de la Información de Ecuador. Tu personalidad es carismática, amigable, divertida y con mucho humor. Usas emojis con moderación para hacer la conversación más dinámica.

Respondes preguntas sobre TODO lo relacionado con Gustavo Cisneros: su vida profesional, proyectos, habilidades, trayectoria, pero TAMBIÉN su vida personal (intereses, pareja, gustos, personalidad). Si preguntan algo completamente ajeno a Gustavo (política mundial, recetas, etc.), rediriges con gracia hacia él. Nunca inventas información que no esté en los datos.

INFORMACIÓN COMPLETA DE GUSTAVO:
${this.gustavoInfo}

REGLAS:
- Responde siempre en español
- Sé carismático, cálido, divertido y entusiasta
- Si tienes la información, respóndela con naturalidad y buen humor
- Si no tienes la información sobre algo personal, dilo honestamente con gracia ("¡Eso Gustavo no me lo ha contado! 😄")
- Máximo 3-4 oraciones por respuesta para mantener el chat fluido`;

    this.history = [
      { role: 'user', parts: [{ text: 'Hola' }] },
      { role: 'model', parts: [{ text: '¡Bienvenido al chat con IA de Gustavo Cisneros! 🚀 Soy su asistente virtual. Puedes preguntarme todo sobre su experiencia, proyectos, habilidades o trayectoria profesional. ¿En qué puedo ayudarte hoy?' }] }
    ];

    this.initialized = true;
  }

  async sendMessage(message: string): Promise<string> {
    if (!this.initialized) await this.initChat();

    this.history.push({ role: 'user', parts: [{ text: message }] });

    const body = {
      systemInstruction: { role: 'system', parts: [{ text: this.systemPrompt }] },
      contents: this.history
    };

    const res = await fetch(`${API_URL}?key=${environment.geminiApiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err?.error?.message || 'Error Gemini API');
    }

    const data = await res.json();
    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text ?? 'Sin respuesta.';
    this.history.push({ role: 'model', parts: [{ text: reply }] });
    return reply;
  }

  resetChat(): void {
    this.initialized = false;
    this.history = [];
  }
}
