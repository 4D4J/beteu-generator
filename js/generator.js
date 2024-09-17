const nameDict = {};
console.log(nameDict);

function showLoading() {
    const generationDiv = document.querySelector('.generation');
    const body = document.querySelector('body');
    const txt = document.getElementById('TXT_TROLL');


    generationDiv.style.display = 'flex';
    body.style.opacity = '0.6';
    body.style.zIndex = '3';
    // text qui s'affiche au fur et à mesure du fake chargement
    setTimeout(() => {
        txt.textContent = 'Gender detection 🔎'
    }, 1500);    
    setTimeout(() => {
        txt.textContent = 'Size determination 📐📐'
    }, 3000);    
    setTimeout(() => {
        txt.textContent = 'Result ... 💡'
    }, 5000);

    setTimeout(() => {
        generationDiv.style.display = 'none';
        body.style.opacity = '1';
        body.style.zIndex = '0';
        BeteuSize();
    }, 6500);
}

function BeteuSize() {
    const input = document.getElementById("NAME").value.trim();
    const resultParagraph = document.getElementById("RESULT");
    const commentary = document.getElementById("COM");

    if (!input) {
        return;
    }

    let randomNumber;
    if (nameDict.hasOwnProperty(input)) {
        randomNumber = nameDict[input];
        alert("deja dedans")
    } else {
        randomNumber = (Math.random() * 100 + 1).toFixed();
        nameDict[input] = randomNumber;
    }
    setTimeout(() => {
        resultParagraph.textContent = `💥💥 The size of ${input} is: ${randomNumber} cm 💥💥`;
    },500);
    

    switch (true) {
        case randomNumber < 5:
            commentary.textContent = "Bouhhhhh it's rikiki 😹😹😹";
            break;
        case randomNumber < 10:
            commentary.textContent = "In French, we say 'ptite zizi va ' 🤏";
            break;
        case randomNumber < 20:
            commentary.textContent = "Okkk you're a boss brother 🙏🙏";
            break;
        case randomNumber < 30:
            commentary.textContent = "Waw !! we owe you respect 💪💪💪💪";
            break;
        case randomNumber < 40:
            commentary.textContent = "It's pretty good bro nice size 👍👍";
            break;
        case randomNumber <= 50:
            commentary.textContent = "Sorry Sensei 😮";
            break;
        case randomNumber >= 100:
            commentary.textContent = "Hello penis master 🤯🤯";
            break;
        default:
            commentary.textContent = "";
            break;
    }
}

document.querySelector('.bouton').addEventListener('click', () => {
    const input = document.getElementById("NAME").value.trim();
    if (input) {
        if (nameDict.hasOwnProperty(input)) {
            BeteuSize();
        }else {
            showLoading();
        }
    }
    console.log(nameDict);
});
