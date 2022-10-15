import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import Nav from './Nav';
import Footer from './Footer';
import Search from './Search';
import user from './User';
import AdminNav from './AdminNav';
import AdminOnly from './AdminOnly';

const GlobalStyles = createGlobalStyle`
/* NORMALIZING / CSS RESET */
  *,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--ff-primary);
  font-weight: 400;
  font-size: 1.3125rem;
  line-height: 1.6;
  overflow-x: hidden;
}

body,
h1,
h2,
h3,
p {
  margin: 0;
}

h1,
h2,
h3 {
  color: var(--clr-primary-400);
  font-family: var(--ff-accent);
  font-weight: 900;
  line-height: 1;
}

h2,
h3,
p {
  margin-bottom: 1em;
}

ul {
  list-style: none;
}

img {
  display: block;
  max-width: 100%;
}

.text-center {
  text-align: center;
}

header,
section {
  padding: 4rem 0;
  @media (min-width: 40em) {
    header,
    section {
      padding: 7rem 0;
    }
  }
}

 // Scrollbar

  // Controls Entire Scrollbar
  ::-webkit-scrollbar {
    width: 1.4rem;
  }
  // 
  ::-webkit-scrollbar-track {
    
   
    -webkit-box-shadow: inset 0 0 6px rgba(255,255,255,0.3);
  background-color: var(--color-black);
  }

  ::-webkit-scrollbar-thumb {
  border: 0.25rem, solid, var(--color-black);
    background-color: var(--color-primary-dark); 
  background-image: -webkit-linear-gradient(45deg,
                                            rgba(255, 255, 255, .2) 25%,
                        transparent 25%,
                        transparent 50%,
                        rgba(255, 255, 255, .2) 50%,
                        rgba(255, 255, 255, .2) 75%,
                        transparent 75%,
                        transparent)
  
}

  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: var(--color-primary); 
  background-image: -webkit-linear-gradient(45deg,
                                            rgba(255, 255, 255, .2) 25%,
                        transparent 25%,
                        transparent 50%,
                        rgba(255, 255, 255, .2) 50%,
                        rgba(255, 255, 255, .2) 75%,
                        transparent 75%,
                        transparent)
  }

  // Firefox scrollbar
  @supports (scrollbar-color: red black) {
    * {
      scrollbar-color: var(--color-black) black;
      scrollbar-width: auto;
    }
  }


.container {
  margin-inline: auto;
  width: min(90%, 70.5rem);
}

.split {
  display: flex;
  flex-direction: column;
}

@media (min-width: 40em) {
  .split {
    flex-direction: row;
  }

  .split > * {
    flex-basis: 100%;
  }

  .split > * + * {
    margin-left: 2em;
  }
}

.container--narrow {
  max-width: 34rem;
}

html {

  // This defines what 1 rem is
  font-size: 62.5%;
  
//COLORS
--color-primary: #ff3322;
--color-primary-light: #ff9891;
--color-primary-dark: #b22218;

--color-secondary-light: #ffb900;
--color-secondary-dark: #ff7730;

--color-tertiary-light: #2998ff;
--color-tertiary-dark: #5643fa;

--color-grey-dark: #777;
--color-grey-dark-2: #999;
--color-grey-dark-3: #333;
--color-white: #fff;
--color-black: #234;
--color-grey-light-1: #f7f7f7;
--color-grey-light-2: #eee;

//FONT
--default-font-size: 1.6rem;

//GRID
--grid-width: 100rem;
--gutter-vertical: 4rem;
--gutter-horizontal: 3rem;

//Misc
--box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.09);

@media only screen and (max-width: 600px) {
  font-size: 50%; // 1 rem = 8 px, 8/16p = 50%
    }

// Extra large devices (large laptops and desktops, 1200px and up) 
@media only screen and (min-width: 1200px) {
  font-size: 75%; // 1rem = 12px, 12/16 = 75%  
}

}

body {
  box-sizing: border-box;
  overscroll-behavior: none;
}

fieldset {
  border: 0;
}

/* Utility Classes */
.block {
  display: block;
}

.inline-block {
  display: inline-block;
}

.red {
  padding: 5rem;
  background-color: red;
}

.flex {
  display: flex;
}

.center {
  align-items: center;
  justify-content: center;
}


.tooltip {
  display: inline;
  position: relative;
}

.focus::after:hover {
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: center;
  justify-content: center;
  background: #444;
  border-radius: 8px;
  color: #fff;
  content: attr(title);
  margin: -82px auto 0;
  font-size: 16px;
  padding: 13px;
  width: 220px;
}

.focus {
  display: inline;
  position: relative;
}

.focus:hover:before{
  border: solid;
  border-color: transparent #FFF ;
  border-width: 6px 0px 6px 12px;
  content: "";
  left: -3rem;
  top: 0.75rem;
  
  position: absolute;
}

`;

const InnerStyles = styled.div`
  position: relative;
  min-height: 100vh;
  h1 {
    padding-top: 5rem;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: var(--color-white);
  font-size: 2rem;
  a {
    color: white;
    text-decoration: none;
  }
  height: 100%;
  width: 100vw;
  background: var(--color-primary);
  background: radial-gradient(
    circle,
    var(--color-primary-dark) 60%,
    rgba(0, 0, 0, 1) 100%
  );
  background-position: top;
  background-attachment: fixed;
  overflow-x: hidden;
`;

const ContentStyles = styled.div`
  min-height: 90vh;
  margin-top: 10vh;
`;

export default function Page({ children }) {
  return (
    <div>
      <GlobalStyles />
      <InnerStyles>
        <Nav />

        <ContentStyles>{children}</ContentStyles>
        <Footer></Footer>
      </InnerStyles>
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.any,
};
