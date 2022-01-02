import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from './Header';
import Search from './Search';

const InnerStyles = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: white;
  font-size: 2rem;
  a {
    color: white;
    text-decoration: none;
  }
`;

export default function Page({ children }) {
  return (
    <div>
      <Search />
      <Header />
      <InnerStyles>{children}</InnerStyles>
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.any,
};
