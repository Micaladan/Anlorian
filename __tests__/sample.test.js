function add(a, b) {
  const aNum = parseInt(a);
  const bNum = parseInt(b);
  return aNum + bNum;
}

describe('Same Test 101', () => {
  it('works as espected', () => {
    // We run our expect statements to see if the test will pass
    expect(1).toEqual(1);
    const age = 100;
    expect(age).toEqual(100);
  });
  it('can add strings of numbers together', () => {
    expect(add('1', '2')).toBe(3);
  });
});
