import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import Footer from './Footer';
import Nav from './Nav';

import Search from './Search';

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

    // Small devices (portrait tablets and large phones, 600px and up)
@media only screen and (min-width: 600px) {
  font-size: 56.25%; // 1rem = 9px, 9/16 = 56.25%
}

// Extra large devices (large laptops and desktops, 1200px and up) 
@media only screen and (min-width: 1200px) {
  font-size: 75%; // 1rem = 12px, 12/16 = 75%  
}

}

body {
  box-sizing: border-box;
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
  border-color: #FFF transparent;
  border-width: 12px 6px 0 6px;
  content: "";
  left: 45%;
  bottom: 30px;
  position: absolute;
}

`;

const InnerStyles = styled.div`
 position: relative;
  min-height: 100vh;
  h1 {
    padding-top: 10rem;
  }
  min-height: 100vh;
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
  height: 100vh;
  width: 100vw;
  background-image: url('https://images.unsplash.com/photo-1525711857929-4272fb4a040f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80');
  background-size: cover;
  background-position: top;
  background-attachment: fixed;
  overflow-x: hidden;
  

  // Scrollbar

  // Controls Entire Scrollbar
::-webkit-scrollbar {
    width: 1.5rem;
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

`;

export default function Page({ children }) {
  return (
    <div>
      <GlobalStyles />
      <InnerStyles>
        <Nav />
        {children}
        <Footer></Footer>
      </InnerStyles>
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.any,
};
