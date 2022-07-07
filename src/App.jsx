// styles
import classes from './css/App.module.css';
// components
import Landing from './components/Landing/Landing';

const App = () => {
  return (
    <main className={classes.main}>
      <Landing />
    </main>
  );
};

export default App;
