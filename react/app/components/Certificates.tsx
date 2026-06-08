import { motion } from 'motion/react';
import { Award, ExternalLink } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

const certificates = [
  {
    title: 'NestJS Authentication',
    issuer: 'Plataforma Online',
    category: 'Backend',
    description: 'Autenticación y autorización con NestJS',
    color: 'from-red-500 to-pink-500'
  },
  {
    title: 'NestJS Modular Programming',
    issuer: 'Plataforma Online',
    category: 'Backend',
    description: 'Programación modular con NestJS',
    color: 'from-red-500 to-pink-500'
  },
  {
    title: 'NestJS TypeORM',
    issuer: 'Plataforma Online',
    category: 'Backend',
    description: 'ORM y gestión de bases de datos con TypeORM',
    color: 'from-red-500 to-pink-500'
  },
  {
    title: 'Backend with NestJS',
    issuer: 'Plataforma Online',
    category: 'Backend',
    description: 'Desarrollo backend completo con NestJS',
    color: 'from-red-500 to-pink-500'
  },
  {
    title: 'NestJS MongoDB',
    issuer: 'Plataforma Online',
    category: 'Backend',
    description: 'Integración de MongoDB con NestJS',
    color: 'from-red-500 to-pink-500'
  },
  {
    title: 'Ethical Hacking',
    issuer: 'Plataforma Online',
    category: 'Hacking',
    description: 'Fundamentos de hacking ético',
    color: 'from-purple-500 to-indigo-500'
  },
  {
    title: 'Pentesting',
    issuer: 'Plataforma Online',
    category: 'Hacking',
    description: 'Pruebas de penetración y seguridad',
    color: 'from-purple-500 to-indigo-500'
  },
  {
    title: 'Social Engineering',
    issuer: 'Plataforma Online',
    category: 'Hacking',
    description: 'Ingeniería social y seguridad',
    color: 'from-purple-500 to-indigo-500'
  },
  {
    title: 'Web Hacking',
    issuer: 'Plataforma Online',
    category: 'Hacking',
    description: 'Seguridad en aplicaciones web',
    color: 'from-purple-500 to-indigo-500'
  },
  {
    title: 'Python Fundamentals',
    issuer: 'Plataforma Online',
    category: 'Programming',
    description: 'Fundamentos de programación en Python',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Comprehensions, Functions & Error Handling',
    issuer: 'Plataforma Online',
    category: 'Programming',
    description: 'Python avanzado y manejo de errores',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    category: 'Programming',
    description: 'Fundamentos de AWS Cloud',
    color: 'from-orange-500 to-yellow-500'
  },
  {
    title: 'Web Development Path',
    issuer: 'Plataforma Online',
    category: 'Programming',
    description: 'Ruta completa de desarrollo web',
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Programming from Zero',
    issuer: 'Plataforma Online',
    category: 'Programming',
    description: 'Fundamentos de programación',
    color: 'from-gray-500 to-slate-500'
  }
];

const categories = ['Todos', 'Backend', 'Hacking', 'Programming'];

export function Certificates() {
  const [selectedCategory, setSelectedCategory] = React.useState('Todos');

  const filteredCertificates = selectedCategory === 'Todos'
    ? certificates
    : certificates.filter(cert => cert.category === selectedCategory);

  return (
    <section id="certificados" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Certificaciones
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Formación continua en tecnologías modernas, seguridad informática y buenas prácticas de desarrollo.
          </p>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCertificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Card className="p-6 h-full hover:shadow-xl transition-all hover:-translate-y-1 border-2 border-transparent hover:border-purple-200">
                <div className="flex items-start justify-between mb-4">
                  <div className={`bg-gradient-to-r ${cert.color} w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {cert.category}
                  </Badge>
                </div>

                <h3 className="font-bold mb-2 text-lg">{cert.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{cert.issuer}</p>
                <p className="text-sm text-gray-500">{cert.description}</p>

                <button 
                  className="mt-4 text-purple-600 hover:text-purple-700 text-sm font-medium flex items-center gap-2 group"
                  onClick={() => alert('Certificado verificado ✓')}
                >
                  Ver certificado
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// React import for useState
import * as React from 'react';
