import { useState } from 'react';
// custom hooks
import useWindowSize from '../../hooks/useWindowSize';
// styles
import classes from './css/Projects.module.css';
// components
import Project from './components/Project';
// utils
import projectsJSON from './utils/projects.json';
// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
  const [projects, setProjects] = useState(projectsJSON);
  const [width, height] = useWindowSize();

  const setCurrentProject = (action, id) => {
    setProjects((prevState) => {
      let currentState;
      let currentActive = prevState.filter((project) => project.active)[0];
      currentActive.active = false;

      if (action === 'up') {
        currentState = prevState.map((project) => {
          if (
            project.id === currentActive.id - 1 &&
            !(currentActive.id - 1 < prevState[0].id)
          ) {
            project.active = true;
          } else if (currentActive.id - 1 < prevState[0].id) {
            prevState[prevState.length - 1].active = true;
          }

          return project;
        });
      } else if (action === 'down') {
        currentState = prevState.map((project) => {
          if (
            project.id === currentActive.id + 1 &&
            !(currentActive.id + 1 > prevState[prevState.length - 1].id)
          ) {
            project.active = true;
          } else if (
            currentActive.id + 1 >
            prevState[prevState.length - 1].id
          ) {
            prevState[0].active = true;
          }

          return project;
        });
      } else if (action === 'select') {
        currentState = prevState.map((project) => {
          if (project.id === id) {
            project.active = true;
          }

          return project;
        });
      }

      return currentState;
    });
  };

  let sliderElements = projects.map((project) => {
    if (width <= 800) {
      return project.active ? (
        <p
          key={project.id}
          className={`${classes.name} ${
            project.active ? classes.active : null
          }`}
        >
          {project.name}
        </p>
      ) : null;
    } else {
      return (
        <p
          key={project.id}
          className={`${classes.name} ${
            project.active ? classes.active : null
          }`}
          onClick={() => setCurrentProject('select', project.id)}
        >
          {project.name}
        </p>
      );
    }
  });

  const activeProject = projects
    .filter((project) => project.active)
    .map((project) => (
      <Project
        key={project.id}
        thumbnail={project.thumbnail}
        name={project.name}
        description={project.description}
        code={project.code}
        demo={project.demo}
      />
    ));

  return (
    <section className={classes.projects}>
      <h2 className={classes.header}>Projects</h2>
      <div className={classes.container}>
        <div className={classes.slider}>
          <FontAwesomeIcon
            icon={faSortUp}
            className={classes.move}
            onClick={() => setCurrentProject('up')}
          />
          {sliderElements}
          <FontAwesomeIcon
            icon={faSortDown}
            className={classes.move}
            onClick={() => setCurrentProject('down')}
          />
        </div>
        <div className={classes.project}>{activeProject}</div>
      </div>
      <div className={classes.lDec}></div>
      <div className={classes.mDec}></div>
      <div className={classes.rDec}></div>
    </section>
  );
};

export default Projects;
