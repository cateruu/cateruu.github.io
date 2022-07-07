// styles
import classes from './css/App.module.css';
// components
import Landing from './components/Landing/Landing';
import Projects from './components/Projects/Projects';
import About from './components/About/About';

const App = () => {
  return (
    <main className={classes.main}>
      <Landing />
      <Projects />
      <About />
    </main>
  );
};

export default App;
