import classes from "./hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/hilal_profile_image.jpg"
          alt="Hilal profile image"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Mohammad Hilal</h1>
      <p>
        I blog about web development - especially frontend library like Reactjs
        and Nextjs Framework.
      </p>
    </section>
  );
};

export default Hero;
