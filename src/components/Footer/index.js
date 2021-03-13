import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faStackOverflow } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <div>
      <footer>
        <a alt="linkedin" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/eder-r-224074127"><FontAwesomeIcon icon={faLinkedin} size="3x" /></a>
        <a alt="github" target="_blank" rel='noreferrer' href="https://github.com/eramos3"><FontAwesomeIcon icon={faGithub} size="3x" /></a>
        <a alt="stackoverflow" target="_blank" rel='noreferrer' href="https://stackexchange.com/users/19668447/eramos"><FontAwesomeIcon icon={faStackOverflow} size="3x" /></a>
      </footer>
    </div>
  );
}
export default Footer;