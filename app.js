/*--- Step 1 - Defining global variables ---*/

var questionsArray = [
    //Question 1
    {
        questionText: 'What is the number one personality characteristic of a successful individual?',
        questionChoices: ['low vigor', 'pre-competitive affect', 'high confusion'],
        questionCorrectChoice: 1,
        correctDetails: '24 hours before a task this individual is in a positive frame of mind.  And becomes more positive as competition nears. This is Known as, \'PRE-COMPETTIVE AFFECT\''
    },

    //Question 2
    {
        questionText: 'What is a quality of emotional control?',
        questionChoices: ['preforming under pressure', 'getting fustrated with results', 'blaming others'],
        questionCorrectChoice: 0,
        correctDetails: 'performing under pressure is a staple to emotional control.'
    },

    //Question 3
    {
        questionText: 'Responding to situations successes and failures rationally is known as what?',
        questionChoices: ['emotional stability', 'pre-competitive affect', 'focus'],
        questionCorrectChoice: 0,
        correctDetails: 'After a favorable circumstance successful individuals respond with emotional stability.  They understand that becoming successful is a sum of your total body of work.  They are happy about favorable results but must maintain their composure as they prepair for the next step on the latter of success.'
    },

    //Question 4
    {
        questionText: 'Consistancy is an imparative trait of a successfull individual, most successful individuals posses this personality trait?',
        questionChoices: ['emotional stability', 'hard working', 'self disipline'],
        questionCorrectChoice: 2,
        correctDetails: 'Self Disipline goes hand in hand with success. Self discipline is doing what you what your trained at your highest level consistantly.'
    },

    //Question 5
    {
        questionText: 'Low trait anxiety is also a key componennt to success.  what are low trait anxiety qualities successful individuals have?',
        questionChoices: ['Focused on task not the consequences', 'does not worry about things they cannot control', 'both answers are correct'],
        questionCorrectChoice: 2,
        correctDetails: 'Both answers are correct, successfull people usually posses low trait anxiety, which allows them to focus on task not consquences essentially only worrying about things they can control.'
    },


];

var currentQuestionNumber = 0;
var totalNumberOfQuestion = questionsArray.length;
var totalNumberOfCorrectAnswers = 0;
/*--- Step 2 - Defining functions ---*/
// show multiple questions in quetion div
function questionDisplay() {
    //1 - update the each question text
    $('#questiontitle').text(questionsArray[currentQuestionNumber].questionText);

    //2 - display the what are the choices for the current question
    //2.1 - first delete all the existing choices before populating it with new ones
    $('#choices').empty();
    //2.2 - then get the total number of choices for the current question
    var totalNumberOfChoices = questionsArray[currentQuestionNumber].questionChoices.length;
    //2.3 - loop through all the choices and append them to the choices container
    for (i = 0; i < totalNumberOfChoices; i++) {
        //2.3.1 - loop thru the answer choices and create a dynamically generated row for each of them
        var buildEachChoiceHTML = "<input type='radio' class='option' name='option' value=" + i + ">" + questionsArray[currentQuestionNumber].questionChoices[i] + "<br>";
        //2.3.2 append that row to the choices container in html
        $('#choices').append(buildEachChoiceHTML);
    }
    //3 - displays the number of the current question
    $('#questionNumberDisplay').text("Question " + (currentQuestionNumber + 1) + " of " + totalNumberOfQuestion);
}

$(document).ready(function () {
    /*--- Hide quiz and result section on load ---*/
    $('.explanation').hide();
    $('.results').hide();

    /*--- On start quiz ---*/
    $('#startQuizButton').click(function () { //start the quiz and show the first question
        $('.results').hide();
        $('.explanation').hide();
        $('.answer').show();
        $('.start-section').hide();
        //empty the result details container
        $('#result_msg').empty();
        questionDisplay();
    });

    /*--- Show quiz questions ---*/
    $('.answer').on('click', '.option', function () {
        //get the question answer from the user
        var userAnswer = $("input[class='option']:checked").val();
        //get the correct answer from the questionsArray above
        var correctAnswer = questionsArray[currentQuestionNumber].questionCorrectChoice;
        //compare the user answer with the correct answer
        if (userAnswer == correctAnswer) {
            //if the answer was correct increment the total number of correct answers
            totalNumberOfCorrectAnswers++;
            //console.log(totalNumberOfCorrectAnswers);
        }
        $('#result_msg').append("<h3>Q: " + questionsArray[currentQuestionNumber].questionText + "</h3>");
        $('#result_msg').append("<h4>A: " + questionsArray[currentQuestionNumber].correctDetails + "</h4>");

        //if quiz is finished, show result-section
        if ((currentQuestionNumber + 1) == totalNumberOfQuestion) {

            //show the final score
            $('#finalScore').text(totalNumberOfCorrectAnswers + "/" + totalNumberOfQuestion);

            //hide other containers
            $('.question').hide();
            $('.answer').hide();
            $('.start-section').hide();
            $('.counter').hide();
            $('.result-section').show();
        }
        //else continue to next question
        else {
            //increment the current question number
            currentQuestionNumber++;
            //display the following question
            questionDisplay();
        }
    });
    /*--- Load the start section from the result section ---*/
    $('.result-section').on('click', '#tryagain', function () {
        $('.start-section').show();
        $('.question').show();
        $('.counter').show();
        $('.quiz-section').hide();
        $('.result-section').hide();

        //reset variables to start quiz again
        currentQuestionNumber = 0;
        totalNumberOfCorrectAnswers = 0;
    });
});


//create a intro and start button

//show relitive answers to their repective question when they populate

//counter shows what question you are on

//results show score

//button resets the questionier

//explanation displays after the user has selcted an answer.

// explanations appears through slides down method.



/*--- Step 3 - Using functions ---*/
