// Exercise

// The company ACME offers their employees the flexibility to work the hours they want. They will pay for the hours worked based on the day of the week and time of day, according to the following table:

// Monday - Friday
// 00:01 - 09:00 25 USD
// 09:01 - 18:00 15 USD
// 18:01 - 00:00 20 USD

// Saturday and Sunday
// 00:01 - 09:00 30 USD
// 09:01 - 18:00 20 USD
// 18:01 - 00:00 25 USD

// The goal of this exercise is to calculate the total that the company has to pay an employee, based on the hours they worked and the times during which they worked. The following abbreviations will be used for entering data:

// MO: Monday
// TU: Tuesday
// WE: Wednesday
// TH: Thursday
// FR: Friday
// SA: Saturday
// SU: Sunday

// Input: the name of an employee and the schedule they worked, indicating the time and hours. This should be a .txt file with at least five sets of data. You can include the data from our two examples below.

// Output: indicate how much the employee has to be paid

// For example:

// Case 1:
// INPUT
// RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00
// OUTPUT:
// The amount to pay RENE is: 215 USD

// Case 2:
// INPUT
// ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00
// OUTPUT:
// The amount to pay ASTRID is: 85 USD

// Once you have finished the exercise, please upload the solution to GitHub and send us the link. Don’t forget to include a README.md file. Your README should include an overview of your solution, an explanation of your architecture, an explanation of your approach and methodology and instructions on how to run the program locally.

// We evaluate many aspects, including how well your code is structured, applied pattern designs, testing, and the quality of your solution.

// When submitting your exercise, be sure to avoid including compiled files as this could be considered malware. Please include the proper instructions to compile your project in the README file.

const weekSalary = {
  MO_TU_WE_TH_FR: {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    25: [1, 9],
    // eslint-disable-next-line @typescript-eslint/naming-convention
    15: [9, 18],
    // eslint-disable-next-line @typescript-eslint/naming-convention
    20: [18, 0],
  },
  SA_SU: {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    30: [1, 9],
    // eslint-disable-next-line @typescript-eslint/naming-convention
    20: [9, 18],
    // eslint-disable-next-line @typescript-eslint/naming-convention
    25: [18, 0],
  },
}

const getScheduleByDay = (schedule) =>
  schedule.split(',').reduce(
    (acc, curr) => ({
      ...acc,
      [curr.slice(0, 2)]: {
        ...acc[curr.slice(0, 2)],
        hoursRange: [
          Number(curr.slice(2).split('-')[0].slice(0, 2)),
          Number(curr.slice(2).split('-')[1].slice(0, 2)),
        ],
        hoursWorked:
          Number(curr.slice(2).split('-')[1].slice(0, 2)) <
          Number(curr.slice(2).split('-')[0].slice(0, 2))
            ? 24 +
              Number(curr.slice(2).split('-')[1].slice(0, 2)) -
              Number(curr.slice(2).split('-')[0].slice(0, 2))
            : Number(curr.slice(2).split('-')[1].slice(0, 2)) -
              Number(curr.slice(2).split('-')[0].slice(0, 2)),
      },
    }),
    {}
  )

const getFinalSalaryPerEmployee = ({
  monday,
  tuesday,
  wendsday,
  thursday,
  friday,
  saturday,
  sunday,
}) =>
  // Method to calculate the total salary for an employee avoiding undefined values
  Object.values({
    monday,
    tuesday,
    wendsday,
    thursday,
    friday,
    saturday,
    sunday,
  }).reduce((acc, curr) => (curr ? acc + curr : acc), 0)
// Method to calculate the salary for a specific range
const getSalaryForCurrentSchedule = ({
  range,
  startHour,
  endHour,
  hoursWorked,
  salary,
}) => {
  let currentSalary = salary
  Object.entries(range).forEach(([salaryRange, [start, end]], index) => {
    if (
      start <= startHour &&
      (end === 0 ? 24 : end) >= (endHour < startHour ? endHour + 24 : endHour)
    ) {
      currentSalary += hoursWorked * salaryRange
    }

    if (
      endHour < startHour &&
      startHour > start &&
      startHour <= (end === 0 ? 24 : end)
    ) {
      if (start <= startHour && (end === 0 ? 24 : end) >= endHour) {
        const salaryValue = Object.keys(range)[index + 1]

        currentSalary +=
          ((end === 0 ? 24 : end) - startHour) * salaryRange +
          (hoursWorked - ((end === 0 ? 24 : end) - startHour)) *
            Number(salaryValue)
      }
    }
  })

  return currentSalary
}

const getSalaryForEmployees = (employee) => {
  const keys = ['MO_TU_WE_TH_FR', 'SA_SU']
  const [employeeName, schedule] = employee.split('=')
  const scheduleByDay = getScheduleByDay(schedule)

  return Object.entries(
    Object.entries(scheduleByDay).reduce(
      (acc, [day, { hoursRange, hoursWorked }]) => {
        const [startHour, endHour] = hoursRange
        const key = keys.find((key) => key.includes(day))
        const posibleRanges = weekSalary[key]

        const salary = 0

        return {
          ...acc,
          [employeeName]: {
            ...acc[employeeName],
            [day]: getSalaryForCurrentSchedule({
              range: posibleRanges,
              startHour,
              endHour,
              hoursWorked,
              salary,
            }),
          },
        }
      },
      {}
    )
  ).reduce(
    (
      acc,
      [
        employeeName,
        { monday, tuesday, wendsday, thursday, friday, saturday, sunday },
      ]
    ) => {
      const sum = getFinalSalaryPerEmployee({
        monday,
        tuesday,
        wendsday,
        thursday,
        friday,
        saturday,
        sunday,
      })

      return `${acc}The amount to pay ${employeeName} is: ${sum} USD\n`
    },
    ''
  )
}

console.log(
  getSalaryForEmployees(
    'RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00'
  )
) // This works

console.log(
  getSalaryForEmployees('ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00')
) // This also works

console.log(
  getSalaryForEmployees(
    'RENE=MO20:00-02:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00'
  )
) // This works
