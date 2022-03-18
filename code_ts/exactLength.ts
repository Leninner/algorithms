const exactLength = (word: string): string[] => [
  word.slice(0, Math.floor(word.length / 2)),
  word.slice(Math.floor(word.length / 2)),
];

console.log(exactLength('Leninsin'));
