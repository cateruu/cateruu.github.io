// styles
import classes from './css/Project.module.css';
// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDesktopAlt } from '@fortawesome/free-solid-svg-icons';

const Project = ({ thumbnail, name, description, code, demo }) => {
  return (
    <div className={classes.project}>
      <a
        href={demo}
        target='_blank'
        rel='noreferrer'
        className={classes.imgContainer}
      >
        <img src={thumbnail} alt={name} className={classes.img} />
      </a>
      <p className={classes.description}>{description}</p>
      <div className={classes.links}>
        <a
          href={code}
          target='_blank'
          rel='noreferrer'
          className={classes.link}
        >
          <FontAwesomeIcon icon={faGithub} className={classes.icon} />
          Code
        </a>
        <a
          href={demo}
          target='_blank'
          rel='noreferrer'
          className={classes.link}
        >
          <FontAwesomeIcon icon={faDesktopAlt} className={classes.icon} />
          Demo
        </a>
      </div>
    </div>
  );
};

export default Project;
