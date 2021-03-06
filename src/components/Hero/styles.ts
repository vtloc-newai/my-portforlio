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

      span {
        display: inline-block;
        animation: wavey 1.5s infinite;
      }
    }
    
    .name {
      font-size: calc(var(--font-base) + 4.25rem);
      font-weight: var(--w_bold);
    }
    
    .position {
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
      
      span {
        font-style: italic;
        font-weight: var(--w_bold);
        color: var(--green);
        letter-spacing: 0.125rem;
      }
    }

    .framework {
      font-weight: var(--w_medium);
      line-height: 1.8;
      text-align: justify;

      ul {
        li {
          span {
            font-weight: var(--w_bold);
            color: var(--green);
          }

          &:not(:last-child) {
            margin-bottom: 1rem;
          }
        }
      }
    }

    .goals {
      nav {
        margin-top: 1rem;

        ol {  
          li {
            &:not(:last-child) {
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
    
    .contact {
      p {
        font-weight: var(--w_bold);
        margin-bottom: 2rem;
        border-bottom: 0.15rem solid var(--green);
        width: fit-content;
      }
      
      ul {
        display: flex;
        
        li {
          transition: transform 0.4s ease-in-out;
          
          &:not(:last-child) {
            margin-right: 1rem;
          }
          
          a {
            img {
              width: 5rem;
              height: 5rem;
            }
          }
          
          &:hover {
            transform: translateY(-1rem);
          }
        }
      }
    }
  }
  
  .image-display {
    img {
      width: 100%;
      height: 100%;
  
      &.hero-image {
        user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        -webkit-user-select: none;
        user-drag: none;
        -webkit-user-drag: none;
        -khtml-user-drag: none;
        -moz-user-drag: none;
        -o-user-drag: none;
      }
    }
  }
  
  @media only screen and (max-width: 900px) {
    height: 100%;

    .image-display {
      display: none;
    }
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

  @keyframes wavey {
    0% {
      transform: rotate(0.0deg);
    }
    15% {
      transform: rotate(14.0deg);
    }
    30% {
      transform: rotate(-8.0deg);
    }
    40% {
      transform: rotate(14.0deg);
    }
    50% {
      transform: rotate(-4.0deg);
    }
    60% {
      transform: rotate(10.0deg);
    }
    70% {
      transform: rotate(0.0deg);
    }
    100% {
      transform: rotate(0.0deg);
    }
  }
`