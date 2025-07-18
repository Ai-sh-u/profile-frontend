import React from 'react';

function Skills() {
  const frontendSkills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React.js',
    'Responsive Design',
  ];

  const backendSkills = [
    'Node.js',
    'Express.js',
    'MongoDB',
    'Python',
    'Git & GitHub',
  ];

  return (
    <div className="page-center">
      <div className="page-content">
        <h1>My Skills</h1>

        <h3>Frontend Development</h3>
        <div className="skills-row">
          {frontendSkills.map((skill, index) => (
            <span key={index} className="skill-badge">
              {skill}
            </span>
          ))}
        </div>

        <h3>Backend & Tools</h3>
        <div className="skills-row">
          {backendSkills.map((skill, index) => (
            <span key={index} className="skill-badge">
              {skill}
            </span>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Skills;
