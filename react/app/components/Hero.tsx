import { motion } from 'motion/react';
import { ArrowDown, Github, Linkedin, Mail, Globe } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="mb-4">
            <span className="text-gray-600 block mb-2">Hola, soy</span>
            <span className="block text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Gustavo Cisneros
            </span>
          </h1>
          <p className="text-2xl text-gray-700 mb-6">Ingeniero en Tecnologías de la Información</p>
          <p className="text-gray-600 mb-2">📍 Ecuador</p>
          <p className="text-gray-600 mb-6">🎂 22 de Diciembre 2002</p>
          <p className="text-gray-600 mb-8 max-w-lg">
            Ingeniero en Tecnologías de la Información con experiencia en desarrollo de software y soluciones tecnológicas. 
            Actualmente trabajo en el Ministerio de Desarrollo Humano, participando en proyectos institucionales y 
            aplicando buenas prácticas de programación, escalabilidad y rendimiento.
          </p>
          
          <div className="flex gap-4 mb-8">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('proyectos')}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            >
              Ver Proyectos
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection('contacto')}
            >
              Descargar CV
            </Button>
          </div>

          <div className="flex gap-4">
            <a 
              href="https://github.com/GustavoCisnerosMatias" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-purple-100 transition-colors"
              title="GitHub"
            >
              <Github className="w-6 h-6 text-gray-700" />
            </a>
            <a 
              href="https://linkedin.com/in/gustavo-cisneros-b389992ab" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-purple-100 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-6 h-6 text-gray-700" />
            </a>
            <a 
              href="mailto:gustavo.cisnerosmatias@gmail.com"
              className="p-2 rounded-full hover:bg-purple-100 transition-colors"
              title="Email"
            >
              <Mail className="w-6 h-6 text-gray-700" />
            </a>
            <a 
              href="https://gcisneros.web.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-purple-100 transition-colors"
              title="Website"
            >
              <Globe className="w-6 h-6 text-gray-700" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative w-full max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-2xl opacity-20"></div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1603575448360-153f093fd0b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHNvZnR3YXJlJTIwZGV2ZWxvcGVyJTIwd29ya2luZyUyMGxhcHRvcHxlbnwxfHx8fDE3NzYzMTE4MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Gustavo Cisneros - Ingeniero en Tecnologías de la Información"
              className="relative rounded-full w-full h-auto shadow-2xl"
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        onClick={() => scrollToSection('sobre-mi')}
      >
        <ArrowDown className="w-8 h-8 text-purple-600" />
      </motion.div>
    </section>
  );
}