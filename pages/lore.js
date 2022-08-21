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
`;

const LoreSideBarStyles = styled.nav`
  width: min-content;
  height: 100%;
  text-align: left;
  grid-area: 1 / 1 / 2 / 3;
  padding-left: 1rem;
`;

const LoreContentStyles = styled.div`
  grid-area: 1 / 2 / 2 / 3;
`;

const NavButtonStyles = styled.button`
  border: none;
  background: none;
  color: var(--color-primary);
  :hover,
  :focus {
    cursor: pointer;
  }
`;

export default function lore() {
  const [content, setContent] = useState('Here is the general page.');
  const user = useUser();

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

  function handleContentChangeToGeneral() {
    setContent(
      'Here is the general page. Here is what you see when you are logged in but not an admin.'
    );
  }

  return (
    <div>
      {!user && (
        <p style={{ height: '85vh' }}>Welcome to the non-logged in Lore Page</p>
      )}
      {user && (
        <>
          <LoreContainerStyles>
            <LoreSideBarStyles>
              <ul>
                <li>
                  <NavButtonStyles onClick={handleContentChangeToGeneral}>
                    General
                  </NavButtonStyles>
                </li>
                <li>Timeline</li>
                <li>Characters</li>
                <li>
                  <NavButtonStyles onClick={handleContentChangeToContinents}>
                    Continents
                  </NavButtonStyles>
                </li>
                <li>Arcs</li>
                <li>Scenes</li>
              </ul>
            </LoreSideBarStyles>

            <LoreContentStyles>{content}</LoreContentStyles>
          </LoreContainerStyles>
        </>
      )}
    </div>
  );
}
