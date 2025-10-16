const About = () => {
  return (
    <section id="about" className="section-padding fade-in">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Hello! I'm Rohit Bairwa</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              A passionate Computer Science Engineering student at CITM College Sitapura, Jaipur, 
              with a strong foundation in full-stack development and a keen interest in creating 
              innovative software solutions.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I have hands-on experience working with technologies like Java, React, Angular, 
              Firebase, and Oracle SQL through my internships and projects. I'm always eager 
              to learn new technologies and take on challenging problems.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-gray-800">Phone:</p>
                <p className="text-gray-600">+91-6367844774</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Email:</p>
                <p className="text-gray-600">rohit1000mel@gmail.com</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Location:</p>
                <p className="text-gray-600">Sanganer, Jaipur</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Education:</p>
                <p className="text-gray-600">B.Tech CSE (2021-25)</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-8 text-white">
            <h4 className="text-2xl font-bold mb-6">My Interests</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                Full Stack Development
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                Cloud Technologies
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                Data Management Systems
              </li>
              {/* <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                Mobile App Development
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                UI/UX Design
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About