import { motion } from 'motion/react';
import { Badge } from './ui/badge';

const skillCategories = [
  {
    title: 'Backend',
    skills: [
      'NestJS', 'Spring Boot', 'Express', 'Laravel', 'Node.js',
      'Fat-Free Framework', 'PHP', 'Java', 'Python'
    ],
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Frontend',
    skills: [
      'Angular', 'Ionic', 'JavaScript', 'TypeScript', 'HTML5', 
      'CSS3', 'FXML', 'Responsive Design'
    ],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Bases de Datos',
    skills: [
      'SQL Server', 'MySQL', 'PostgreSQL', 'MongoDB', 
      'Firestore', 'NoSQL', 'Database Design'
    ],
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'DevOps & Herramientas',
    skills: [
      'Git', 'GitHub', 'AWS Cloud', 'Deployment', 'Linux',
      'Server Management', 'CI/CD', 'Docker'
    ],
    color: 'from-orange-500 to-red-500'
  },
  {
    title: 'IoT & Sistemas Especializados',
    skills: [
      'IoT Development', 'Real-time Systems', 'ECG Monitoring',
      'Signal Processing', 'Statistical Analysis', 'Data Visualization'
    ],
    color: 'from-indigo-500 to-purple-500'
  },
  {
    title: 'Seguridad & Hacking',
    skills: [
      'Ethical Hacking', 'Pentesting', 'Social Engineering',
      'Web Hacking', 'Security Best Practices', 'Network Security'
    ],
    color: 'from-red-500 to-pink-500'
  }
];

export function Skills() {
  return (
    <section id="habilidades" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Tecnologías & Habilidades
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stack tecnológico completo que utilizo para desarrollar soluciones robustas, escalables 
            y seguras en diversos dominios de aplicación.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-6">
                <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${category.color} mr-4`} />
                <h3 className="text-2xl font-bold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                  >
                    <Badge 
                      variant="secondary" 
                      className="px-4 py-2 text-sm hover:bg-purple-100 transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600">
            🚀 En constante aprendizaje y actualización de habilidades técnicas
          </p>
        </motion.div>
      </div>
    </section>
  );
}
