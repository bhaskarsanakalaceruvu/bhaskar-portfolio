import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Bank Management System */}
            <div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">Bank Management System</h3>
              <p className="text-gray-400 mb-4">
                Modular banking system using Java (Swing) and MySQL with full SDLC practices including design, JUnit testing, and optimized SQL queries.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Java", "Swing", "MySQL", "JUnit"].map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                  View Project →
                </a>
              </div>
            </div>

            {/* AI Job Portal */}
            <div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">AI Job Portal</h3>
              <p className="text-gray-400 mb-4">
                MERN stack job portal with user/recruiter roles, authentication, job applications, and dashboard tracking.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React.js", "Node.js", "Express.js", "MongoDB"].map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                  View Project →
                </a>
              </div>
            </div>

            {/* Diabetes Prediction */}
            <div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">Diabetes Prediction</h3>
              <p className="text-gray-400 mb-4">
                Machine learning model to predict diabetes using Python, scikit-learn, TensorFlow, and Keras with preprocessing and tuning.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "scikit-learn", "TensorFlow", "Keras"].map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                  View Project →
                </a>
              </div>
            </div>

            {/* Smart Agriculture System */}
            <div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">Smart Agriculture System</h3>
              <p className="text-gray-400 mb-4">
                Crop recommendation using RandomForest and plant disease detection with CNN. Deployed using Flask for real-time predictions.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "Flask", "RandomForest", "TensorFlow"].map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                  View Project →
                </a>
              </div>
            </div>

          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
