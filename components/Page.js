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
  --black: #393939;
  --grey: #3a3a3a;
  --gray: var(--grey);
  --lightGrey: #e1e1e1;
  --lightGray: var(--lightGrey);
  --offWhite: #ededed;
  --maxWidth: 1000px;
  --bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09);'
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}

body {
  font-family: 'radnika_next', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  padding: 0;
  margin: 0;
  font-size: 1.5rem;
  line-height: 2;
  background-image: url('https://images.unsplash.com/photo-1518562180175-34a163b1a9a6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
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
`;

const InnerStyles = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  position: relative;
  min-height: 100vh;
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
