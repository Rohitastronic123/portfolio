const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "Python", "JavaScript"]
    },
    {
      title: "Web Technologies",
      skills: ["React", "Angular"]
    },
    {
      title: "Databases",
      skills: ["Oracle SQL", "MySQL"]
    },
    {
      title: "Tools & Others",
      skills: ["Git","Firebase"]
    }
  ]

  return (
    <section id="skills" className="section-padding fade-in">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Technical Skills</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center justify-between">
                    <span className="text-gray-700 font-medium">{skill}</span>
                    <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full"
                        style={{ width: `${Math.random() * 40 + 60}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Additional Achievement</h3>
          <p className="text-lg">Participant in Rajasthan Police Hackathon 1.0 (2024)</p>
        </div>
      </div>
    </section>
  )
}

export default Skills