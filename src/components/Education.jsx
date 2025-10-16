const Education = () => {
  const educationData = [
    {
      period: "2021-25",
      institution: "Compucom Institute of Technology & Management, Sitapura",
      degree: "Bachelor of Technology, Computer Science & Engineering",
      score: "7.80/10"
    },
    {
      period: "2021",
      institution: "Rajasthan Board of Secondary Education",
      degree: "12th (Senior Secondary Examination)",
      score: "94.20%"
    },
    {
      period: "2019",
      institution: "Rajasthan Board of Secondary Education",
      degree: "10th (Secondary Examination)",
      score: "83.33%"
    }
  ]

  return (
    <section id="education" className="section-padding bg-white fade-in">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Education</h2>
        
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div key={index} className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <div>
                  <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-3">
                    {edu.period}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{edu.institution}</h3>
                  <p className="text-gray-600 mb-4">{edu.degree}</p>
                </div>
                <div className="bg-white rounded-lg px-4 py-2 shadow-sm">
                  <span className="text-2xl font-bold text-blue-600">{edu.score}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education