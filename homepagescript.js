let courseCodes = [
    "MTH1W1",
    "MPM2D1",
    "MFM2P1",
    "MCR3U1",
    "MCF3M1",
    "MBF3C1",
    "MEL3E1",
    "MCV4U1",
    "MDM4U1",
    "MHF4U1",
    "MAP4C1",
    "MEL4E1",
    "SNC1W1",
    "SNC2D1",
    "SNC2P1",
    "SBI3U1",
    "SBI3C1",
    "SBI4U1",
    "SCH3U1",
    "SCH3C1",
    "SCH4U1",
    "SPH3U1",
    "SPH3C1",
    "SPH4U1"
];
const curriculumData = {
    "MTH1W1": {
        name: "Grade 9 Mathematics",
        units: [
            "Mathematical Thinking and Making Connections",
            "Number",
            "Algebra",
            "Data",
            "Geometry and Measurement",
            "Financial Literacy"
        ]
    },
    "MPM2D1": {
        name: "Grade 10 Academic Mathematics",
        units: [
            "Quadratic Relations",
            "Analytic Geometry",
            "Trigonometry",
            "Linear Systems"
        ]
    },
    "MFM2P1": {
        name: "Grade 10 Applied Mathematics",
        units: [
            "Measurement and Trigonometry",
            "Modelling Linear Relations",
            "Quadratic Relations",
            "Financial Applications"
        ]
    },
    "MCR3U1": {
        name: "Grade 11 Functions University",
        units: [
            "Characteristics of Functions",
            "Exponential Functions",
            "Discrete Functions",
            "Trigonometric Functions"
        ]
    },
    "MCF3M1": {
        name: "Grade 11 Functions and Applications",
        units: [
            "Quadratic Functions",
            "Exponential Functions",
            "Trigonometric Functions",
            "Financial Applications"
        ]
    },
    "MBF3C1": {
        name: "Grade 11 Mathematics for College and Careers",
        units: [
            "Mathematical Models",
            "Personal Finance",
            "Geometry and Trigonometry",
            "Data Management"
        ]
    },
    "MEL3E1": {
        name: "Grade 11 Mathematics for Work and Everyday Life",
        units: [
            "Earning and Purchasing",
            "Saving, Investing and Borrowing",
            "Transportation and Travel",
            "Managing Data"
        ]
    },
    "MCV4U1": {
        name: "Grade 12 Calculus and Vectors",
        units: [
            "Rate of Change",
            "Derivatives",
            "Applications of Derivatives",
            "Vectors",
            "Vector Applications"
        ]
    },
    "MDM4U1": {
        name: "Grade 12 Data Management",
        units: [
            "Probability Distributions",
            "Organization of Data for Analysis",
            "Statistical Analysis",
            "Counting and Probability",
            "Mathematical Research Project"
        ]
    },
    "MHF4U1": {
        name: "Grade 12 Advanced Functions",
        units: [
            "Exponential and Logarithmic Functions",
            "Trigonometric Functions",
            "Polynomial and Rational Functions",
            "Characteristics of Functions"
        ]
    },
    "MAP4C1": {
        name: "Grade 12 Foundations for College Mathematics",
        units: [
            "Mathematical Models",
            "Personal Finance",
            "Geometry and Trigonometry",
            "Data Management"
        ]
    },
    "MEL4E1": {
        name: "Grade 12 Mathematics for Work and Everyday Life",
        units: [
            "Earning and Purchasing",
            "Saving, Investing and Borrowing",
            "Transportation and Travel",
            "Managing Data"
        ]
    },
    "SNC1W1": {
        name: "Grade 9 Science",
        units: [
            "Biology: Sustainable Ecosystems",
            "Chemistry: Matter and Qualitative Analysis",
            "Physics: The Study of Electricity",
            "Earth and Space Science: Space Exploration"
        ]
    },
    "SNC2D1": {
        name: "Grade 10 Academic Science",
        units: [
            "Chemistry: Chemical Reactions",
            "Optics",
            "Biology: Tissues, Organs, and Systems",
            "Climate Change"
        ]
    },
    "SNC2P1": {
        name: "Grade 10 Applied Science",
        units: [
            "Chemistry: Chemical Reactions",
            "Optics",
            "Biology: Tissues, Organs, and Systems",
            "Earth and Space Science: Climate Change"
        ]
    },
    "SBI3U1": {
        name: "Grade 11 Biology University",
        units: [
            "Cellular Functions",
            "Genetic Processes",
            "Internal Systems",
            "Diversity of Living Things",
            "Plants: Anatomy, Growth, and Functions"
        ]
    },
    "SBI3C1": {
        name: "Grade 11 Biology College",
        units: [
            "Cellular Biology",
            "Microbiology",
            "Genetics",
            "Anatomy of Mammals",
            "Plants in the Natural Environment"
        ]
    },
    "SBI4U1": {
        name: "Grade 12 Biology University",
        units: [
            "Biochemistry",
            "Metabolic Processes",
            "Molecular Genetics",
            "Homeostasis",
            "Population Dynamics"
        ]
    },
    "SCH3U1": {
        name: "Grade 11 Chemistry University",
        units: [
            "Matter, Chemical Trends, and Chemical Bonding",
            "Chemical Reactions",
            "Quantities in Chemical Reactions",
            "Solutions and Solubility",
            "Gases and Atmospheric Chemistry"
        ]
    },
    "SCH3C1": {
        name: "Grade 11 Chemistry College",
        units: [
            "Physical Properties and Chemical Reactions",
            "Chemical Calculations",
            "Chemical Reactions",
            "Solutions and Solubility",
            "Environmental Chemistry"
        ]
    },
    "SCH4U1": {
        name: "Grade 12 Chemistry University",
        units: [
            "Organic Chemistry",
            "Energy Changes and Rates of Reaction",
            "Chemical Systems and Equilibrium",
            "Electrochemistry",
            "Structure and Properties of Matter"
        ]
    },
    "SPH3U1": {
        name: "Grade 11 Physics University",
        units: [
            "Kinematics",
            "Forces",
            "Energy and Society",
            "Wave Characteristics and Sound",
            "Electricity and Magnetism"
        ]
    },
    "SPH3C1": {
        name: "Grade 11 Physics College",
        units: [
            "Motion and Its Applications",
            "Mechanical Energy",
            "Electricity and Applications",
            "Sound and Applications",
            "Light and Applications"
        ]
    },
    "SPH4U1": {
        name: "Grade 12 Physics University",
        units: [
            "Dynamics",
            "Energy and Momentum",
            "Gravitational, Electric, and Magnetic Fields",
            "The Wave Nature of Light",
            "Revolutions in Modern Physics: Quantum Mechanics and Special Relativity"
        ]
    }
};

