import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

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
      <Header />
      <InnerStyles>{children}</InnerStyles>
      <Footer />
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.any,
};
