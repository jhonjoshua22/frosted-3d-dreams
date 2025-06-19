
const ProjectsSection = () => {
  const projects = [
    {
      title: 'Smart Clinic',
      description: 'A comprehensive healthcare management system with patient records, appointment scheduling, and medical inventory management.',
      technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
      features: ['Patient Management', 'Appointment System', 'Medical Records', 'Inventory Tracking'],
      color: 'neon-cyan',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Racing Game',
      description: 'An interactive browser-based racing game with smooth animations, collision detection, and responsive controls.',
      technologies: ['JavaScript', 'HTML5 Canvas', 'CSS3'],
      features: ['Real-time Physics', 'Collision Detection', 'Responsive Controls', 'Score System'],
      color: 'bright-purple',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 scroll-element">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-gradient mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore some of my recent work that showcases my skills in web development, 
            design, and problem-solving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="scroll-element group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="glass-card rounded-3xl overflow-hidden hover:scale-105 transition-all duration-500 hover:purple-glow">
                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className={`text-2xl font-bold text-${project.color} mb-2`}>
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature) => (
                        <div
                          key={feature}
                          className="text-sm text-gray-400 flex items-center"
                        >
                          <div className={`w-2 h-2 rounded-full bg-${project.color} mr-2`} />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`px-3 py-1 glass-card-dark rounded-full text-sm text-${project.color} border border-${project.color}/30 hover:bg-${project.color}/10 transition-colors`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <button className={`interactive flex-1 glass-card-dark hover:bg-${project.color}/10 py-3 rounded-xl font-semibold text-${project.color} border border-${project.color}/30 transition-all duration-300 hover:scale-105`}>
                      View Project
                    </button>
                    <button className={`interactive flex-1 bg-gradient-to-r ${
                      project.color === 'neon-cyan' 
                        ? 'from-neon-cyan to-blue-400' 
                        : 'from-bright-purple to-pink-400'
                    } py-3 rounded-xl font-semibold text-dark-bg transition-all duration-300 hover:scale-105 hover:shadow-lg`}>
                      Live Demo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
