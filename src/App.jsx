// styles
import classes from './css/App.module.css';
// components
import Landing from './components/Landing/Landing';
import Projects from './components/Projects/Projects';

const App = () => {
  return (
    <main className={classes.main}>
      <Landing />
      <Projects />
    </main>
  );
};

export default App;
