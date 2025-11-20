import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, MapPin } from 'lucide-react';
import { contact } from '../constants';

const ContactPage: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 tracking-tight"
          >
            {contact.title}
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-lg text-gray-600 dark:text-gray-400"
          >
            {contact.description}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Informações de Contato</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-indigo-500 mt-1 mr-4" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-gray-100">Email</p>
                  <a href={`mailto:${contact.email}`} className="text-gray-600 dark:text-gray-400 hover:text-indigo-500 transition-colors">
                    {contact.email}
                  </a>
                </div>
              </div>
              {contact.phone && (
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-indigo-500 mt-1 mr-4" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-gray-100">Telefone</p>
                    <p className="text-gray-600 dark:text-gray-400">{contact.phone}</p>
                  </div>
                </div>
              )}
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-indigo-500 mt-1 mr-4" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-gray-100">Localização</p>
                  <p className="text-gray-600 dark:text-gray-400">Foz Do Iguaçu, Brasil</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800"
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Nome
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  className="block w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  className="block w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Mensagem
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  value={formState.message}
                  onChange={handleChange}
                  className="block w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow"
                  placeholder="Sua mensagem..."
                ></textarea>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => {
                    const phoneNumber = contact.phone?.replace(/\D/g, '') || '';
                    const text = `Olá, meu nome é ${formState.name}. Meu email é ${formState.email}. ${formState.message}`;
                    const encodedText = encodeURIComponent(text);
                    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;
                    window.open(whatsappUrl, '_blank');
                    setFormState({ name: '', email: '', message: '' });
                  }}
                  className="w-full inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors shadow-md hover:shadow-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  WhatsApp
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const subject = `Contato pelo Portfólio de ${formState.name}`;
                    const body = `Nome: ${formState.name}%0D%0AEmail: ${formState.email}%0D%0A%0D%0AMensagem:%0D%0A${formState.message}`;
                    const mailtoUrl = `mailto:${contact.email}?subject=${subject}&body=${body}`;
                    window.location.href = mailtoUrl;
                    setFormState({ name: '', email: '', message: '' });
                  }}
                  className="w-full inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors shadow-md hover:shadow-lg"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Email
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;