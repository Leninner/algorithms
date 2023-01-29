import { timeConversion } from '../timeConversion'

describe('timeConversion tests', () => {
  const testCases = [
    {
      input: '01:00:00AM',
      output: '01:00:00',
    },
    {
      input: '02:00:00AM',
      output: '02:00:00',
    },
    {
      input: '03:00:00AM',
      output: '03:00:00',
    },
    {
      input: '04:00:00AM',
      output: '04:00:00',
    },
    {
      input: '05:00:00AM',
      output: '05:00:00',
    },
    {
      input: '06:00:00AM',
      output: '06:00:00',
    },
    {
      input: '07:00:00AM',
      output: '07:00:00',
    },
    {
      input: '08:00:00AM',
      output: '08:00:00',
    },
    {
      input: '09:00:00AM',
      output: '09:00:00',
    },
    {
      input: '10:00:00AM',
      output: '10:00:00',
    },
    {
      input: '11:00:00AM',
      output: '11:00:00',
    },
    {
      input: '07:05:45PM',
      output: '19:05:45',
    },
    {
      input: '12:40:22AM',
      output: '00:40:22',
    },
    {
      input: '12:45:54PM',
      output: '12:45:54',
    },
    {
      input: '01:00:00PM',
      output: '13:00:00',
    },
    {
      input: '02:00:00PM',
      output: '14:00:00',
    },
    {
      input: '03:00:00PM',
      output: '15:00:00',
    },
    {
      input: '04:00:00PM',
      output: '16:00:00',
    },
    {
      input: '05:00:00PM',
      output: '17:00:00',
    },
    {
      input: '06:00:00PM',
      output: '18:00:00',
    },
    {
      input: '07:00:00PM',
      output: '19:00:00',
    },
    {
      input: '08:00:00PM',
      output: '20:00:00',
    },
    {
      input: '09:00:00PM',
      output: '21:00:00',
    },
    {
      input: '10:00:00PM',
      output: '22:00:00',
    },
    {
      input: '11:00:00PM',
      output: '23:00:00',
    },
    {
      input: '07:05:45PM',
      output: '19:05:45',
    },
    {
      input: '12:40:22AM',
      output: '00:40:22',
    },
    {
      input: '12:45:54PM',
      output: '12:45:54',
    },
  ]

  it.each(testCases)('should return the correct time with %s', (testCase) => {
    expect(timeConversion(testCase.input)).toEqual(testCase.output)
  })
})
