import React, { useState, useCallback } from 'react';
import { HamburgerSpinReverse } from 'react-animated-burgers';

export default function Hamburger() {
  const [isActive, setIsActive] = useState(false);

  const toggleButton = useCallback(
    () => setIsActive((prevState) => !prevState),
    []
  );

  return (
    <div>
      <HamburgerSpinReverse
        buttonColor="rgba(0, 0, 0, 0)"
        barColor="white"
        {...{ isActive, toggleButton }}
      />
    </div>
  );
}
