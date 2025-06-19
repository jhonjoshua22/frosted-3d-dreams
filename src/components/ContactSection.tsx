
import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      alert('Message sent successfully!');
    }, 2000);
  };

  const contactInfo = [
    {
      icon: 'fas fa-envelope',
      label: 'Email',
      value: 'sjosh2503@gmail.com',
      href: 'mailto:sjosh2503@gmail.com',
      color: 'neon-cyan'
    },
    {
      icon: 'fas fa-phone',
      label: 'Phone',
      value: '09539378933',
      href: 'tel:09539378933',
      color: 'bright-purple'
    },
    {
      icon: 'fab fa-linkedin',
      label: 'LinkedIn',
      value: 'Connect with me',
      href: '#',
      color: 'neon-cyan'
    },
    {
      icon: 'fab fa-github',
      label: 'GitHub',
      value: 'View my code',
      href: '#',
      color: 'bright-purple'
    }
  ];

  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 scroll-element">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-gradient mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind or want to collaborate? I'd love to hear from you. 
            Let's create something amazing together!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="scroll-element">
            <div className="glass-card p-8 rounded-3xl">
              <h3 className="text-2xl font-semibold text-neon-cyan mb-8">Get In Touch</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className={`interactive flex items-center p-4 glass-card-dark rounded-xl hover:bg-${info.color}/10 transition-all duration-300 hover:scale-105 group`}
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${
                      info.color === 'neon-cyan' 
                        ? 'from-neon-cyan to-blue-400' 
                        : 'from-bright-purple to-pink-400'
                    } rounded-full flex items-center justify-center mr-4 group-hover:animate-pulse`}>
                      <i className={`${info.icon} text-dark-bg text-lg`} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{info.label}</h4>
                      <p className={`text-${info.color} text-sm`}>{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Stats */}
              <div className="mt-8 p-6 glass-card-dark rounded-xl">
                <h4 className="text-white font-semibold mb-4">Let's Build Something Great</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-neon-cyan">15+</div>
                    <div className="text-sm text-gray-400">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-bright-purple">24/7</div>
                    <div className="text-sm text-gray-400">Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="scroll-element">
            <form onSubmit={handleSubmit} className="glass-card p-8 rounded-3xl">
              <h3 className="text-2xl font-semibold text-bright-purple mb-8">Send Message</h3>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-medium mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 glass-card-dark rounded-xl border border-gray-600 focus:border-neon-cyan bg-transparent text-white placeholder-gray-400 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 glass-card-dark rounded-xl border border-gray-600 focus:border-bright-purple bg-transparent text-white placeholder-gray-400 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 glass-card-dark rounded-xl border border-gray-600 focus:border-neon-cyan bg-transparent text-white placeholder-gray-400 transition-colors"
                    placeholder="Project collaboration"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 glass-card-dark rounded-xl border border-gray-600 focus:border-bright-purple bg-transparent text-white placeholder-gray-400 resize-none transition-colors"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="interactive w-full bg-gradient-to-r from-neon-cyan to-bright-purple py-4 rounded-xl font-semibold text-dark-bg transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <i className="fas fa-spinner fa-spin mr-2" />
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 scroll-element">
          <div className="glass-card p-6 rounded-2xl inline-block">
            <p className="text-gray-400">
              © 2024 Jhon Joshua Abutan. Crafted with 
              <span className="text-bright-purple mx-1">♥</span> 
              and lots of 
              <span className="text-neon-cyan">coffee</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
