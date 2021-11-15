import { timeConversion } from '../code/timeConversion';

test('Debería hacer conversiones correctas', () => {
  expect(timeConversion('12:05:45AM')).toBe('00:05:45');
  expect(timeConversion('09:05:45AM')).toBe('09:05:45');
  expect(timeConversion('03:05:45PM')).toBe('15:05:45');
});
