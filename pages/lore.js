import gql from 'graphql-tag';
import React, { useState } from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/client';
import { useUser } from '../components/User';

const ALL_LORES_QUERY = gql`
  query ALL_LORES_QUERY {
    allLores {
      id
      loreSideBarLabel
      content
    }
  }
`;

const LoreContainerStyles = styled.main`
  display: grid;
  grid-template-columns: 1fr 9fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  width: 100vw;
  min-height: 90vh;
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
  justify-content: center;

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
  const { data, error, loading } = useQuery(ALL_LORES_QUERY);

  const [content, setContent] = useState('Here is the general page.');
  const user = useUser();
  console.log(data, error, loading);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Clicking Continents
  function handleContentChangeTo(e) {
    setContent(<>{e}</>);
  }

  return (
    <LoreContainerStyles>
      {!user && (
        <p style={{ height: '90vh' }}>Welcome to the non-logged in Lore Page</p>
      )}
      {user && (
        <>
          <LoreSideBarStyles>
            <ul>
              {data.allLores.map((lore) => (
                <NavButtonStyles
                  key={lore.id}
                  onClick={() => {
                    handleContentChangeTo(`${lore.content}`);
                  }}
                >
                  {lore.loreSideBarLabel}
                </NavButtonStyles>
              ))}
              <NavButtonStyles>
                <strong>+</strong>
              </NavButtonStyles>
            </ul>
            {/* <ul>
              <NavButtonStyles onClick={handleContentChangeToGeneral}>
                General
              </NavButtonStyles>
              <li>Timeline</li>
              <li>Characters</li>
              <NavButtonStyles onClick={handleContentChangeToContinents}>
                Continents
              </NavButtonStyles>
              <NavButtonStyles onClick={handleContentChangeToPedesteria}>
                Pedesteria
              </NavButtonStyles>
              <li>Arcs</li>
              <li>Scenes</li>
            </ul> */}
          </LoreSideBarStyles>

          <LoreContentStyles>{content}</LoreContentStyles>
        </>
      )}
    </LoreContainerStyles>
  );
}
