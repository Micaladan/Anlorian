import styled from 'styled-components';

const ContainerStyles = styled.main`
  max-width: 120rem;
  margin-inline: auto;
  width: min(90%, 70.5rem);
  backdrop-filter: blur(10rem) grayscale(0.7) opacity(0.9);
  // Extra large devices (large laptops and desktops, 1200px and up)
  @media only screen and (min-width: 1200px) {
    max-width: 180rem;
    width: min(90%, 120rem);
  }
`;

export default ContainerStyles;
