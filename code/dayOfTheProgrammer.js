const dayOfProgrammer = (year) => {
  // p AND q
  if (year >= 1700 && year <= 1917) {
    if (year % 4 == 0) {
      return (
        ((366 - 256) / ((366 - 256) / 12).toFixed()).toFixed() + '.' + '0' + ((365 - 256) / 12).toFixed() + '.' + year
      );
    } else {
      return (
        ((333 - 256) / ((333 - 256) / 12).toFixed()).toFixed() + '.' + '0' + ((365 - 256) / 12).toFixed() + '.' + year
      );
    }
    // p AND q
  } else if (year >= 1918 && year <= 2700) {
    // p OR (q AND r)
    if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) {
      return (
        ((366 - 256) / ((366 - 256) / 12).toFixed()).toFixed() + '.' + '0' + ((365 - 256) / 12).toFixed() + '.' + year
      );
    } else {
      if (year == 1918) {
        return (
          parseInt(((333 - 256) / ((333 - 256) / 12).toFixed()).toFixed()) +
          13 +
          '.0' +
          ((365 - 256) / 12).toFixed() +
          '.' +
          year
        );
      } else {
        return (
          ((333 - 256) / ((333 - 256) / 12).toFixed()).toFixed() + '.' + '0' + ((365 - 256) / 12).toFixed() + '.' + year
        );
      }
    }
  }
};

export { dayOfProgrammer };
