import type { Skill } from '../../utils/types';
// import "./aboutme.css"
export default function Aboutme() {
    const skills: Skill[] = [
      { name: 'HTML/CSS', level: 90, category: 'Frontend' },
      { name: 'JavaScript', level: 85, category: 'Frontend/Backend(nodejs)' },
      { name: 'TypeScript', level: 80, category: 'Frontend/Backend(nodejs)' },
      { name: 'React', level: 88, category: 'Frontend' },
      { name: 'Node.js', level: 75, category: 'Backend' },
    
    ];

  
    return (
      <section className="about">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate fullstack developer with 2years of experience creating modern web applications.
              I specialize in React, TypeScript, and nodejs
            </p>
            <p>
              When I'm not coding, you can find me  reading tech blogs, or experimenting with new CSS techniques.
              I believe in continuous learning and staying updated with the latest web technologies.
            </p>
          </div>
          <div className="skills">
            <h3>Skills</h3>
            <div className="skills-container">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  
}
