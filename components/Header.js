import styled from 'styled-components';
import Logo from './Logo';

// const HeaderStyles = styled.header`
//     height: 100vh;
//   width: 100vw;

//   background-image: linear-gradient(
//       to right bottom,
//       rgba(transparent, 0.1),
//       rgba($color-black, 0.1)
//     ),
//     url('https://images.unsplash.com/photo-1525711857929-4272fb4a040f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80');
//   background-size: cover;
//   background-position: top;
//   position: absolute;
//   top: 0;
//   left: 0;
//   z-index: -50;

//   &__logo-box {
//     position: absolute;
//     top: 4rem;
//     left: 4rem;
//     animation-name: moveInLeft;
//     animation-duration: 1s;
//     animation-timing-function: ease-out;
//   }

//   &__logo {
//     height: 3.5rem;
//   }

//   &__text-box {
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     text-align: center;
//   }
// }
// `;

export default function Header() {
  return (
    // <HeaderStyles>
    //   <div>
    //     <Logo />
    //   </div>
    // </HeaderStyles>

    <header className="header">
      <div className="header__logo-box">
        <Logo />
      </div>
    </header>
  );
}