let dropdown, input, unitDropdown; // Declare globally but initialize in reinitializeDropdowns

function reinitializeDropdowns() {
    // Reinitialize DOM element references
    dropdown = document.getElementById('course_code_dropdown');
    input = document.getElementById('course_code');
    unitDropdown = document.getElementById('unit');

    // Populate course code dropdown
    dropdown.innerHTML = courseCodes.map(code => `<div onclick="selectOption('${code}')">${code}</div>`).join('');
    updateUnitDropdown();

    // Reattach event listeners
    input.addEventListener('click', showDropdown);
    input.addEventListener('input', filterOptions);
    input.addEventListener('input', updateUnitDropdown);

    // Reattach global click handler to close dropdown
    window.onclick = function(event) {
        if (!event.target.matches('#course_code')) {
            hideDropdown();
        }
    };
}

function updateUnitDropdown() {
    const selectedCode = input.value.toUpperCase();
    unitDropdown.innerHTML = '<option value="">Select a unit</option>';

    if (curriculumData[selectedCode]) {
        curriculumData[selectedCode].units.forEach(unit => {
            const option = document.createElement('option');
            option.value = unit;
            option.textContent = unit;
            unitDropdown.appendChild(option);
        });
    }
}

function showDropdown() {
    dropdown.classList.add('show');
}

function hideDropdown() {
    dropdown.classList.remove('show');
}

function filterOptions() {
    let filter = input.value.toUpperCase();
    let items = dropdown.getElementsByTagName('div');

    if (filter === "") {
        for (let i = 0; i < items.length; i++) {
            items[i].style.display = "";
        }
    } else {
        for (let i = 0; i < items.length; i++) {
            let text = items[i].textContent || items[i].innerText;
            if (text.toUpperCase().indexOf(filter) > -1) {
                items[i].style.display = "";
            } else {
                items[i].style.display = "none";
            }
        }
    }
}

function selectOption(value) {
    input.value = value;
    hideDropdown();
    updateUnitDropdown();
}

var questionsList = [];
let title = '';
let unit = '';
let code = '';

function storeCourseCode() {
    code = document.getElementById("course_code").value;
}

