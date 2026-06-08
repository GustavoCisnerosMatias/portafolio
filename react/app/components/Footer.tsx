import { Github, Linkedin, Mail, Heart, Globe } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Gustavo Cisneros
            </h3>
            <p className="text-gray-400 mb-2">
              Ingeniero en Tecnologías de la Información
            </p>
            <p className="text-gray-400 text-sm">
              Desarrollador Full Stack especializado en crear soluciones tecnológicas innovadoras y escalables.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Título: 1023-2025-3191869
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="hover:text-purple-400 transition-colors"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('sobre-mi')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-purple-400 transition-colors"
                >
                  Sobre Mí
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-purple-400 transition-colors"
                >
                  Proyectos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('experiencia')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-purple-400 transition-colors"
                >
                  Experiencia
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('certificados')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-purple-400 transition-colors"
                >
                  Certificados
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-purple-400 transition-colors"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Conéctate Conmigo</h4>
            <div className="flex gap-4 mb-4">
              <a
                href="https://github.com/GustavoCisnerosMatias"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-purple-600 transition-colors"
                title="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/gustavo-cisneros-b389992ab"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-purple-600 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:gustavo.cisnerosmatias@gmail.com"
                className="p-2 bg-gray-800 rounded-full hover:bg-purple-600 transition-colors"
                title="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://gcisneros.web.app"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-purple-600 transition-colors"
                title="Website"
              >
                <Globe className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              📍 Ecuador
              <br />
              📧 gustavo.cisnerosmatias@gmail.com
              <br />
              📱 +593 96 289 9185
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p className="flex items-center justify-center gap-2">
            © {currentYear} Gustavo Cisneros. Hecho con <Heart className="w-4 h-4 text-red-500" /> y mucho código.
          </p>
        </div>
      </div>
    </footer>
  );
}