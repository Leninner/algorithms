/**
 * [] array ow words
 * s => query
 */

const filterResults = (s, array) => {
  return array.filter((value) => value.slice(0, s.length) === s);
};

console.log(filterResults('de', ['dog', 'deer', 'deal']));
