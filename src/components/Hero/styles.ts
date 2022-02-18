import styled from "styled-components";

export const Container = styled.section`
  height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  
  .introduction {
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
    
    .hello {
      font-size: calc(var(--font-base) + 1.25rem);
      font-weight: var(--w_medium);
    }
    
    .name {
      font-size: calc(var(--font-base) + 4.25rem);
      font-weight: var(--w_bold);
    }
    
    .position {
      margin-top: 0.5rem;
      
      p {
        color: var(--green);
        font-weight: var(--w_bold);
        width: auto;
        white-space: nowrap;
        overflow: hidden;
        border-right: 0.25rem solid var(--green);
        
        &.anim-typewriter {
          animation: typewriter 4s steps(44) 1s infinite normal both,
          blinkTextCursor 500ms steps(44) infinite normal;
          -moz-animation: typewriter 4s steps(44) 1s infinite normal both,
          blinkTextCursor 500ms steps(44) infinite normal;
          -o-animation: typewriter 4s steps(44) 1s infinite normal both,
          blinkTextCursor 500ms steps(44) infinite normal;
          -webkit-animation: typewriter 4s steps(44) 1s infinite normal both,
          blinkTextCursor 500ms steps(44) infinite normal;
        }
      }
    }
    
    .description {
      font-weight: var(--w_medium);
      line-height: 1.8;
      text-align: justify;
      margin-top: 1rem;
      
      span {
        font-style: italic;
        font-weight: var(--w_bold);
        color: var(--green);
        letter-spacing: 0.125rem;
      }
    }
    
    .contact {
      margin-top: 1rem;
      
      p {
        font-weight: var(--w_bold);
        margin-bottom: 2rem;
        border-bottom: 0.15rem solid var(--green);
        width: fit-content;
      }
      
      ul {
        display: flex;
        
        li {
          &:not(:last-child) {
            margin-right: 1rem;
          }
          
          a {
            img {
              width: 5rem;
              height: 5rem;
            }
          }
        }
      }
    }
  }
  
  .hero-image {
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
    user-drag: none;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    width: 100%;
    height: 100%;
  }
  
  @keyframes typewriter {
    from {
      width: 0;
    }
    to {
      width: 10.5rem;
    }
  }
  
  @keyframes blinkTextCursor {
    from {
      border-right-color: var(--green);
    }
    to {
      border-right-color: transparent;
    }
  }
`