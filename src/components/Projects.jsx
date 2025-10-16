const Projects = () => {
  const projects = [
    {
      period: "Feb-Mar'25",
      title: "RSO Canteen App",
      description: "Developed a real-time canteen ordering and management application using React and Firebase.",
      features: [
        "Enabled employees to place and track orders",
        "Provided canteen staff with real-time updates",
        "Integrated voice notification system for instant order alerts"
      ],
      technologies: ["React", "Firebase", "JavaScript"],
      outcome: "Improved operational efficiency through real-time order management"
    },
    {
      period: "Oct-Nov'24",
      title: "SANKALAN – IOCL LPG Data Management System",
      description: "Built with a four-module architecture for efficient LPG data management.",
      features: [
        "Leveraged Java for backend logic",
        "Used Angular for intuitive user interface",
        "Implemented Oracle SQL for data persistence"
      ],
      technologies: ["Java", "Angular", "Oracle SQL"],
      outcome: "Enhanced data organization and operational efficiency"
    }
  ]

  return (
    <section id="projects" className="section-padding bg-white fade-in">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100 hover:shadow-lg transition-shadow duration-300">
              <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                {project.period}
              </span>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{project.title}</h3>
              <p className="text-gray-600 mb-6">{project.description}</p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-white px-3 py-1 rounded-full text-sm text-blue-600 border border-blue-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <h4 className="font-semibold text-gray-800 mb-2">Outcome:</h4>
                <p className="text-gray-600">{project.outcome}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects