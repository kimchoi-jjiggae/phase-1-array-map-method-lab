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
  let capTutorial = tutorials.map(title => {
    let words = title.split(" ");
    let capWords = words.map(e => {
      let firstLetter = e[0].toUpperCase()
      return `${firstLetter}${e.slice(1)}`
    })
    return capWords.join(" ") 

  })
  return capTutorial
}

