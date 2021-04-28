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
  return tutorials.map((sentence) => {
    let arr = sentence.split(" ");
    //ok should have an array of the words
    let newArr = arr.map(x => changeToCapital(x));
    //should have all the words capitalized in a new array

    return newArr.join(" ");
  })
}

const changeToCapital=(word)=>{
  if (word[0] === word[0].toUpperCase()){
    return word;
  } else{
    return word.charAt(0).toUpperCase() + word.slice(1)
  }
}