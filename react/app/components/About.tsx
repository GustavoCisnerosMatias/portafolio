import { motion } from 'motion/react';
import { Code2, Database, Shield, Zap } from 'lucide-react';
import { Card } from './ui/card';

const features = [
  {
    icon: Code2,
    title: 'Desarrollo Full Stack',
    description: 'Experiencia en Angular, Ionic, Spring Boot, NestJS, Laravel y Express.'
  },
  {
    icon: Database,
    title: 'Gestión de Datos',
    description: 'Manejo de SQL Server, MySQL, MongoDB y Firestore para soluciones escalables.'
  },
  {
    icon: Zap,
    title: 'IoT & Sistemas en Tiempo Real',
    description: 'Desarrollo de sistemas de monitoreo remoto con procesamiento de datos en tiempo real.'
  },
  {
    icon: Shield,
    title: 'Seguridad & Hacking Ético',
    description: 'Formación en seguridad informática, pentesting y ethical hacking.'
  }
];

export function About() {
  return (
    <section id="sobre-mi" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Sobre Mí
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ingeniero en Tecnologías de la Información con experiencia en desarrollo de software y 
            soluciones tecnológicas. Me especializo en construir aplicaciones web escalables y eficientes 
            que resuelven problemas reales, aplicando buenas prácticas de programación y metodologías ágiles.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow border-2 border-transparent hover:border-purple-200">
                <div className="bg-gradient-to-r from-purple-100 to-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-2xl font-bold mb-6">Mi Trayectoria</h3>
          <div className="space-y-4 text-gray-700">
            <p>
              Actualmente trabajo en el Ministerio de Desarrollo Humano y anteriormente en el Ministerio de Gobierno, 
              participando en proyectos institucionales que mejoran la eficiencia y la gestión administrativa. De forma 
              independiente, me he desempeñado como freelancer, desarrollando sistemas web como el del CAC de Santa Elena.
            </p>
            <p>
              Me mantengo en constante aprendizaje sobre las últimas tendencias y tecnologías del desarrollo web, 
              con formación en redes, bases de datos, sistemas operativos y seguridad informática, siempre buscando 
              aportar soluciones eficientes e innovadoras a cada proyecto.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}