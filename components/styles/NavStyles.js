import styled from 'styled-components';

const NavStyles = styled.ul`
  min-width: 100vw;
  padding: 2rem 0;
  margin: 0;
  background-color: var(--color-black);

  @media only screen and (max-width: 600px) {
    font-size: 75%;
  }

  .navigation__brand {
    font-family: 'Shojumaru', cursive;
    color: var(--color-primary);
    background-color: white;
    font-size: 150%;
    border-radius: 1rem;
    padding: 0.5rem 1rem;
    box-shadow: 0px 3rem 2.5rem -1.5rem #000000,
      1rem 1rem 3rem 1rem rgba(0, 0, 0, 0);

    @media only screen and (max-width: 600px) {
      font-size: 275%;
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

  .navigation__checkbox:checked ~ {
  }
`;

export default NavStyles;
