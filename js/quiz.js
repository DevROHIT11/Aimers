const questions = {
    Math: [
        {
            question: '1. What are the roots of the quadratic equation x² - 5x + 6 = 0?',
            options: ['2, 3', '1, 6', '-2, -3', '3, -2'],
            answer: '2, 3'
        },
        {
            question: '2. What is the sum of the first 10 terms of the arithmetic progression: 2, 5, 8, 11, ...?',
            options: ['155', '150', '140', '145'],
            answer: '150'
        },
        {
            question: '3. If sin A = 1/2, what is the value of cos A when A is an acute angle?',
            options: ['1/2', '√3/2', '√2/2', '1'],
            answer: '√3/2'
        },
        {
            question: '4. The distance between the points (3, 4) and (7, 1) is:',
            options: ['5 units', '7 units', '6 units', '8 units'],
            answer: '5 units'
        },
        {
            question: '5. The length of the tangent drawn from a point 5 cm away from the center of a circle of radius 3 cm is:',
            options: ['4 cm', '3 cm', '2 cm', '6 cm'],
            answer: '4 cm'
        }
    ],
    Science: [
        { question: 'What is the chemical symbol for water?', options: ['H2O', 'O2', 'CO2', 'NaCl'], answer: 'H2O' },
        { question: 'What planet is known as the Red Planet?', options: ['Mars', 'Jupiter', 'Saturn', 'Venus'], answer: 'Mars' },
        { question: 'What organ is vital for pumping blood through the body?', options: ['Lungs', 'Brain', 'Heart', 'Stomach'], answer: 'Heart' },
        { question: 'What gas do plants need for photosynthesis?', options: ['Oxygen', 'Nitrogen', 'Hydrogen', 'Carbon Dioxide'], answer: 'Carbon Dioxide' },
        { question: 'What is the process by which plants make their food?', options: ['Respiration', 'Digestion', 'Photosynthesis', 'Transpiration'], answer: 'Photosynthesis' }
    ],
    English: [
        { question: 'Identify the correct sentence:', options: ['She don\'t like chocolate cake.', 'She didn\'t liked chocolate cake.', 'She doesn\'t like chocolate cake.', 'She not like chocolate cake.'], answer: 'She doesn\'t like chocolate cake.' },
        { question: 'In the story "The Thief’s Story" by Ruskin Bond, what is the main character’s initial plan?', options: ['To become a successful businessman', 'To rob the protagonist of his money', 'To escape from the police', 'To start a new life in a different city'], answer: 'To rob the protagonist of his money' },
        { question: 'In the poem “The Ballad of the Tempest,” what does the poet compare the sea to?', options: ['A dragon', 'A monster', 'A wolf', 'A beast'], answer: 'A monster' },
        { question: 'Choose the synonym for the word "serene":', options: ['Agitated', 'Calm', 'Annoyed', 'Energetic'], answer: 'Calm' },
        { question: 'Based on the story "The Diary of Anne Frank," what is Anne’s primary concern in her diary entries?', options: ['Her future career', 'Her family’s health', 'The experiences of living in hiding during WWII', 'Her school grades'], answer: 'The experiences of living in hiding during WWII' }
    ],
    'Social Science': [
        { question: 'Who was the first President of the United States?', options: ['Abraham Lincoln', 'George Washington', 'Thomas Jefferson', 'John Adams'], answer: 'George Washington' },
        { question: 'What is the capital city of France?', options: ['Berlin', 'Madrid', 'Paris', 'Rome'], answer: 'Paris' },
        { question: 'Which ocean is the largest?', options: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'], answer: 'Pacific Ocean' },
        { question: 'What is the currency of Japan?', options: ['Yuan', 'Won', 'Yen', 'Ringgit'], answer: 'Yen' },
        { question: 'In which continent is the Sahara Desert located?', options: ['Asia', 'Africa', 'Australia', 'South America'], answer: 'Africa' }
    ]
};

let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let currentSubject = '';

function startQuiz(subject) {
    currentSubject = subject;
    document.getElementById('subject-selection').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    document.getElementById('back-button').style.display = 'none';
    
    currentQuestions = shuffleArray(questions[subject]);
    currentIndex = 0;
    score = 0;
    displayQuestion();
}

function displayQuestion() {
    if (currentIndex >= currentQuestions.length) {
        document.getElementById('quiz').style.display = 'none';
        document.getElementById('result').style.display = 'block';
        document.getElementById('result').innerText = `Your ${currentSubject} score is: ${score}/${currentQuestions.length}`;
        
        // Redirect to subject selection page after displaying the score
        setTimeout(() => {
            showSubjectSelection();
        }, 2000); // 2 seconds delay before redirecting

        return;
    }

    const question = currentQuestions[currentIndex];
    document.getElementById('question-container').innerText = question.question;
    
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    question.options.forEach((option) => {
        const button = document.createElement('button');
        button.className = 'option';
        button.innerText = option;
        button.onclick = () => checkAnswer(option, button);
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedOption, button) {
    const question = currentQuestions[currentIndex];
    if (selectedOption === question.answer) {
        button.style.backgroundColor = '#83fc93';
        button.style.borderColor = '#39FF14';
        score++;
    } else {
        button.style.backgroundColor = '#fa6b6b';
        button.style.borderColor = '#FF3131';
    }
    setTimeout(() => {
        currentIndex++;
        displayQuestion();
    }, 500); // Wait 0.5 seconds before showing the next question
}

function showSubjectSelection() {
    document.getElementById('subject-selection').style.display = 'block';
    document.getElementById('result').style.display = 'none';
    document.getElementById('back-button').style.display = 'none';
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
