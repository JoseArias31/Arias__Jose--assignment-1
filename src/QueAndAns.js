
export const QaA = [
    {
      question: "1) What is React?",
      answers: getRandomAnswers({
        ans1: "JavaScript library for building UI components.",
        ans2: "Programming language for server-side development.",
        ans3: "Database management system.",
        ans4: "Visual design tool for wireframes."
      }),
      correctAnswer: "ans1"
    },
    {
      question: "2) How to pass data from parent to child component in React?",
      answers: getRandomAnswers({
        ans1: "Props.",
        ans2: "Data is automatically shared.",
        ans3: "'parentData' method.",
        ans4: "'shareData' function."
      }),
      correctAnswer: "ans1"
    },
    {
      question: "3) Purpose of 'key' prop in React?",
      answers: getRandomAnswers({
        ans1: "Uniquely identify list elements.",
        ans2: "Apply CSS styles to elements.",
        ans3: "'Define rendering order.",
        ans4: "Encryption/decryption."
      }),
      correctAnswer: "ans1"
    },
    {
      question: "4) How to handle form input changes in React?",
      answers: getRandomAnswers({
        ans1: "'onChange' event and update component state.",
        ans2: "React handles changes automatically.",
        ans3: "'onInputChange' method.",
        ans4: "'handleFormChange' function."
      }),
      correctAnswer: "ans1"
    },
    {
      question: "5) What is conditional rendering in React?",
      answers: getRandomAnswers({
        ans1: "Render components based on conditions/state.",
        ans2: "Based on browser type.",
        ans3: "Render components with random styles.",
        ans4: "'randomRender' function."  
      }),
      correctAnswer: "ans1"
    },
    {
      question: "6) How to make API requests in React?",
      answers: getRandomAnswers({
        ans1: "'fetch' API or libraries like Axios.",
        ans2: "No API request support in React.",
        ans3: "'makeRequest' method.",
        ans4: "Built-in 'getAPI' function." 
      }),
      correctAnswer: "ans1"
    },
    {
      question: "7) Purpose of 'useState' hook in React?",
      answers: getRandomAnswers({
        ans1: "Add state to functional components.",
        ans2: "Create animations.",
        ans3: "Import external libraries.",
        ans4: "'useMyState' hook." 
      }),
      correctAnswer: "ans1"
    },
    {
      question: "8) How to style React components?",
      answers: getRandomAnswers({
        ans1: "Inline styles, CSS classes, CSS modules, or CSS-in-JS libraries.",
        ans2: "React automatically applies styles.",
        ans3: "'styleComponent' method.",
        ans4: "Built-in 'getStyles' function." 
      }),
      correctAnswer: "ans1"
    },
    {
      question: "9) How to handle form submission in React?",
      answers: getRandomAnswers({
        ans1: "'onSubmit' event handler.",
        ans2: "React handles form submission automatically.",
        ans3: "'handleFormSubmit' function.",
        ans4: "Built-in 'submitForm' method." 
      }),
      correctAnswer: "ans1"
    },
    {
      question: "10) Role of 'useState' hook in React?",
      answers: getRandomAnswers({
        ans1: "Add state to functional components.",
        ans2: "Styling components in React.",
        ans3: "React automatically manages state.",
        ans4: "'manageState' function." 
      }),
      correctAnswer: "ans1"
    }
  ];
  
  // Function to get random answers
  function getRandomAnswers(answers) {
    const keys = Object.keys(answers);
    const shuffledKeys = shuffleArray(keys);
    const randomizedAnswers = {};
    shuffledKeys.forEach((key, index) => {
      randomizedAnswers[key] = answers[keys[index]];
    });
    return randomizedAnswers;
  }
  
  // Function to mix an array
  function shuffleArray(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }
  