function getInput() {
    title = document.getElementById('title').value;
    code = document.getElementById('course_code').value;
    unit = document.getElementById('unit').value;
    var knowledgeQuestions = Number(document.getElementById('knowledge_questions').value);
    var applicationQuestions = Number(document.getElementById('application_questions').value);
    var communicationQuestions = Number(document.getElementById('communication_questions').value);
    var thinkingQuestions = Number(document.getElementById('thinking_questions').value);
    var totalQuestions = knowledgeQuestions + applicationQuestions + communicationQuestions + thinkingQuestions;

    var container = document.getElementById('question-container');
    container.innerHTML = '';

    for (let i = 0; i < totalQuestions; i++) {
        addQuestion(container);
    }
    updateQuestionNumbers(container);
}

async function generateApplicationQ(questionBox, answerBox) {
    try {
        await callChatGPT("give me a " + code + " unit " + unit + " application question? don't write anything else", questionBox);
        setTimeout(() => {
            if (questionBox.value) {
                generateAnswer(questionBox.value, answerBox);
            }
        }, 3000);
    } catch (error) {
        console.error("Error generating question:", error);
    }
}

async function generateQuestion(questionBox, answerBox) {
    try {
        await callChatGPT("give me a " + code + " unit " + unit + " question? don't write anything else", questionBox);
        setTimeout(() => {
            if (questionBox.value) {
                generateAnswer(questionBox.value, answerBox);
            }
        }, 3000);
    } catch (error) {
        console.error("Error generating question:", error);
    }
}

var currentFormat = 'long';

