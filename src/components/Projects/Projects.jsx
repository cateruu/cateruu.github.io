import { useState } from 'react';
// styles
import classes from './css/Projects.module.css';
// components
// utils
import projectsJSON from './utils/projects.json';
// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
  const [projects, setProjects] = useState(projectsJSON);

  const sliderElements = projects.map((project) => {
    return (
      <p
        key={project.id}
        className={`${classes.name} ${project.active ? classes.active : null}`}
      >
        {project.name}
      </p>
    );
  });

  return (
    <section className={classes.projects}>
      <h2 className={classes.header}>Projects</h2>
      <div className={classes.container}>
        <div className={classes.slider}>
          <FontAwesomeIcon icon={faSortUp} className={classes.move} />
          {sliderElements}
          <FontAwesomeIcon icon={faSortDown} className={classes.move} />
        </div>
        <div className={classes.project}></div>
      </div>
      <div className={classes.lDec}></div>
      <div className={classes.mDec}></div>
      <div className={classes.rDec}></div>
    </section>
  );
};

export default Projects;
