import styled from 'styled-components';

const CharacterSheetStyles = styled.header`
  background-image: url('../fancy-paper.jpg');
  width: 100%;
  color: black;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1;
  display: flex;
  input {
    width: 90%;
    text-align: center;
    border-radius: 5px;
    font-size: 1.5rem;
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
  td {
    text-align: center;
  }
`;

export default function CharacterSheet() {
  return (
    <div>
      <h2>Character Sheet</h2>
      <CharacterSheetStyles>
        <table>
          <thead>
            <tr>
              <th>Character Name</th>
              <th>Level </th>
              <th>Temple</th>
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input type="text" placeholder="Ting" />
              </td>

              <td>
                <input type="number" placeholder="1" />
              </td>
              <td>
                <input type="text" placeholder="bloodborne" />
              </td>
            </tr>
            <tr>
              <td>Attribute</td>
              <td>Score</td>
            </tr>
            <tr>
              <td>Offensive Strength</td>
              <td>
                <input type="number" value="10" />
              </td>
              <td>
                Health <p>(max = 8)</p>
              </td>
            </tr>
            <tr>
              <td>Defensive Strength</td>
              <td>
                <input type="number" value="10" />
              </td>

              <td rowSpan="2">
                <input type="number" value="8" />
              </td>
            </tr>
            <tr>
              <td>Will</td>
              <td>
                <input type="number" value="10" />
              </td>
            </tr>
            <tr>
              <td>Tenacity</td>
              <td>
                <input type="number" value="10" />
              </td>
            </tr>
            <tr>
              <td>Energy</td>
              <td>
                <input type="number" value="10" />
              </td>

              <td>Attack Dice</td>
            </tr>
            <tr>
              <td>Resolve</td>
              <td>
                <input type="number" value="10" />
              </td>

              <td>
                <input type="text" placeholder="d20" />
              </td>
            </tr>
            <tr>
              <td>Offensive Body</td>
              <td>
                <input type="number" value="10" />
              </td>
            </tr>
            <tr>
              <td>Defensive Body</td>
              <td>
                <input type="number" value="10" />
              </td>

              <td>Damage Dice</td>
            </tr>
            <tr>
              <td>Faith</td>
              <td>
                <input type="number" value="10" />
              </td>

              <td>
                <input type="text" placeholder="d4" />
              </td>
            </tr>
            <tr />
          </tbody>
        </table>
      </CharacterSheetStyles>
    </div>
  );
}
