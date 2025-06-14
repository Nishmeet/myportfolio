
import React from 'react';
import '../styles/Skills.css';
// Import all icons
const cIcon = require('../assets/c.png');
const cppIcon = require('../assets/cpp.png');
const pythonIcon = require('../assets/python.png');
const javascriptIcon = require('../assets/javascript.png');
const typescriptIcon = require('../assets/typescript.png');
const javaIcon = require('../assets/java.png');
const htmlIcon = require('../assets/html.png');
const cssIcon = require('../assets/css3.png');
const tailwindIcon = require('../assets/tailwind2.png');
const bootstrapIcon = require('../assets/bootstrap.png');
const djangoIcon = require('../assets/django.png');
 const expressIcon = require('../assets/express.png');
 const nodeIcon = require('../assets/nodejs.png');
 const mysqlIcon = require('../assets/mysql.png');
 const sqliteIcon = require('../assets/sqlite.png');
 const postgresqlIcon = require('../assets/postgresql.png');
 const apiIcon = require('../assets/api.png');
 const npmIcon = require('../assets/npm.png');
 const figmaIcon = require('../assets/figma.png');
 const githubIcon = require('../assets/github.png');
 const vscodeIcon = require('../assets/vscode.png');
 const photoshopIcon = require('../assets/photoshop.png');
 const indesignIcon = require('../assets/indesign.png');
 const adobelightroomIcon = require('../assets/adobelightroom.png');
 const adobeillustratorIcon = require('../assets/illustrator.png');
 const gitIcon = require('../assets/git.png');
 const cypressIcon = require('../assets/cypress.png');
 const jqueryIcon = require('../assets/jquery.png');
 const reactIcon = require('../assets/react.png');
const Skills = () => {
  const skillsData = {
    Languages: [
      { name: 'C', icon: cIcon },
      { name: 'C++', icon: cppIcon },
      { name: 'Python', icon: pythonIcon },
      { name: 'JavaScript', icon: javascriptIcon },
      { name: 'TypeScript', icon: typescriptIcon },
      { name: 'Java', icon: javaIcon },
    ],
     Frontend: [
      { name: 'HTML5', icon: htmlIcon },
      { name: 'CSS3', icon: cssIcon },
      { name: 'Tailwind', icon: tailwindIcon },
    
      { name: 'Bootstrap', icon: bootstrapIcon },
      {name:'jquery',icon:jqueryIcon},
      {name:'react',icon:reactIcon},
     ],
     Backend: [
     { name: 'Django', icon: djangoIcon },
     { name: 'Express', icon: expressIcon },
     { name: 'Node.js', icon: nodeIcon },
    //   { name: 'Socket.io', icon: socketioIcon },
     ],
    // Cloud: [
    //   { name: 'AWS', icon: awsIcon },
    //   { name: 'Heroku', icon: herokuIcon },
    //   { name: 'Docker', icon: dockerIcon },
    // ],
     Databases: [
       { name: 'MySQL', icon: mysqlIcon },
       { name: 'SQLite', icon: sqliteIcon },
       { name: 'PostgreSQL', icon: postgresqlIcon },
       { name: 'API', icon: apiIcon },
     ],
    Tools: [
       { name: 'npm', icon: npmIcon },
     
      { name: 'GitHub', icon: githubIcon },
      { name: 'git', icon: gitIcon },
    //   { name: 'Git', icon: gitIcon },
    //   { name: 'Webpack', icon: webpackIcon },
    //   { name: 'Postman', icon: postmanIcon },
    {name:'cypress',icon:cypressIcon},
      { name: 'VS Code', icon: vscodeIcon },
      // { name: 'Photoshop', icon: photoshopIcon },
      // { name: 'InDesign', icon: indesignIcon },
      // { name: 'Adobe Lightroom', icon: adobelightroomIcon },
      // { name: 'Adobe Illustrator', icon: adobeillustratorIcon },
     ],
     Design: [
      { name: 'Photoshop', icon: photoshopIcon },
      { name: 'InDesign', icon: indesignIcon },
      { name: 'Adobe Lightroom', icon: adobelightroomIcon },
      { name: 'Adobe Illustrator', icon: adobeillustratorIcon },
      { name: 'Figma', icon: figmaIcon },
     ],
  };

  return (
    <section className="skills">
      <h2 className="skills-title">Technical Skills</h2>
      <div className="skills-container">
        {Object.entries(skillsData).map(([category, skills]) => (
          <div key={category} className="skill-category">
            <h3>{category}</h3>
            <div className="skill-icons">
              {skills.map((skill) => (
                <div key={skill.name} className="skill-icon">
                                    <img src={skill.icon} alt={skill.name} />

                 
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills; 