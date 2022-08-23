import React, { useState } from 'react';
import styled from 'styled-components';
import { useUser } from '../components/User';

const LoreContainerStyles = styled.main`
  display: grid;
  grid-template-columns: 1fr 9fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  min-height: 85vh;
  width: 100vw;
  background: white;
  color: black;
  justify-content: center;

  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
  }
`;

const LoreSideBarStyles = styled.nav`
  width: min-content;
  height: 100%;
  text-align: left;
  grid-area: 1 / 1 / 2 / 3;
  background-color: var(--color-black);
  color: var(--color-primary);

  li {
    display: flex;
  }

  li button {
    height: 100%;
  }

  ul li:hover {
    color: var(--color-black);
    background-color: var(--color-primary);
  }
`;

const LoreContentStyles = styled.div`
  grid-area: 1 / 2 / 2 / 3;
`;

const NavButtonStyles = styled.li`
  border: none;
  height: max-content;

  color: var(--color-primary);
  background-color: var(--color-dark);
  font-size: 2rem;
  :hover,
  :focus {
    cursor: pointer;
    color: var(--color-dark);
  }
`;

export default function lore() {
  const [content, setContent] = useState('Here is the general page.');
  const user = useUser();

  // Clicking Continents
  function handleContentChangeToContinents() {
    setContent(
      <div>
        <p>'Learn about Anlorian continents!'</p>
        <img
          width="90%"
          src="https://res.cloudinary.com/dukyauo4n/image/upload/v1659835451/Anlorian/AnlorianMap_y8ycwt.jpg"
          alt="Anlorian World Map"
        />
      </div>
    );
  }

  // Clicking General
  function handleContentChangeToGeneral() {
    setContent(
      'Here is the general page. Here is what you see when you are logged in but not an admin.'
    );
  }

  return (
    <LoreContainerStyles>
      {!user && (
        <p style={{ height: '85vh' }}>Welcome to the non-logged in Lore Page</p>
      )}
      {user && (
        <>
          <LoreSideBarStyles>
            <ul>
              <NavButtonStyles onClick={handleContentChangeToGeneral}>
                General
              </NavButtonStyles>
              <li>Timeline</li>
              <li>Characters</li>
              <NavButtonStyles onClick={handleContentChangeToContinents}>
                Continents
              </NavButtonStyles>
              <li>Arcs</li>
              <li>Scenes</li>
            </ul>
          </LoreSideBarStyles>

          <LoreContentStyles>{content}</LoreContentStyles>
        </>
      )}
    </LoreContainerStyles>
  );
}
