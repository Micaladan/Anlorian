import formatMoney from '../lib/formatMoney';

describe('format Money function', () => {
  it('works with fractional dollars', () => {
    expect(formatMoney(1)).toEqual('$0.01');
    expect(formatMoney(10)).toEqual('$0.10');
    expect(formatMoney(140)).toEqual('$1.40');
  });

  it('leaves off cents when it is whole dollars', () => {
    expect(formatMoney(100)).toEqual('$1');
    expect(formatMoney(4000)).toEqual('$40');
    expect(formatMoney(99900)).toEqual('$999');
    expect(formatMoney(50000000)).toEqual('$500,000');
  });

  it('works with whole and fractional dollars', () => {
    expect(formatMoney(140)).toEqual('$1.40');
    expect(formatMoney(5012)).toEqual('$50.12');
    expect(formatMoney(101)).toEqual('$1.01');
    expect(formatMoney(123456)).toEqual('$1,234.56');
  });
});
