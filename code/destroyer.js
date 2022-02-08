const destroyer = (arr) => {
  const values = Object.values(arguments).splice(1)

  return arr.filter(value => !values.includes(value));
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
