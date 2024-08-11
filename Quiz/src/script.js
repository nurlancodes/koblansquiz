// script.js

let questions = [
    {
        prompt: `Inson huquqlari umumjahon Deklaratsiyasi” qachon qabul qilingan ?`,
        options: [
            "1948- yil 10- dekabrda",
            "1946- yil 10- dekabrda ",
            "1991- yil 18- noyabrda",
            "1945- yil 18- noyabrda.",
        ],
        answer: "1948- yil 10- dekabrda",
    },

    {
        prompt: `O‘zbekiston Respublikasi Konstitutsiyasining kirish qismi nima
        deb ataladi ?   
        ?`,
        options: [
            "Asosiy prinsiplar",
            "Muqaddima",
            "I bo‘lim",
            "Xotima",
        ],
        answer: "Muqaddima",
    },

    {
        prompt: `Davlat  hokimiyatini amalga oshirish usullari va uslublari tizimining yuridik atamasini ko‘rsating.?`,
        options: [
            "Davlatning boshqaruv shakli",
            "Davlatning tuzilish shakli",
            "Davlat funksiyasi",
            "Siyosiy tartibot",
        ],
        answer: "Siyosiy tartibot",
    },

    {
        prompt: `“Suverenitet” so‘zi qanday ma’noni anglatadi ?`,
        options: [
            "Davlatning o‘z ichki hayotida boshqa davlatlardan mustaqilligini",
            "Davlatning o‘z ichki hayotida va tashqi munosabatlarida boshqa davlatlardan mustaqilligi",
            "Davlatning o‘z ichki hayotida va boshqa davlatlar bilan munosabatida qaramligini",
            "Davlatning boshqa davlat tarkibida ekanligini.",
        ],
        answer: "Davlatning o‘z ichki hayotida va tashqi munosabatlarida boshqa davlatlardan mustaqilligi",
    },

    {
        prompt: `O‘zbеkiston  Rеspublikasining  mustaqilligi qachon e’lon qilingan ?`,
        options: [
            "1990- yil 20- iyunda",
            "1991- yil, 31- avgustda",
            "1992- yil, 10- dekabrda",
            "1992- yil, 8- dekabrda.",
        ],
        answer: "1991- yil, 31- avgustda",
    },

    {
        prompt: `“Demokratiya” so‘zi qanday ma’noni anglatadi ?`,
        options: [
            "Xalq hokimyatchiligi",
            "Prezident boshqaruvi",
            "Yakka hokimlik",
            "Mustaqillik",
        ],
        answer: "Xalq hokimyatchiligi",
    },

    {
        prompt: `Boshqaruv shakliga ko‘ra davlatlarning qanday turlari mavjud ?`,
        options: [
            "Monarxiya, Unitar",
            "Respublika, Federatsiya",
            "Monarxiya, Respublika",
            "Federatsiya, Konfederatsiya",
        ],
        answer: "Monarxiya, Respublika",
    },

    {
        prompt: `Siyosiy partiyalar  tuzish va ularning ishida ishtirok etish fuqarolarning qanday huquqi hisoblanadi ?`,
        options: [
            "Iqtisodiy huquqlar",
            "Ijtimoiy huquqlar",
            "Siyosiy huquqlar",
            "Federatsiya, Konfederatsiya",
        ],
        answer: "Siyosiy huquqlar",
    },

    {
        prompt: `O‘zbekiston Respublikasining “Siyosiy partiyalar to‘g‘risida”gi qonu ni qachon qabul qilingan ?`,
        options: [
            "1991- yil 1- noyabrda",
            "1994- yil 18- fevralda",
            "1997- yil 26- dekabrda",
            "1996- yil 26- dekabrda",
        ],
        answer: "1996- yil 26- dekabrda",
    },

    {
        prompt: `Mamlakatda mehnat  qilayotgan aholining huquqlarini davlat tashkilotlari  bilan  bir qatorda himoya qiluvchi eng ommaviy  jamoat birlashmasi nima deb ataladi ?`,
        options: [
            "Siyosiy partiya",
            "Ijodiy uyushma",
            "Kasaba uyushmalari",
            "Faxriylar tashkilotlari",
        ],
        answer: "Kasaba uyushmalari",
    },

    {
        prompt: `Davlatning huquqqa bo‘lgan munosabatiga qarab quyidagi turlari mavjud ?`,
        options: [
            "etatik, qonuniy va huquqiy",
            "huquqiy, fuqarolik va etatik",
            "etatik, huquqiy va oraliq",
            "fuqarolik, etatik va oraliq",
        ],
        answer: "etatik, huquqiy va oraliq",
    },

    {
        prompt: `Davlatning  tazyiqisiz,  qonun  doirasida  vujudga  kelgan  muayyan kishilik  hamjamiyatining  ixtiyoriy  o‘zini-o‘zi  boshqarishi  …  ni  ang latadi ?`,
        options: [
            "huquqiy davlat",
            "jamiyat",
            "fuqarolik jamiyati",
            "fuqarolik, etatik va oraliq",
        ],
        answer: "jamiyat",
    },

    {
        prompt: `Davlatning  tazyiqisiz,  qonun  doirasida  vujudga  kelgan  muayyan kishilik  hamjamiyatining  ixtiyoriy  o‘zini-o‘zi  boshqarishi  …  ni  ang latadi ?`,
        options: [
            "huquqiy davlat",
            "jamiyat",
            "fuqarolik jamiyati",
            "fuqarolik, etatik va oraliq",
        ],
        answer: "jamiyat",
    },

    {
        prompt: `Huquqiy davlatda davlat boshqaruvi ... asoslanadi.?`,
        options: [
            "qat’iy qonunlarga",
            "parlament nazoratiga",
            "ijro etuvchi hokimiyat qarorlariga",
            "huquqning ustuvorligiga",
        ],
        answer: "huquqning ustuvorligiga",
    },

    {
        prompt: `Asosiy qonun nima ?`,
        options: [
            "Konstitutsiya",
            "Prezident farmoni",
            "Hukumat qarori",
            "Oliy Majlis qonuni",
        ],
        answer: "Konstitutsiya",
    },

    {
        prompt: `O’zbekiston respublikasining  konstituciyasi necha  moddadan iborat ?`,
        options: [
            "128 modda",
            "126  modda",
            "153 modda",
            "155 modda",
        ],
        answer: "155 modda",
    },
];

