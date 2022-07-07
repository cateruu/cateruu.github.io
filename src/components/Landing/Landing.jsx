// styles
import classes from './css/Landing.module.css';

const Landing = () => {
  return (
    <section className={classes.landing}>
      <p className={classes.name}>Paweł Kromołowski</p>
      <p className={classes.position}>Frontend Developer</p>
      <div className={classes.scroll}>
        <div className={classes.ball}></div>
      </div>
      <div className={classes.rDec}></div>
      <div className={classes.lDec}></div>
    </section>
  );
};

export default Landing;
