// styles
import classes from './css/Projects.module.css';
// components

const Projects = () => {
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