async function addQuestion() {
    var container = document.getElementById('question-container');

    var textBoxContainer = document.createElement('div');
    textBoxContainer.className = 'question-clump';
    textBoxContainer.style.marginBottom = '20px';
    textBoxContainer.style.padding = '16px';
    textBoxContainer.style.border = '1px solid #e0e0e0';
    textBoxContainer.style.backgroundColor = '#f9f9f9';
    textBoxContainer.style.borderRadius = '8px';

    var questionLabel = document.createElement('span');
    questionLabel.textContent = "Question " + (questionsList.length + 1) + ": ";
    questionLabel.style.fontWeight = '600';
    textBoxContainer.appendChild(questionLabel);

    var formatSelect = document.createElement('select');
    formatSelect.style.marginTop = '12px';
    formatSelect.style.marginBottom = '12px';
    formatSelect.style.padding = '8px';
    formatSelect.style.borderRadius = '8px';
    var longAnswerOption = document.createElement('option');
    longAnswerOption.textContent = 'Long Answer';
    longAnswerOption.value = 'long';
    var multipleChoiceOption = document.createElement('option');
    multipleChoiceOption.textContent = 'Multiple Choice';
    multipleChoiceOption.value = 'multiple';
    var trueFalseOption = document.createElement('option');
    trueFalseOption.textContent = 'True or False';
    trueFalseOption.value = 'truefalse';
    var matchingOption = document.createElement('option');
    matchingOption.textContent = 'Matching';
    matchingOption.value = 'matching';

    formatSelect.appendChild(longAnswerOption);
    formatSelect.appendChild(multipleChoiceOption);
    formatSelect.appendChild(trueFalseOption);
    formatSelect.appendChild(matchingOption);
    formatSelect.value = currentFormat;
    formatSelect.addEventListener('change', function() {
        currentFormat = formatSelect.value;
        if (currentFormat === 'long') {
            setLongAnswerFormat();
        } else if (currentFormat === 'multiple') {
            setMultipleChoiceFormat();
        } else if (currentFormat === 'truefalse') {
            setTrueFalseFormat();
        } else if (currentFormat === 'matching') {
            setMatchingFormat();
        }
    });

    textBoxContainer.appendChild(formatSelect);

    var buttonContainer = document.createElement('div');
    buttonContainer.style.display = 'flex';
    buttonContainer.style.gap = '8px';
    buttonContainer.style.marginBottom = '12px';

    var regenerateButton = document.createElement('button');
    regenerateButton.textContent = 'Regenerate';
    regenerateButton.style.padding = '8px 16px';
    regenerateButton.addEventListener('click', function() {
        // To be implemented
    });

    var latexButton = document.createElement('button');
    latexButton.textContent = 'LaTeX';
    latexButton.style.padding = '8px 16px';
    latexButton.addEventListener('click', function() {
        openLatexModal(questionBox);
    });

    var imageUploadButton = document.createElement('button');
    imageUploadButton.textContent = 'Upload Image';
    imageUploadButton.style.padding = '8px 16px';
    var imageInput = document.createElement('input');
    imageInput.type = 'file';
    imageInput.accept = 'image/*';
    imageInput.style.display = 'none';
    textBoxContainer.appendChild(imageInput);

    var imagePreviewContainer = document.createElement('div');
    imagePreviewContainer.style.marginTop = '12px';
    imagePreviewContainer.style.display = 'none';
    textBoxContainer.appendChild(imagePreviewContainer);

    imageUploadButton.addEventListener('click', function() {
        imageInput.click();
    });

    imageInput.addEventListener('change', function() {
        if (imageInput.files && imageInput.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                imagePreviewContainer.style.display = 'block';
                imagePreviewContainer.innerHTML = `<img src="${e.target.result}" alt="Uploaded Image" style="max-width: 100%; max-height: 200px; margin-top: 12px; border-radius: 8px;">`;
            };
            reader.readAsDataURL(imageInput.files[0]);
        }
    });

    var questionBox = document.createElement('textarea');
    questionBox.placeholder = 'Question';
    questionBox.style.width = '100%';
    questionBox.style.height = '50px';
    questionBox.style.display = 'block';
    questionBox.style.marginTop = '12px';
    questionBox.style.marginBottom = '12px';
    questionBox.style.boxSizing = 'border-box';
    questionBox.style.overflow = 'hidden';
    questionBox.style.fontSize = '14px';
    questionBox.style.fontFamily = 'Arial';
    questionBox.style.resize = 'none';
    questionBox.style.padding = '12px';
    questionBox.style.lineHeight = '1.5';
    questionBox.style.borderRadius = '8px';
    generateQuestion(questionBox, answerBox);

    questionBox.addEventListener('input', function() {
        adjustTextareaHeight(questionBox);
    });

    var answerBox = document.createElement('input');
    answerBox.type = 'text';
    answerBox.placeholder = 'Answer';
    answerBox.style.width = '70%';
    answerBox.style.padding = '12px';
    answerBox.style.marginRight = '12px';
    answerBox.style.borderRadius = '8px';

    var marksBox = document.createElement('input');
    marksBox.type = 'text';
    marksBox.placeholder = 'Marks';
    marksBox.style.width = '80px';
    marksBox.style.padding = '12px';
    marksBox.style.borderRadius = '8px';

    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.style.backgroundColor = '#d32f2f';
    deleteButton.style.padding = '8px 16px';
    deleteButton.addEventListener('click', function() {
        let index = Array.prototype.indexOf.call(container.children, textBoxContainer);
        if (index > -1) {
            questionsList.splice(index, 1);
        }
        container.removeChild(textBoxContainer);
        updateQuestionNumbers(container);
    });

    buttonContainer.appendChild(regenerateButton);
    buttonContainer.appendChild(latexButton);
    buttonContainer.appendChild(imageUploadButton);
    textBoxContainer.appendChild(buttonContainer);
    textBoxContainer.appendChild(deleteButton);
    textBoxContainer.appendChild(questionBox);
    textBoxContainer.appendChild(answerBox);
    textBoxContainer.appendChild(marksBox);

    container.appendChild(textBoxContainer);

    new Sortable(container, {
        animation: 150,
        ghostClass: 'sortable-ghost',
        onEnd: function() {
            updateQuestionNumbers(container);
        }
    });

    questionsList.push(textBoxContainer);

    function setLongAnswerFormat() {
        removeMatchingElements();
        var choicesBoxes = textBoxContainer.querySelectorAll('textarea[placeholder="Choices (separated by commas)"]');
        choicesBoxes.forEach(function(box) {
            textBoxContainer.removeChild(box);
        });
        questionBox.style.display = 'block';
        questionBox.placeholder = 'Question';
        answerBox.type = 'text';
        answerBox.placeholder = 'Answer';
        answerBox.style.width = '70%';
        answerBox.style.display = 'inline-block';
    }

    function setMultipleChoiceFormat() {
        removeMatchingElements();
        var existingChoicesBox = textBoxContainer.querySelector('textarea[placeholder="Choices (separated by commas)"]');
        if (existingChoicesBox) {
            return;
        }

        questionBox.style.display = 'block';
        questionBox.placeholder = 'Question';
        answerBox.type = 'text';
        answerBox.placeholder = 'Correct Answer';
        answerBox.style.width = '30%';
        answerBox.style.display = 'inline-block';

        var choicesBox = document.createElement('textarea');
        choicesBox.placeholder = 'Choices (separated by commas)';
        choicesBox.style.width = '100%';
        choicesBox.style.height = '50px';
        choicesBox.style.display = 'block';
        choicesBox.style.marginTop = '12px';
        choicesBox.style.marginBottom = '12px';
        choicesBox.style.boxSizing = 'border-box';
        choicesBox.style.overflow = 'hidden';
        choicesBox.style.fontSize = '14px';
        choicesBox.style.fontFamily = 'Arial';
        choicesBox.style.resize = 'none';
        choicesBox.style.padding = '12px';
        choicesBox.style.lineHeight = '1.5';
        choicesBox.style.borderRadius = '8px';
        choicesBox.addEventListener('input', function() {
            adjustTextareaHeight(choicesBox);
        });

        textBoxContainer.insertBefore(choicesBox, answerBox);
    }

    function setTrueFalseFormat() {
        removeMatchingElements();
        var choicesBoxes = textBoxContainer.querySelectorAll('textarea[placeholder="Choices (separated by commas)"]');
        choicesBoxes.forEach(function(box) {
            textBoxContainer.removeChild(box);
        });
        questionBox.style.display = 'block';
        questionBox.placeholder = 'Question';
        answerBox.type = 'text';
        answerBox.placeholder = 'Answer (True/False)';
        answerBox.style.width = '30%';
        answerBox.style.display = 'inline-block';
    }

    function setMatchingFormat() {
        removeMatchingElements();
        questionBox.style.display = 'block';
        questionBox.placeholder = 'Question';
        answerBox.style.display = 'none';

        function createPair() {
            var pairContainer = document.createElement('div');
            pairContainer.className = 'matching-pair';
            pairContainer.style.display = 'flex';
            pairContainer.style.marginBottom = '12px';
            pairContainer.style.alignItems = 'center';
            pairContainer.style.gap = '16px';

            var leftBox = document.createElement('input');
            leftBox.type = 'text';
            leftBox.placeholder = 'Left';
            leftBox.style.width = '50%';
            leftBox.style.padding = '12px';
            leftBox.style.borderRadius = '8px';

            var rightBox = document.createElement('input');
            rightBox.type = 'text';
            rightBox.placeholder = 'Right';
            rightBox.style.width = '50%';
            rightBox.style.padding = '12px';
            rightBox.style.borderRadius = '8px';

            var deleteButton = document.createElement('button');
            deleteButton.textContent = 'X';
            deleteButton.style.width = '40px';
            deleteButton.style.height = '40px';
            deleteButton.style.backgroundColor = '#d32f2f';
            deleteButton.style.color = 'white';
            deleteButton.style.border = 'none';
            deleteButton.style.borderRadius = '8px';
            deleteButton.style.cursor = 'pointer';
            deleteButton.addEventListener('click', function() {
                textBoxContainer.removeChild(pairContainer);
            });

            pairContainer.appendChild(leftBox);
            pairContainer.appendChild(rightBox);
            pairContainer.appendChild(deleteButton);

            textBoxContainer.insertBefore(pairContainer, addButton);
        }

        createPair();

        var addButton = document.createElement('button');
        addButton.className = 'matching-add-button';
        addButton.textContent = '+';
        addButton.style.padding = '8px 16px';
        addButton.style.marginTop = '12px';
        addButton.style.borderRadius = '8px';
        addButton.addEventListener('click', createPair);

        textBoxContainer.appendChild(addButton);
    }

    function removeMatchingElements() {
        var matchingPairs = textBoxContainer.querySelectorAll('.matching-pair');
        matchingPairs.forEach(function(pair) {
            textBoxContainer.removeChild(pair);
        });
        var matchingAddButton = textBoxContainer.querySelectorAll('.matching-add-button');
        matchingAddButton.forEach(function(button) {
            textBoxContainer.removeChild(button);
        });
    }

    await sleep(5000);
    generateAnswer(questionBox.value, answerBox);
    answerBox.addEventListener('input', function() {
        adjustTextareaHeight(answerBox);
    });

    questionBox.addEventListener('input', function() {
        adjustTextareaHeight(questionBox);
        if (questionBox.value) {
            generateAnswer(questionBox.value, answerBox);
        }
    });
}

