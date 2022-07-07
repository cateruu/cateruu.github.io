// styles
import classes from './css/About.module.css';
// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3Alt,
  faSass,
  faJs,
  faReact,
  faGitAlt,
  faGithub,
  faTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
// images
import { ReactComponent as TypeScript } from '../../images/typescript.svg';
import { ReactComponent as NextJS } from '../../images/nextjs.svg';

const About = () => {
  return (
    <section className={classes.about}>
      <h2 className={classes.header}>About</h2>
      <div className={classes.container}>
        <section className={classes.info}>
          <div className={classes.history}>
            <h3>Me</h3>
            <p>
              Born in August 8, 2000. I started learning web dev in 2019,
              grasped some basics and left it for 3 years to explore other
              options in programming such as game dev. I returned to web dev in
              May 2022 and have been learning it ever since.
            </p>
          </div>
          <div className={classes.skills}>
            <h4>Skills</h4>
            <div>
              <FontAwesomeIcon
                icon={faHtml5}
                style={{ color: '#e54c21' }}
                className={classes.svg}
              />
              <FontAwesomeIcon
                icon={faCss3Alt}
                style={{ color: '#2449D8' }}
                className={classes.svg}
              />
              <FontAwesomeIcon
                icon={faSass}
                style={{ color: '#CC6699' }}
                className={classes.svg}
              />
              <FontAwesomeIcon
                icon={faJs}
                style={{ color: '#F7DF1E' }}
                className={classes.svg}
              />
              <FontAwesomeIcon
                icon={faReact}
                style={{ color: '#5CCFEE' }}
                className={classes.svg}
              />
              <FontAwesomeIcon
                icon={faGitAlt}
                style={{ color: '#DD4C35' }}
                className={classes.svg}
              />
            </div>
          </div>
          <div className={classes.next}>
            <h4>Next to learn</h4>
            <div>
              <TypeScript className={classes.svg} />
              <NextJS className={classes.svg} />
            </div>
          </div>
        </section>
        <section className={classes.contact}>
          <FontAwesomeIcon icon={faEnvelope} />
          <FontAwesomeIcon icon={faGithub} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faLinkedin} />
        </section>
      </div>
    </section>
  );
};

export default About;
