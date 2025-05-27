import { RevealOnScroll } from "../RevealOnScroll";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export const About = () => {
  const frontendSkills = [
    { name: "HTML5", level: 100 },
    { name: "CSS3", level: 98 },
    { name: "JavaScript", level: 96 },
    { name: "React.js", level: 94 },
    { name: "Bootstrap", level: 92 },
  ];

  const backendSkills = [
    { name: "Java", level: 97 },
    { name: "Spring Boot", level: 94 },
    { name: "Node.js", level: 92 },
    { name: "Express.js", level: 91 },
    { name: "MongoDB", level: 90 },
    { name: "MySQL", level: 90 },
  ];

  const renderCircularSkill = (skill) => (
    <div key={skill.name} className="flex flex-col items-center gap-2">
      <div className="w-24 h-24">
        <CircularProgressbar
          value={skill.level}
          text={`${skill.level}%`}
          styles={buildStyles({
            textSize: "16px",
            pathColor: "#3B82F6",
            textColor: "#E5E7EB",
            trailColor: "#1F2937",
          })}
        />
      </div>
      <span className="text-sm text-gray-300">{skill.name}</span>
    </div>
  );

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate and detail-oriented frontend-focused full stack developer
              skilled in crafting responsive and user-friendly web interfaces
              using HTML5, CSS3, JavaScript, React.js, and Bootstrap. I enjoy
              transforming ideas into elegant UI experiences and writing clean,
              maintainable code that scales. With hands-on experience in backend
              technologies like Java, Spring Boot, Node.js, and MongoDB, I’m capable
              of building complete end-to-end solutions. Strong understanding of core
              CS fundamentals like data structures, OOP, and SDLC principles. I’m
              committed to continuous learning, performance optimization, and
              delivering seamless user experiences in agile development environments.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Frontend Skills */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="grid grid-cols-3 gap-4">
                  {frontendSkills.map(renderCircularSkill)}
                </div>
              </div>

              {/* Backend Skills */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="grid grid-cols-3 gap-4">
                  {backendSkills.map(renderCircularSkill)}
                </div>
              </div>
            </div>
          </div>

          {/* Education and Skills Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>B.Tech in Computer Science Engineering</strong> – VIT-AP University, Amaravati (2021 – 2025) – CGPA: 8.05
                </li>
                <li>
                  <strong>Intermediate (MPC)</strong> – Sri Chaitanya Junior College, Kurnool (2018 – 2020) – 95.6%
                </li>
                <li>
                  <strong>SSC</strong> – Sri Saraswathi EM High School, Anantapur (2008 – 2018) – 100%
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💡 Key Skills & Concepts </h3>
              <div className="space-y-2 text-gray-300">
                <p><strong>Languages:</strong> Java (Core, OOP), Python</p>
                <p><strong>Databases:</strong> MySQL, MongoDB, SQL</p>
                <p><strong>Tools:</strong> Git, GitHub, Postman, VS Code, IntelliJ IDEA</p>
                <p><strong>Testing:</strong> JUnit, GitHub Actions, Basic TDD</p>
                <p><strong>Concepts:</strong> SDLC, OOP, MVC, SOA (Exposure), Microservices (Beginner)</p>
                <p><strong>Soft Skills:</strong> Communication, Team Collaboration, Problem Solving, Ownership</p>
              </div>
            </div>
          </div>

          {/* Certifications Section */}
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all mt-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold mb-4"> 🎓 Certifications </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li><strong>Artificial Intelligence and
Machine Learning</strong> – Powered
by Google Developers</li>
              <li><strong>Oracle APEX Cloud
Developer Certified
Professional
</strong> – Oracle</li>
              <li><strong>Python Programming Certificate</strong> – HackerRank</li>
              <li><strong>Java Developer Certification</strong> – HackerRank</li>
            </ul>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