// Get Dom Elements

let questionsEl =
    document.querySelector(
        "#questions"
    );
let timerEl =
    document.querySelector("#timer");
let choicesEl =
    document.querySelector("#options");
let submitBtn = document.querySelector(
    "#submit-score"
);
let startBtn =
    document.querySelector("#start");
let nameEl =
    document.querySelector("#name");
let feedbackEl = document.querySelector(
    "#feedback"
);
let reStartBtn =
    document.querySelector("#restart");

// Quiz's initial state
let currentQuestionIndex = 0;
let time = questions.length * 15;
let timerId;

// Start quiz and hide frontpage

function quizStart() {
    timerId = setInterval(
        clockTick,
        1000
    );
    timerEl.textContent = time;
    let landingScreenEl =
        document.getElementById(
            "start-screen"
        );
    landingScreenEl.setAttribute(
        "class",
        "hide"
    );
    questionsEl.removeAttribute(
        "class"
    );
    getQuestion();
}

// Loop through array of questions and
// Answers and create list with buttons
function getQuestion() {
    let currentQuestion =
        questions[currentQuestionIndex];
    let promptEl =
        document.getElementById(
            "question-words"
        );
    promptEl.textContent =
        currentQuestion.prompt;
    choicesEl.innerHTML = "";
    currentQuestion.options.forEach(
        function (choice, i) {
            let choiceBtn =
                document.createElement(
                    "button"
                );
            choiceBtn.setAttribute(
                "value",
                choice
            );
            choiceBtn.textContent =
                i + 1 + ". " + choice;
            choiceBtn.onclick =
                questionClick;
            choicesEl.appendChild(
                choiceBtn
            );
        }
    );
}

// Check for right answers and deduct
// Time for wrong answer, go to next question

function questionClick() {
    if (
        this.value !==
        questions[currentQuestionIndex]
            .answer
    ) {
        time -= 10;
        if (time < 0) {
            time = 0;
        }
        timerEl.textContent = time;
        feedbackEl.textContent = `Xato! To'g'ri javob 
        ${questions[currentQuestionIndex].answer}.`;
        feedbackEl.style.color = "red";
    } else {
        feedbackEl.textContent =
            "To'g'ri !";
        feedbackEl.style.color =
            "green";
    }
    feedbackEl.setAttribute(
        "class",
        "feedback"
    );
    setTimeout(function () {
        feedbackEl.setAttribute(
            "class",
            "feedback hide"
        );
    }, 2000);
    currentQuestionIndex++;
    if (
        currentQuestionIndex ===
        questions.length
    ) {
        quizEnd();
    } else {
        getQuestion();
    }
}

// End quiz by hiding questions,
// Stop timer and show final score

function quizEnd() {
    clearInterval(timerId);
    let endScreenEl =
        document.getElementById(
            "quiz-end"
        );
    endScreenEl.removeAttribute(
        "class"
    );
    let finalScoreEl =
        document.getElementById(
            "score-final"
        );
    finalScoreEl.textContent = time;
    questionsEl.setAttribute(
        "class",
        "hide"
    );
}

// End quiz if timer reaches 0

function clockTick() {
    time--;
    timerEl.textContent = time;
    if (time <= 0) {
        quizEnd();
    }
}

// Save score in local storage
// Along with users' name

function saveHighscore() {
    let name = nameEl.value.trim();
    if (name !== "") {
        let highscores =
            JSON.parse(
                window.localStorage.getItem(
                    "highscores"
                )
            ) || [];
        let newScore = {
            score: time,
            name: name,
        };
        highscores.push(newScore);
        window.localStorage.setItem(
            "highscores",
            JSON.stringify(highscores)
        );
        alert(
            "Ballingiz qabul qilindi"
        );
    }
}

// Save users' score after pressing enter

function checkForEnter(event) {
    if (event.key === "Enter") {
        saveHighscore();
        alert(
            "Ballingiz qabul qilindi"
        );
    }
}
nameEl.onkeyup = checkForEnter;

// Save users' score after clicking submit

submitBtn.onclick = saveHighscore;

// Start quiz after clicking start quiz

startBtn.onclick = quizStart;
