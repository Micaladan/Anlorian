export default function CharacterSheet() {
  return (
    <header className="character-sheet">
      <div className="flex-grid">
        <div className="col">This little piggy went to market.</div>
        <div className="col">This little piggy stayed home.</div>
        <div className="col">This little piggy had roast beef.</div>
      </div>

      <div className="flex-grid">
        <div className="col">This little piggy went to market.</div>
        <div className="col">This little piggy stayed home.</div>
        <div className="col">This little piggy had roast beef.</div>
        <div className="col">This little piggy had none.</div>
        <div className="col">
          This little piggy went wee wee wee all the way home.
        </div>
      </div>
    </header>
  );
}
