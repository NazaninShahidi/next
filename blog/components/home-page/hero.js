import Image from "next/image";
import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/photo-1.avif"
          alt="An image showing max"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi,I'm Nazanin</h1>
      <p>
        I blog about web development - especailly frontend framework like React.
      </p>
    </section>
  );
}

export default Hero;
