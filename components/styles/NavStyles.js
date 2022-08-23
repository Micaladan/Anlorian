import styled from 'styled-components';

const NavStyles = styled.nav`
position: fixed;
z-index: 2;
background-color: var(--color-black);
width: 100vw;

.navigation__main-list {
  height: 10vh;
  position: relative;
}
  

// Hamburger Menu
.hamburger, .hamburger::before, .hamburger::after {
  //hide hamburger by default
      /* display: none; */
      display: block;

  background-color: var(--color-white);
  height: 4px;
  width: 30px;
  transition: transform 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  border-radius: 2px;
    }

    .hamburgerContainer {
      border: 1px solid var(--color-primary);
      position: absolute;
      top: 25%;
      right: 2rem;
      padding: 1.5rem;
    }

    .hamburger:hover, .hamburger::before:hover, .hamburger::after:hover {
      cursor: pointer;
    }

    .hamburger {
     background-color: var(--color-dark)
    }
    .hamburger::before { 
      content: '';
      margin-top: -8px;
    }
    
    .hamburger::after{
      content: '';
      margin-top: 8px;
    }
 
       // Hide nav links when hamburger not engaged
       .navigation__list {
      display: none;

    .hamburger {
 
    }
    }
 
  .navigation__brand {
    font-family: 'Shojumaru', cursive;
    color: var(--color-primary);
    position: absolute;
    top: 20%;
    left: 2rem;
    font-size: 4vh;
    background-color: white;
    border-radius: 1rem;
    padding: 0.25rem 0.5rem;
    box-shadow: 0px 3rem 2.5rem -1.5rem #000000,
      1rem 1rem 3rem 1rem rgba(0, 0, 0, 0);

  }

  .navigation__list {
    display: flex;
    flex-direction: row;
    list-style: none;
    // start and end on the edge
    justify-content: space-between;
    // give some space left of brand
    margin-left: 3rem;
    // need extra space right of hamburger
    margin-right: 8rem;
    align-items: center;
 
    transition: height 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  
    height: 5px;
  }

  .navigation__list li {
    display: none;
  }


  .navigation__checkbox {
    display: none;
    }
  }

  // What to do when hamburger engaged:
  .navigation__checkbox:checked ~ .navigation__list {
    height: 90vh;

   li {
    display: block;
   }

    .navigation__brand {
      transform: translateX(-25%);
    }
   
    flex-direction: column;
  } 

  .navigation__checkbox:checked ~ *{
  .hamburger::before { 
      content: '';
      margin-top: -8px;
      transform:  translate(0px, 6px) rotate(45deg);
    }
    
    .hamburger::after{
      content: '';
      margin-top: 8px;
      transform:   translate(0px, -6px) rotate(-45deg);
    }
  }
`;

export default NavStyles;