function adjustTextareaHeight(element) {
    element.style.height = 'auto';
    element.style.height = element.scrollHeight + 'px';
}

function openLatexModal(questionBox) {
    var modal = document.getElementById("latexModal");
    var latexIconsContainer = document.getElementById("latexIconsContainer");

    latexIconsContainer.innerHTML = '';

    var latexChars = [
        { symbol: 'α', display: 'α' },
        { symbol: 'β', display: 'β' },
        { symbol: 'γ', display: 'γ' },
        { symbol: 'δ', display: 'δ' },
        { symbol: 'ε', display: 'ε' },
        { symbol: 'ζ', display: 'ζ' },
        { symbol: 'η', display: 'η' },
        { symbol: 'θ', display: 'θ' },
        { symbol: 'ι', display: 'ι' },
        { symbol: 'κ', display: 'κ' },
        { symbol: 'λ', display: 'λ' },
        { symbol: 'μ', display: 'μ' },
        { symbol: 'ν', display: 'ν' },
        { symbol: 'ξ', display: 'ξ' },
        { symbol: 'ο', display: 'ο' },
        { symbol: 'π', display: 'π' },
        { symbol: 'ρ', display: 'ρ' },
        { symbol: 'σ', display: 'σ' },
        { symbol: 'τ', display: 'τ' },
        { symbol: 'υ', display: 'υ' },
        { symbol: 'φ', display: 'φ' },
        { symbol: 'χ', display: 'χ' },
        { symbol: 'ψ', display: 'ψ' },
        { symbol: 'ω', display: 'ω' }
    ];

    latexChars.forEach(function(latexChar) {
        var latexIcon = document.createElement('span');
        latexIcon.className = 'latex-icon';
        latexIcon.textContent = latexChar.display;
        latexIcon.addEventListener('click', function() {
            questionBox.value += latexChar.symbol;
            modal.style.display = "none";
        });
        latexIconsContainer.appendChild(latexIcon);
    });

    modal.style.display = "block";

    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
        modal.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
}

