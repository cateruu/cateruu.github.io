import { useState } from 'react';
// styles
import classes from './css/Projects.module.css';
// components
// utils
import projectsJSON from './utils/projects.json';

const Projects = () => {
  const [projects, setProjects] = useState(projectsJSON);

  console.log(projects);

  return (
    <section className={classes.projects}>
      <h2 className={classes.header}>Projects</h2>
      <div className={classes.container}></div>
      <div className={classes.lDec}></div>
      <div className={classes.mDec}></div>
      <div className={classes.rDec}></div>
    </section>
  );
};

export default Projects;
