import Grid from "@mui/material/Grid";
import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import blogging from "../../assets/images/blogging.svg";
import facebookIcon from "../../assets/images/Facebook-1.png";
import instagramIcon from "../../assets/images/Instagram-1.png";
import linkedinIcon from "../../assets/images/LinkedIn-1.png";

function Hero() {
  return (
    <Container>
      <Grid item container spacing={4} className="m-t-0">
        <Grid
          item
          container
          direction="row"
          alignItems="center"
          md={6}
        >
          <ScrollAnimation animateIn="fadeInLeft">
            <div className="introduction">
            <div className="hello">Hello <span>👋</span>, I'm</div>
            <div className="name">Thanh Loc Vo</div>
            <div className="position m-t-2">
              <p className="anim-typewriter">
                Front-end Developer
              </p>
            </div>
            <div className="description m-t-4">
              With the knowledge and techniques I have
              learned from my projects and studies, I hope
              to become a web application developer as
              well as one of the computer scientists who
              adopt technology, I am constantly seeking to
              learn new skills and gain experience from
              various activities.&nbsp;
              <span>
                Now I'm a Front-end Developer with nearly 2 years of experience.
              </span>
            </div>
            <br />
            <div className="framework">
              <ul>
                <li>
                  <span>Main Framework</span>: Vue.js, Nuxt.js, Vuetify, Bootstrap, Tailwind, SCSS.
                </li>
                <li>
                  <span>Framework being studied</span>: React, MUI.
                </li>
              </ul>
            </div>
            <br />
            <div className="goals">
              I have 3 orientations and long-term goals:
              <nav>
                <ol>
                  <li>
                    (1). Become a Full-Stack Developer with full knowledge and solid experience to apply and develop the best products.
                  </li>
                  <li>
                    (2). Product development on smartphone platform so I hope I have the opportunity to become Mobile Developer.
                  </li>
                  <li>
                    (3). Operate and lead a development team of Web Apps and Mobile Apps.
                  </li>
                </ol>
              </nav>
            </div>
            <div className="contact m-t-4">
              <p>Contact me</p>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/thanhhhloccc/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={facebookIcon} alt="Facebook" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/thanhhhlocc/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={instagramIcon} alt="Instagram" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={linkedinIcon} alt="LinkedIn" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          </ScrollAnimation>
        </Grid>
        <Grid item md={6} className="d-flex justify-content-center image-display">
          <ScrollAnimation animateIn="fadeInRight" delay={1000}>
            <img className="hero-image" src={ blogging } alt="softwareEngineer" />
          </ScrollAnimation>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Hero;