function updateQuestionNumbers(container) {
    var questionClumps = container.getElementsByClassName('question-clump');
    for (var i = 0; i < questionClumps.length; i++) {
        var questionLabel = questionClumps[i].querySelector('span');
        questionLabel.textContent = "Question " + (i + 1) + ": ";
    }
}

function addFinishButton() {
    var container = document.getElementById('question-container');

    // Check if a Finish button already exists
    var existingFinishButton = container.querySelector('button.finish-button');
    if (existingFinishButton) {
        return; // Exit if a Finish button already exists
    }

    var finishButton = document.createElement('button');
    finishButton.textContent = 'Finish';
    finishButton.className = 'finish-button';
    finishButton.style.padding = '12px 24px';
    finishButton.style.backgroundColor = '#4CAF50';
    finishButton.style.color = 'white';
    finishButton.style.borderRadius = '8px';
    finishButton.style.marginTop = '24px';
    finishButton.addEventListener('click', function() {
        displayTestPaper();
    });

    container.appendChild(finishButton);
}

function displayTestPaper() {
    // Collect questions and additional data
    var questionClumps = document.querySelectorAll('#question-container .question-clump');
    var questionsList = [];
    questionClumps.forEach(function(clump, index) {
        var questionText = clump.querySelector('textarea[placeholder="Question"]').value;
        var answerText = clump.querySelector('input[placeholder="Answer"], input[placeholder="Correct Answer"], input[placeholder="Answer (True/False)"]')?.value || '';
        var marksText = clump.querySelector('input[placeholder="Marks"]').value;
        var formatSelect = clump.querySelector('select').value;
        var choicesText = clump.querySelector('textarea[placeholder="Choices (separated by commas)"]')?.value || '';
        var matchingPairs = Array.from(clump.querySelectorAll('.matching-pair')).map(pair => ({
            left: pair.querySelector('input[placeholder="Left"]').value,
            right: pair.querySelector('input[placeholder="Right"]').value
        }));
        var imageSrc = clump.querySelector('img')?.src || '';

        questionsList.push({
            question: questionText,
            answer: answerText,
            marks: marksText,
            format: formatSelect,
            choices: choicesText,
            matchingPairs: matchingPairs,
            image: imageSrc
        });
    });

    // Store the original page content
    var originalPage = document.querySelector('body').innerHTML;

    // Clear the body and create a preview container
    document.body.innerHTML = '';
    var previewContainer = document.createElement('div');
    previewContainer.className = 'container';
    previewContainer.style.padding = '32px';
    previewContainer.style.background = '#ffffff';
    previewContainer.style.borderRadius = '12px';
    previewContainer.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    previewContainer.style.maxWidth = '900px';
    previewContainer.style.margin = '40px auto';
    document.body.appendChild(previewContainer);

    // Create A4-sized test paper
    var testPaperDiv = document.createElement('div');
    testPaperDiv.id = 'test-paper';
    testPaperDiv.className = 'page';
    testPaperDiv.style.width = '794px';
    testPaperDiv.style.minHeight = '1122px';
    testPaperDiv.style.background = '#ffffff';
    testPaperDiv.style.padding = '40px';
    testPaperDiv.style.boxSizing = 'border-box';
    testPaperDiv.style.border = '1px solid #e0e0e0';
    testPaperDiv.style.margin = '0 auto';
    previewContainer.appendChild(testPaperDiv);

    // Header section
    var headerDiv = document.createElement('div');
    headerDiv.style.borderBottom = '1px solid #e0e0e0';
    headerDiv.style.paddingBottom = '16px';
    headerDiv.style.marginBottom = '24px';

    var titleElement = document.createElement('h1');
    titleElement.textContent = title || 'Test Paper';
    titleElement.style.fontSize = '28px';
    titleElement.style.fontWeight = '700';
    titleElement.style.color = '#1a3c34';
    titleElement.style.textAlign = 'center';
    titleElement.style.margin = '0 0 16px 0';
    headerDiv.appendChild(titleElement);

    var nameElement = document.createElement('div');
    nameElement.textContent = 'Name: ____________________';
    nameElement.style.fontSize = '16px';
    nameElement.style.fontWeight = '500';
    nameElement.style.textAlign = 'right';
    headerDiv.appendChild(nameElement);

    var codeElement = document.createElement('div');
    codeElement.textContent = code || 'Course Code';
    codeElement.style.fontSize = '14px';
    codeElement.style.color = '#1a3c34';
    codeElement.style.marginTop = '8px';
    headerDiv.appendChild(codeElement);

    var unitElement = document.createElement('div');
    unitElement.textContent = unit || 'Unit';
    unitElement.style.fontSize = '14px';
    unitElement.style.color = '#1a3c34';
    unitElement.style.marginTop = '4px';
    headerDiv.appendChild(unitElement);

    testPaperDiv.appendChild(headerDiv);

    // Questions section
    questionsList.forEach(function(item, index) {
        var questionContainer = document.createElement('div');
        questionContainer.style.marginBottom = '32px';

        var questionHeader = document.createElement('div');
        questionHeader.style.display = 'flex';
        questionHeader.style.justifyContent = 'space-between';
        questionHeader.style.alignItems = 'center';
        questionHeader.style.marginBottom = '8px';

        var questionLabel = document.createElement('strong');
        questionLabel.textContent = `Question ${index + 1}`;
        questionLabel.style.fontSize = '16px';
        questionLabel.style.color = '#1a3c34';
        questionHeader.appendChild(questionLabel);

        if (item.marks) {
            var marksLabel = document.createElement('span');
            marksLabel.textContent = `[${item.marks} marks]`;
            marksLabel.style.fontSize = '14px';
            marksLabel.style.color = '#4CAF50';
            questionHeader.appendChild(marksLabel);
        }

        questionContainer.appendChild(questionHeader);

        var questionText = document.createElement('div');
        questionText.textContent = item.question;
        questionText.style.fontSize = '14px';
        questionText.style.lineHeight = '1.6';
        questionText.style.color = '#333';
        questionContainer.appendChild(questionText);

        if (item.image) {
            var imageElement = document.createElement('img');
            imageElement.src = item.image;
            imageElement.style.maxWidth = '100%';
            imageElement.style.maxHeight = '200px';
            imageElement.style.marginTop = '12px';
            imageElement.style.borderRadius = '8px';
            questionContainer.appendChild(imageElement);
        }

        if (item.format === 'multiple' && item.choices) {
            var choicesList = document.createElement('ul');
            choicesList.style.listStyleType = 'none';
            choicesList.style.padding = '0';
            choicesList.style.marginTop = '12px';
            item.choices.split(',').forEach(function(choice, choiceIndex) {
                var choiceItem = document.createElement('li');
                choiceItem.textContent = `${String.fromCharCode(97 + choiceIndex)}. ${choice.trim()}`;
                choiceItem.style.fontSize = '14px';
                choiceItem.style.marginBottom = '4px';
                choicesList.appendChild(choiceItem);
            });
            questionContainer.appendChild(choicesList);
        }

        if (item.format === 'matching' && item.matchingPairs.length > 0) {
            var matchingTable = document.createElement('table');
            matchingTable.style.width = '100%';
            matchingTable.style.marginTop = '12px';
            matchingTable.style.borderCollapse = 'collapse';
            item.matchingPairs.forEach(function(pair) {
                var row = document.createElement('tr');
                var leftCell = document.createElement('td');
                leftCell.textContent = pair.left;
                leftCell.style.border = '1px solid #e0e0e0';
                leftCell.style.padding = '8px';
                leftCell.style.fontSize = '14px';
                var rightCell = document.createElement('td');
                rightCell.textContent = pair.right;
                rightCell.style.border = '1px solid #e0e0e0';
                rightCell.style.padding = '8px';
                rightCell.style.fontSize = '14px';
                row.appendChild(leftCell);
                row.appendChild(rightCell);
                matchingTable.appendChild(row);
            });
            questionContainer.appendChild(matchingTable);
        }

        if (item.format === 'truefalse') {
            var tfOptions = document.createElement('div');
            tfOptions.style.marginTop = '12px';
            ['True', 'False'].forEach(function(option) {
                var optionLabel = document.createElement('div');
                optionLabel.textContent = option;
                optionLabel.style.fontSize = '14px';
                optionLabel.style.display = 'inline-block';
                optionLabel.style.marginRight = '16px';
                tfOptions.appendChild(optionLabel);
            });
            questionContainer.appendChild(tfOptions);
        }

        if (item.format === 'long') {
            var answerSpace = document.createElement('div');
            answerSpace.style.borderTop = '1px solid #e0e0e0';
            answerSpace.style.marginTop = '16px';
            answerSpace.style.paddingTop = '16px';
            answerSpace.style.minHeight = '100px';
            questionContainer.appendChild(answerSpace);
        }

        testPaperDiv.appendChild(questionContainer);
    });

    // Action buttons
    var buttonContainer = document.createElement('div');
    buttonContainer.style.display = 'flex';
    buttonContainer.style.gap = '16px';
    buttonContainer.style.justifyContent = 'center';
    buttonContainer.style.marginTop = '32px';
    buttonContainer.style.padding = '16px';
    buttonContainer.style.background = '#f5f7f5';
    buttonContainer.style.borderRadius = '8px';

    var backButton = document.createElement('button');
    backButton.textContent = 'Back to Edit';
    backButton.style.padding = '12px 24px';
    backButton.style.background = '#e0e0e0';
    backButton.style.color = '#1a3c34';
    backButton.style.border = 'none';
    backButton.style.borderRadius = '8px';
    backButton.style.fontSize = '16px';
    backButton.style.cursor = 'pointer';
    backButton.addEventListener('click', function() {
        document.body.innerHTML = originalPage;
        reinitializeDropdowns(); // Reinitialize dropdowns with event listeners
    });

    var saveButton = document.createElement('button');
    saveButton.textContent = 'Save as PDF';
    saveButton.style.padding = '12px 24px';
    saveButton.style.background = '#4CAF50';
    saveButton.style.color = 'white';
    saveButton.style.border = 'none';
    saveButton.style.borderRadius = '8px';
    saveButton.style.fontSize = '16px';
    saveButton.style.cursor = 'pointer';
    saveButton.addEventListener('click', function() {
        saveScreenToPDF(title);
    });

    buttonContainer.appendChild(backButton);
    buttonContainer.appendChild(saveButton);
    previewContainer.appendChild(buttonContainer);
}

function clearScreen() {
    document.body.innerHTML = '';
}

function saveScreenToPDF(title) {
    var element = document.getElementById('test-paper');

    var opt = {
        margin: [40, 40, 40, 40],
        filename: (title || 'test') + '.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'pt', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().from(element).set(opt).save();
}

function generateQuestion(ele) {
    callChatGPT("give me a " + code + " unit " + unit + " question? don't write anything else", ele);
}

function regenerateQuestion(ogquestion) {
    callChatGPT('give me a ' + code + " unit " + unit + ' question that is not the same as ' + ogquestion);
}

function generateAnswer(ogquestion, ele) {
    callChatGPT('write the solution to this question from ' + code + ' unit ' + unit + ' and don\'t write anything else: ' + ogquestion, ele);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function callChatGPT(question, ele) {
    try {
        const response = await fetch('/.netlify/functions/chatgpt', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ question })
        });

        const data = await response.json();
        const content = data.answer;

        if (ele.tagName.toLowerCase() === 'textarea' || ele.tagName.toLowerCase() === 'input') {
            ele.value = content;
        }

        console.log("Generated content:", content);
    } catch (error) {
        console.error("Error during API call:", error);
    }
}


// Initialize dropdowns on page load
reinitializeDropdowns();