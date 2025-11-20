import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ContactPage: React.FC = () => {
  const { data } = useLanguage();
  const { contact } = data;
  const { form } = contact;

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
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">{contact.infoTitle}</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-indigo-500 mt-1 mr-4" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-gray-100">{contact.emailLabel}</p>
                  <a href={`mailto:${contact.email}`} className="text-gray-600 dark:text-gray-400 hover:text-indigo-500 transition-colors">
                    {contact.email}
                  </a>
                </div>
              </div>
              {contact.phone && (
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-indigo-500 mt-1 mr-4" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-gray-100">{contact.phoneLabel}</p>
                    <p className="text-gray-600 dark:text-gray-400">{contact.phone}</p>
                  </div>
                </div>
              )}
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-indigo-500 mt-1 mr-4" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-gray-100">{contact.locationLabel}</p>
                  <p className="text-gray-600 dark:text-gray-400">{contact.location}</p>
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
                  {form.nameLabel}
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  className="block w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow"
                  placeholder={form.namePlaceholder}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {form.emailLabel}
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  className="block w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow"
                  placeholder={form.emailPlaceholder}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {form.messageLabel}
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  value={formState.message}
                  onChange={handleChange}
                  className="block w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow"
                  placeholder={form.messagePlaceholder}
                ></textarea>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => {
                    const phoneNumber = contact.phone?.replace(/\D/g, '') || '';
                    const text = form.whatsappMessage
                      .replace('{name}', formState.name)
                      .replace('{email}', formState.email)
                      .replace('{message}', formState.message);
                    const encodedText = encodeURIComponent(text);
                    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;
                    window.open(whatsappUrl, '_blank');
                    setFormState({ name: '', email: '', message: '' });
                  }}
                  className="w-full inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors shadow-md hover:shadow-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  {form.whatsappButton}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const subject = form.emailSubject.replace('{name}', formState.name);
                    const body = form.emailBody
                      .replace('{name}', formState.name)
                      .replace('{email}', formState.email)
                      .replace('{message}', formState.message);
                    const mailtoUrl = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                    window.location.href = mailtoUrl;
                    setFormState({ name: '', email: '', message: '' });
                  }}
                  className="w-full inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors shadow-md hover:shadow-lg"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  {form.emailButton}
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