import { useEffect, useState } from 'react';
import styles from './LeftPanel.module.scss';
import { useTypewriter } from '../../hooks/useTypewriter';

export function LeftPanel() {
  const [experienceYears, setExperienceYears] = useState(0);
  const displayText = useTypewriter('<Laura />', 100);

  useEffect(() => {
    let diff = (new Date().getTime() - new Date('2017-09-15').getTime()) / 1000;
    diff /= 60 * 60 * 24;
    setExperienceYears(Math.abs(Math.round(diff / 365.25)));
  }, []);

  return (
    <div className={styles.leftPanel}>
      <h1>
        Hi, <br />
        I'm <span>{displayText}</span>,
      </h1>
      <div className={styles.introBox}>
        <ul>
          <li>Full Stack Developer</li>
          <li>{experienceYears}+ years of hands-on experience in different tech stacks</li>
          <li>
            <em>Technical skills:</em>
            <ul>
              <li>
                <strong>Frontend:</strong> HTML, CSS/SCSS, Javascript (ES6+), Angular, React, Next.js,
                Typescript, jQuery, Wordpress, Shopify
              </li>
              <li>
                <strong>Backend:</strong> AWS, Node.js, RESTful APIs, SQL, WebMethods, Java, PHP, Firebase,
                MongoDB
              </li>
              <li>
                <strong>Testing/tools:</strong> Jest, Jasmine, Mocha, Karma, Chai, Playwright, Git, VSCode,
                Bitbucket, Figma, Jira, Agile
              </li>
            </ul>
          </li>
          <li>
            <em>Soft skills:</em> Communication, teamwork, leadership, adaptable, autodidact, focused,
            analytic, detail-oriented
          </li>
          <li>
            <em>Languages:</em>
            <ul>
              <li>Spanish - Native</li>
              <li>English - Fluent/Bilingual</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className={styles.contactBox}>
        <h4>CONTACT:</h4>
        <a href="https://github.com/chapaglaura/" target="_blank" rel="noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://linkedin.com/in/chapalaura/" target="_blank" rel="noreferrer">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="mailto: chapaglaura@gmail.com" target="_blank" rel="noreferrer">
          <i className="fas fa-at"></i>
        </a>
      </div>
    </div>
  );
}
