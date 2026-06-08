import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    title: 'Sistema Asistencias - CAC Santa Elena',
    description: 'Aplicación web con Firestore en tiempo real que optimizó el control de asistencias. Se registraron 161K lecturas, 5.9K escrituras y 500 eliminaciones, reemplazando el seguimiento manual en Excel y mejorando significativamente los tiempos de registro.',
    image: 'https://images.unsplash.com/photo-1595079836278-25b7ad6d5ddb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdHRlbmRhbmNlJTIwc3lzdGVtJTIwUVIlMjBjb2RlJTIwbW9iaWxlfGVufDF8fHx8MTc3NjMxMTgyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    technologies: ['Firestore', 'Real-time', 'Cloud Functions', 'Web App'],
    period: '2024-07 / 2024-10',
    github: 'https://github.com',
    demo: 'https://example.com'
  },
  {
    title: 'Sistema de Monitoreo ECG - VITECED',
    description: 'Sistema para adquisición y visualización de señales ECG en tiempo real con IoT. Desarrollé módulo de análisis estadístico para detectar falsos positivos con más de 50K registros, asegurando mediciones confiables desde dispositivos IoT.',
    image: 'https://images.unsplash.com/photo-1766299892693-2370a8d47e23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxFQ0clMjBtb25pdG9yaW5nJTIwc3lzdGVtJTIwbWVkaWNhbCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzc2MzExODI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    technologies: ['IoT', 'ECG', 'Real-time Analytics', 'Database', 'Statistics'],
    period: '2025-03 / 2025-09',
    github: 'https://github.com',
    demo: 'https://example.com'
  },
  {
    title: 'Sistema de Gestión - FACSISTEL',
    description: 'Implementé un sistema de gestión de reportes e incidencias técnicas para el área de TI de la universidad, desde la concepción hasta el despliegue en servidores, asegurando un entorno seguro, escalable y en producción.',
    image: 'https://images.unsplash.com/photo-1752742111841-f490c48aa668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3Zlcm5tZW50JTIwSVQlMjBpbmZyYXN0cnVjdHVyZSUyMHNlcnZlcnN8ZW58MXx8fHwxNzc2MzExODI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    technologies: ['Angular', 'Express', 'MySQL', 'Git', 'Deployment'],
    period: '2024-11 / 2025-02',
    github: 'https://github.com',
    demo: 'https://example.com'
  },
  {
    title: 'Sistema de Reportes - AGUAPEN',
    description: 'Colaboré en el desarrollo de un sistema de reportes operativos para la empresa de agua potable de Manglaralto, participando en la generación y visualización de datos, y apoyando en la facturación electrónica con el SRI.',
    image: 'https://images.unsplash.com/photo-1763718528755-4bca23f82ac3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBhcHBsaWNhdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NzYyNTU1Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    technologies: ['Angular', 'Express', 'MySQL', 'Git', 'SRI Integration'],
    period: '2024-03 / 2024-06',
    github: 'https://github.com',
    demo: 'https://example.com'
  },
  {
    title: 'Sistema de Gestión Hotelera',
    description: 'Aplicación de escritorio con SQL Server Database, usando FXML para la interfaz visual y Java, permitiendo la gestión de reservas de habitaciones, facturación y generación de reportes.',
    image: 'https://images.unsplash.com/photo-1657812159075-7f0abd98f7b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3NjMwODA2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    technologies: ['Java', 'FXML', 'SQL Server', 'Desktop App'],
    period: 'Proyecto Personal',
    github: 'https://github.com',
    demo: 'https://example.com'
  },
  {
    title: 'Sistema Arcane Restaurant',
    description: 'App para gestión de mesas en restaurante, donde los clientes pueden ordenar escaneando un código QR. Desarrollada con Ionic basado en Angular para el frontend, Fat-Free como backend y MySQL para la base de datos.',
    image: 'https://images.unsplash.com/photo-1707836868495-3307d371aba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBtb2NrdXB8ZW58MXx8fHwxNzc2MjQ1NzM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    technologies: ['Ionic', 'Angular', 'Fat-Free', 'PHP', 'MySQL', 'QR Code'],
    period: 'Proyecto Personal',
    github: 'https://github.com',
    demo: 'https://example.com'
  }
];

export function Projects() {
  return (
    <section id="proyectos" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Proyectos Destacados
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Una selección de mis trabajos más recientes en desarrollo de software. Cada proyecto representa 
            un desafío único y una oportunidad de crear soluciones eficientes e innovadoras.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full hover:shadow-xl transition-shadow">
                <div className="relative overflow-hidden group">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-sm font-medium">{project.period}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Código
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                      onClick={() => window.open(project.demo, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
