import domainName from '../code/domainName';

test('Debe dar respuestas correctas', () => {
  expect(domainName('http://github.com/carbonfive/raygun')).toBe('github');
  expect(domainName('http://www.zombie-bites.com')).toBe('zombie-bites');
  expect(domainName('https://www.cnet.com')).toBe('cnet');
  expect(domainName('http://google.com')).toBe('google');
  expect(domainName('http://google.co.jp')).toBe('google');
  expect(domainName('www.xakep.ru')).toBe('xakep');
  expect(domainName('https://youtube.com')).toBe('youtube');
});
