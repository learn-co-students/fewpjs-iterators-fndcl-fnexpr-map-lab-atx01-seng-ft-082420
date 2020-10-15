const tutorials = [
  "what does the this keyword mean?",
  "What is the Contutorialuctor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?"
];

const titleCased = () => {
  return tutorials.map(tutorial => {
    let words = tutorial.split(" ");
    let capitalizedWords = words.map(
      word => word.charAt(0).toUpperCase() + word.slice(1)
    );
    let result = capitalizedWords.join(" ");
    console.log(result);
    // return tutorial.charAt(0).toUpperCase() + tutorial.slice(1);
    return result;
  });
};

// titleCased;
// const titleCased = () => {
//   return tutorials.map(tutorial => {
//     let words = tutorial.split(" ");
//     let capitalizedWords = words.map(
//       word => word.charAt(0).toUpperCase() + word.slice(1)
//     );
//     let result = capitalizedWords.join(" ");
//     return result;
//   });
// };

// const titleCased = tutorials.map(tutorial => {
//   let words = tutorial.split("");
//   let capFirst = words.map(
//     word => word.charAt(0).toUpperCase() + word.slice(1)
//   );
//   let result = capFirst.join('')
//   // result = tutorial.charAt(0).toUpperCase() + tutorial.slice(1);

//   return result;
// });
