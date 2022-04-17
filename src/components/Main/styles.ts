import styled from "styled-components";

export const Container = styled.main`
  position: relative;
  z-index: 0;
  padding:  0 10rem;
  overflow-x: hidden;
  
  #tsparticles {
    position: relative;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  
  @media only screen and (max-width: 1200px) {
    padding: 0 2rem;
  }
`