const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(tutorial => {
    return tutorial.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
  })
}

/*
const titleCased = () => {
  return tutorials.map(tutorial => {
    return tutorial.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
  })
}
*/

/*
const cap0 = tutorials[0];
const words = cap0.split(" ");
for (let i= 0; i < words.length; i++){
  words[i] = words[i][0].toUpperCase() + words[i].substr(1)
}
return words.join(" ");
*/ 