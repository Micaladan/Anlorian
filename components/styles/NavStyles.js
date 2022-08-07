import styled from 'styled-components';

const NavStyles = styled.ul`
  min-width: 100vw;
  padding: 2rem 0;
  margin: 0;
  background-color: var(--color-black);

  @media only screen and (max-width: 600px) {
  font-size: 50%;
    }
  }

  .navigation__brand {
    font-family: 'Shojumaru', cursive;
    color: var(--color-primary);
    background-color: white;
    padding: 1rem;
    font-size: 3rem;
    border-radius: 35%;
    box-shadow: 0px 3rem 2.5rem -1.5rem #000000,
      1rem 1rem 3rem 1rem rgba(0, 0, 0, 0);

      @media only screen and (max-width: 600px) {
  font-size: 75%;
  padding: 0.75rem;
    }

  }


  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    justify-content: space-around;
    align-items: center;
  }

  .navigation__checkbox {
    display: none;
  }
 `;

export default NavStyles;
