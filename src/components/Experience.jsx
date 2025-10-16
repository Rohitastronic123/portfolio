const Experience = () => {
  const experiences = [
    {
      period: "Aug'24 - Sep'25",
      company: "Indian Oil Corporation Limited",
      position: "Software Developer Apprentice",
      location: "Adarsh Nagar, Jaipur",
      points: [
        "Gained practical experience and foundational understanding of industrial operations and workplace culture",
        "Acquired comprehensive knowledge of project lifecycle management by contributing to a live industrial project",
        "Gained practical experience in delivering projects that meticulously meet all requirements"
      ]
    },
    {
      period: "Dec'23 - Mar'24",
      company: "AU Ignite Future Skills Academy",
      position: "Salesforce (Java) Intern",
      location: "Gopalpura, Jaipur",
      points: [
        "Acquired practical knowledge of Salesforce (JAVA) development tools and techniques through structured training",
        "Designed and built a comprehensive hospital record management system",
        "Applied advanced data relationship modeling to optimize information flow and data integrity"
      ]
    }
  ]

  return (
    <section id="experience" className="section-padding fade-in">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Experience</h2>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <div>
                  <span className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-3">
                    {exp.period}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{exp.position}</h3>
                  <p className="text-xl text-blue-600 font-semibold mb-1">{exp.company}</p>
                  <p className="text-gray-500">{exp.location}</p>
                </div>
              </div>
              
              <ul className="space-y-3">
                {exp.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-600">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience