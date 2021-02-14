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
  --maxWidth: 1200px;
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
  background-color: #080808;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='152' height='152' viewBox='0 0 152 152'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='temple' fill='%23493765' fill-opacity='0.55'%3E%3Cpath d='M152 150v2H0v-2h28v-8H8v-20H0v-2h8V80h42v20h20v42H30v8h90v-8H80v-42h20V80h42v40h8V30h-8v40h-42V50H80V8h40V0h2v8h20v20h8V0h2v150zm-2 0v-28h-8v20h-20v8h28zM82 30v18h18V30H82zm20 18h20v20h18V30h-20V10H82v18h20v20zm0 2v18h18V50h-18zm20-22h18V10h-18v18zm-54 92v-18H50v18h18zm-20-18H28V82H10v38h20v20h38v-18H48v-20zm0-2V82H30v18h18zm-20 22H10v18h18v-18zm54 0v18h38v-20h20V82h-18v20h-20v20H82zm18-20H82v18h18v-18zm2-2h18V82h-18v18zm20 40v-18h18v18h-18zM30 0h-2v8H8v20H0v2h8v40h42V50h20V8H30V0zm20 48h18V30H50v18zm18-20H48v20H28v20H10V30h20V10h38v18zM30 50h18v18H30V50zm-2-40H10v18h18V10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
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
  margin: 0 1rem;
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
