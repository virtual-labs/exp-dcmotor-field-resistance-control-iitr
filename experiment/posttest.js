/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
 

/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////






/////////////// Write the MCQ below in the exactly same described format ///////////////


  const myQuestions = [
    {
      question: "In case of regenerative braking, the motor",  ///// Write the question inside double quotes
      answers: {
        a: "Dissipates energy in armature circuit",                  ///// Write the option 1 inside double quotes
        b: "Dissipates energy in field circuit",                  ///// Write the option 2 inside double quotes
        c: "Both a and b",                  ///// Write the option 3 inside double quotes
        d: "Supply energy to source"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "d"                ///// Write the correct option inside double quotes
    },

    {
      question: "If plugging is applied to series motor for a long time, then",  ///// Write the question inside double quotes
      answers: {
        a: "It will start revolving in other direction at low speed",                  ///// Write the option 1 inside double quotes
        b: "Motor will stop",                  ///// Write the option 2 inside double quotes
        c: "Motor will burn",                  ///// Write the option 3 inside double quotes
        d: "None of these"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },                                  ///// To add more questions, copy the section below 
    									                  ///// this line

{
      question: "Disadvantage of the field-control method of speed control is",  ///// Write the question inside double quotes
      answers: {
        a: "That speed above normal speed can be achieved",                  ///// Write the option 1 inside double quotes
        b: "That commutation becomes unsatisfactory",                  ///// Write the option 2 inside double quotes
        c: "Its low efficiency",                  ///// Write the option 3 inside double quotes
        d: "None of these"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    }, 

    {
      question: "Speed regulation of a d.c. motor can be ideally achieved with",  ///// Write the question inside double quotes
      answers: {
        a: "A.C. excitation to the field of the motor",                  ///// Write the option 1 inside double quotes
        b: "Variable excitation to the field of the motor",                  ///// Write the option 2 inside double quotes
        c: "constant excitation to the field of the motor",                  ///// Write the option 3 inside double quotes
        d: "no excitation to the field of the motor"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    }, 


    {
      question: "Disadvantage of ward-Leonard system is",  ///// Write the question inside double quotes
      answers: {
        a: "increased maintenance cost",                  ///// Write the option 1 inside double quotes
        b: "its high initial cost",                  ///// Write the option 2 inside double quotes
        c: "its low efficiency at light loads",                  ///// Write the option 3 inside double quotes
        d: "All of them"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "d"                ///// Write the correct option inside double quotes
    }, 
    /* To add more MCQ's, copy the below section, starting from open curly braces ( { )
        till closing curly braces comma ( }, )

        and paste it below the curly braces comma ( below correct answer }, ) of above 
        question

    Copy below section

    {
      question: "This is question n?",
      answers: {
        a: "Option 1",
        b: "Option 2",
        c: "Option 3",
        d: "Option 4"
      },
      correctAnswer: "c"
    },

    Copy above section

    */




  ];




/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////


  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////