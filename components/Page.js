import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: 'radnika_next';
  src: url("/static/radnikanext-medium-webfont.woff2")
  format('woff2');
  font-weight: normal;
  font-style: normal;
}

html {
  --red: #ff0000;
  --darkRed: rgba(255, 40, 30);
  --black: #342e2e;
  --grey: #3a3a3a;
  --gray: var(--grey);
  --lightGrey: #e1e1e1;
  --lightGray: var(--lightGrey);
  --offWhite: rgb(226, 218, 218);
  --orange: rgb(253, 186, 49);
  --purple: rgb(98, 0, 151);
  --Indigo: rgba(55, 0, 117);
  --maxWidth: 1200px;
  --bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09);'
  box-sizing: border-box;
  font-size: 16px;
}
*, *:before, *:after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.7;
  color: #777;
}

a {
  text-decoration: none;
  color: white;
}

a:hover {
  text-decoration: underline;
}

button {
  font-family: 'radnika_next', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; 
}

.header{
height: 95vh;
  background-image: linear-gradient(
      to right bottom,
      rgba(255, 40, 30, 0.7),
      rgba(0, 0, 0, 0.8)
    ),
    url('https://images.unsplash.com/photo-1508931133503-b1944a4ecdd5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80');
  background-size: cover;
  background-position: stretch;
  clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
  position: relative;
}


.logo-box {
  position: absolute;
  top: 40px;
  left: 40px;
}

.logo {
  height: 35px;
}

.text-box {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.heading-primary {
  color: #fff;
  text-transform: uppercase;
  backface-visibility: hidden;
}

.heading-primary-main {
  display: block;
  font-size: 60px;
  font-weight: 400;
  letter-spacing: 35px;
  animation-name: moveInLeft;
  animation-duration: 1s;
  animation-timing-function: ease-out;
}

.heading-primary-sub {
  display: block;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 14.7px;
  animation-name: moveInRight;
  animation-duration: 1s;
  animation-timing-function: ease-out;
}

@keyframes moveInLeft {
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }

  80% {
    transform: translateX(10px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes moveInRight {
  0% {
    opacity: 0;
    transform: translateX(100px);
  }

  80% {
    transform: translateX(-10px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

`;

const InnerStyles = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Page({ children }) {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <InnerStyles>{children}</InnerStyles>
      <Footer />
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.any,
};
