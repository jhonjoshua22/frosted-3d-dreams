
const AboutSection = () => {
  const skills = [
    { name: 'HTML/CSS', level: 95, color: 'neon-cyan' },
    { name: 'JavaScript', level: 90, color: 'bright-purple' },
    { name: 'React', level: 85, color: 'neon-cyan' },
    { name: 'Figma', level: 88, color: 'bright-purple' },
    { name: 'UI/UX Design', level: 92, color: 'neon-cyan' },
    { name: 'Social Media', level: 87, color: 'bright-purple' },
  ];

  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 scroll-element">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-gradient mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate frontend developer and designer who loves creating digital experiences 
            that not only look stunning but also provide exceptional user experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="scroll-element">
            <div className="glass-card p-8 rounded-3xl hover:purple-glow transition-all duration-500 hover:scale-105">
              <h3 className="text-2xl font-semibold text-neon-cyan mb-6">My Journey</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                With a keen eye for design and a passion for clean, efficient code, I specialize in 
                creating responsive web applications that deliver seamless user experiences across all devices.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                My expertise spans from frontend development using modern frameworks to crafting 
                intuitive UI/UX designs and managing comprehensive social media strategies.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Problem Solver', 'Creative Thinker', 'Team Player', 'Detail Oriented'].map((trait) => (
                  <span
                    key={trait}
                    className="px-4 py-2 glass-card-dark rounded-full text-sm text-neon-cyan border border-neon-cyan/30"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="scroll-element">
            <div className="glass-card p-8 rounded-3xl">
              <h3 className="text-2xl font-semibold text-bright-purple mb-8">Skills & Expertise</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className={`text-${skill.color} font-semibold`}>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${
                          skill.color === 'neon-cyan' 
                            ? 'from-neon-cyan to-blue-400' 
                            : 'from-bright-purple to-pink-400'
                        } rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse`}
                        style={{
                          width: `${skill.level}%`,
                          boxShadow: `0 0 20px ${skill.color === 'neon-cyan' ? '#00FFFF' : '#D100FF'}40`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
