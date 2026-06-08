import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Send, CreditCard } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card } from './ui/card';
import { useState } from 'react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'gustavo.cisnerosmatias@gmail.com',
    href: 'mailto:gustavo.cisnerosmatias@gmail.com'
  },
  {
    icon: Phone,
    label: 'Teléfono',
    value: '+593 96 289 9185',
    href: 'tel:+593962899185'
  },
  {
    icon: MapPin,
    label: 'Ubicación',
    value: 'Ecuador',
    href: null
  },
  {
    icon: CreditCard,
    label: 'Cédula',
    value: '0928149996',
    href: null
  }
];

const references = [
  {
    name: 'Ing. Marjorie Coronel. Mgt',
    email: 'mcoronel@upse.edu.ec',
    phone: '+593 98 011 1775'
  },
  {
    name: 'Ing. Marcia Bayas. Ph.D',
    email: 'm.bayas@upse.edu.ec',
    phone: '+593 96 002 7261'
  },
  {
    name: 'Ing. Angela Parra',
    email: 'angela14parrafernandez@gmail.com',
    phone: '+593 96 239 6182'
  }
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    alert('¡Mensaje enviado! (Demo)');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Contacto
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Me encantaría escucharte y colaborar contigo 
            en el desarrollo de soluciones tecnológicas innovadoras.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
            
            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4">
                      <div className="bg-gradient-to-r from-purple-100 to-blue-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">{info.label}</p>
                        {info.href ? (
                          <a 
                            href={info.href} 
                            className="font-medium text-gray-900 hover:text-purple-600 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="font-medium text-gray-900">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8">
              <h4 className="font-semibold mb-3">¿Por qué trabajar conmigo?</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  Código limpio y bien documentado
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  Experiencia en proyectos gubernamentales
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  Especialización en sistemas escalables
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  Formación continua en nuevas tecnologías
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6">Envíame un Mensaje</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nombre
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre completo"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Cuéntame sobre tu proyecto..."
                    rows={6}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Enviar Mensaje
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>

        {/* Referencias */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Referencias Profesionales</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {references.map((ref, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                  <h4 className="font-bold mb-2">{ref.name}</h4>
                  <a 
                    href={`mailto:${ref.email}`}
                    className="text-sm text-purple-600 hover:text-purple-700 block mb-1"
                  >
                    {ref.email}
                  </a>
                  <a 
                    href={`tel:${ref.phone.replace(/\s/g, '')}`}
                    className="text-sm text-gray-600 hover:text-gray-700"
                  >
                    {ref.phone}
                  </a>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}