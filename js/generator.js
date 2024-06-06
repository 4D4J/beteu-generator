function BeteuSize() {
    var input = document.getElementById("NAME").value.trim();
    var resultParagraph = document.getElementById("RESULT");
    var commentary = document.getElementById("COM");

    // Vérifiez si l'entrée n'est pas vide
    if (input !== "") {
        var randomNumber = (Math.random() * 100 + 1).toFixed();
        resultParagraph.textContent = "the size of this name is : " + randomNumber + " cm";
        switch (true) {
            case randomNumber < 5:
                commentary.textContent = "Bouhhhhh it's rikiki 😹😹😹";
                break;
            case randomNumber < 10:
                commentary.textContent = "In french we say 'ptite zizi va ' 🤏";
                break;
            case randomNumber < 20:
                commentary.textContent = "Okkk you're a boss brother 🙏🙏";
                break;
            case randomNumber < 30:
                commentary.textContent = "Waw !! we owe you respect 💪💪💪💪";
                break;
            case randomNumber < 40:
                commentary.textContent = "It's pretty good bro nice size 👍👍"
            case randomNumber > 50:
                commentary.textContent = "Sorry Sensei 😮";
                break;
            case randomNumber == 100:
                commentary.textContent = "Hello penis master 🤯🤯";
                break;
            default:
                commentary.textContent = "";
                break;
        }
    } else {
        commentary.textContent = ""; // Si l'entrée est vide, effacer le commentaire
    }
}
