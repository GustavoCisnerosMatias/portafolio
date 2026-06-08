import { motion } from 'motion/react';
import { Briefcase, Calendar } from 'lucide-react';
import { Card } from './ui/card';

const experiences = [
  {
    role: 'Desarrollador de Software',
    company: 'Ministerio de Desarrollo Humano',
    period: 'Diciembre 2025 - Actualmente',
    description: 'Encargado del desarrollo full stack, utilizando Spring Boot, Angular y SQL Server para crear soluciones eficientes que mejoran la operatividad y la transformación digital.',
    achievements: [
      'Desarrollo de soluciones digitales institucionales',
      'Implementación de buenas prácticas de programación',
      'Optimización de procesos administrativos'
    ]
  },
  {
    role: 'Desarrollador de Software',
    company: 'Ministerio de Gobierno',
    period: 'Noviembre 2025 - Diciembre 2025',
    description: 'Desarrollador de software en los sistemas del Ministerio de Gobierno, responsable del diseño, implementación y optimización de soluciones digitales.',
    achievements: [
      'Diseño de arquitectura de software',
      'Mejora de eficiencia en gestión administrativa',
      'Implementación de sistemas escalables'
    ]
  },
  {
    role: 'Desarrollador Full Stack',
    company: 'Sistema TECED - Proyecto Universitario',
    period: 'Marzo 2025 - Septiembre 2025',
    description: 'Desarrollé un sistema de monitoreo remoto de ECG con adquisición y visualización de señales en tiempo real.',
    achievements: [
      'Procesamiento de más de 50K registros de señales ECG',
      'Implementación de módulo de análisis estadístico',
      'Detección de falsos positivos con IoT',
      'Desarrollo de sistema de tiempo real'
    ]
  },
  {
    role: 'Desarrollador Full Stack',
    company: 'FACSISTEL - Universidad UPSE',
    period: 'Noviembre 2024 - Febrero 2025',
    description: 'Implementé un sistema de gestión de reportes e incidencias técnicas para el área de TI de la universidad.',
    achievements: [
      'Desarrollo desde concepción hasta despliegue',
      'Configuración de servidores de producción',
      'Implementación de entorno seguro y escalable',
      'Gestión de reportes técnicos en tiempo real'
    ]
  },
  {
    role: 'Desarrollador Web',
    company: 'CAC Santa Elena - Freelance',
    period: 'Julio 2024 - Octubre 2024',
    description: 'Implementé una aplicación web con Firestore en tiempo real para optimizar el control de asistencias en la provincia.',
    achievements: [
      '161K lecturas en Firestore',
      '5.9K escrituras de datos',
      '500 eliminaciones optimizadas',
      'Reemplazo de sistema manual en Excel'
    ]
  },
  {
    role: 'Desarrollador Full Stack',
    company: 'AGUAPEN Manglaralto',
    period: 'Marzo 2024 - Junio 2024',
    description: 'Colaboré en el desarrollo de un sistema de reportes para la empresa de agua potable.',
    achievements: [
      'Generación y visualización de reportes operativos',
      'Apoyo en facturación electrónica con SRI',
      'Control de versiones con Git y GitHub',
      'Desarrollo con Angular, Express y MySQL'
    ]
  },
  {
    role: 'Desarrollador',
    company: 'BMCodigoMarriet S.A.S',
    period: 'Marzo 2023 - Marzo 2024',
    description: 'Encargado del desarrollo del sistema contable y de la plataforma de eventos deportivos.',
    achievements: [
      'Diseño de sistema contable completo',
      'Implementación de plataforma de eventos deportivos',
      'Fortalecimiento de gestión contable',
      'Innovación en gestión de eventos'
    ]
  }
];

export function Experience() {
  return (
    <section id="experiencia" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Experiencia Profesional
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Mi trayectoria profesional abarca proyectos gubernamentales, universitarios y freelance, 
            donde he aplicado mis conocimientos para crear soluciones tecnológicas innovadoras.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-200 via-blue-200 to-purple-200"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative ${
                  index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'
                } md:w-1/2`}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute top-6 left-1/2 w-4 h-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full -translate-x-1/2 ring-4 ring-white"></div>

                <Card className="p-6 hover:shadow-xl transition-shadow border-l-4 border-purple-600">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-gradient-to-r from-purple-100 to-blue-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-6 h-6 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                      <p className="text-purple-600 font-medium mb-2">{exp.company}</p>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{exp.description}</p>
                  
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start text-sm text-gray-700">
                        <span className="text-purple-600 mr-2">✓</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
