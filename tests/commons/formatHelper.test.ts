import { applyFormat } from '../../src/commons/formatHelper';

describe('Test applyFormat', () => {
  test('applyFormat for Number', () => {
    expect(applyFormat(123456, '0,0.00')).toBe('123,456.00');
    expect(applyFormat(123456, '0,0')).toBe('123,456');
    expect(applyFormat(1234.56, '0,0.00')).toBe('1,234.56');
  });

  test('applyFormat for Date', () => {
    expect(applyFormat('May/12/2019', 'DD/MM/YYYY')).toBe('12/05/2019');
    expect(applyFormat('2019/05/12', 'DD/MM/YYYY')).toBe('12/05/2019');
    //The month is from 0 to 11. Silly javascript
    expect(applyFormat(new Date(2019, 4, 12), 'DD/MM/YYYY')).toBe('12/05/2019');
    //From UDT
    expect(
      applyFormat(
        new Date(Date.UTC(2019, 4, 12, 10, 10, 10, 10)),
        'DD/MM/YYYY HH:mm:ss'
      )
    ).toBe('12/05/2019 18:10:10'); //only pass when running in Singapore (UTC +8)
  });
});
