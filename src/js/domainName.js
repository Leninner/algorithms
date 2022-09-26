// https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript

// redex for www. and https://
// if (url.includes(/\"www"/)) {
//   return url.replace(/\"www"/g, "").replace(/https:\/\//g, "");

const domainName = (url) =>
  url
    .replace('http://', '')
    .replace('https://', '')
    .replace('www.', '')
    .split('.')[0] // Se puede hacer varios replace sin problemas porque funciona similar a un try catch

// NOTE: Solución larga con regex

// if (url.includes('www')) {
//   return url
//     .replace(/www\./g, '')
//     .replace(/(https:\/\/|http:\/\/)/g, '')
//     .split('.')[0];
// } else if (url.includes('https://') || url.includes('http://')) {
//   return url.replace(/(https:\/\/|http:\/\/)/g, '').split('.')[0];
// }

// return url.split('.')[0];
export default domainName
