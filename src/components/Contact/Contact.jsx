import React from "react";

import styles from "./Contact.module.css";
import { assets } from "../../assets/assets";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to contact me!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={assets.emailIcon} alt="Email icon" />
          <a href="mailto:myemail@email.com">jennifera.cosme@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={assets.linkedinIcon}
            alt="LinkedIn icon"
          />
          <a target="_blank" href="https://www.linkedin.com/in/jennifercosme/">linkedin.com/jennifercosme</a>
        </li>
        <li className={styles.link}>
          <img src={assets.githubIcon} alt="Github icon" />
          <a target="_blank" href="https://github.com/Jencosme">github.com/Jencosme</a>
        </li>
      </ul>
    </footer>
  );
};