const About = () => {
  return (
    <section id="about" className="section-padding fade-in px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10 sm:mb-12 text-center">
          About Me
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left content */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Hello! I'm Rohit Bairwa
            </h3>
            <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed">
              A passionate Computer Science Engineering student at CITM College Sitapura, Jaipur, 
              with a strong foundation in full-stack development and a keen interest in creating 
              innovative software solutions.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I have hands-on experience working with technologies like Java, React, Angular, 
              Firebase, and Oracle SQL through my internships and projects. I'm always eager 
              to learn new technologies and take on challenging problems.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-600">
              <div>
                <p className="font-semibold text-gray-800">Phone:</p>
                <p>+91-6367844774</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Email:</p>
                <p>rohit1000mel@gmail.com</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Location:</p>
                <p>Sanganer, Jaipur</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Education:</p>
                <p>B.Tech CSE (2021-25)</p>
              </div>
            </div>
          </div>
          
          {/* Right content */}
          <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-6 sm:p-8 text-white">
            <h4 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">My Interests</h4>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
                Full Stack Development
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
                Cloud Technologies
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
                Data Management Systems
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
