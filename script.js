let themeButton = document.getElementById("darkmode");

const arr = ["🫧", "🧼"];

// Step 2: Write the callback function
const toggleDarkMode = () => {
    document.body.classList.toggle("darkMode");
}

themeButton.addEventListener("click", toggleDarkMode);

const scrollPage = () => {
    learnMoreButton.scrollIntoView({ behavior: 'smooth' });
}

const addParticipant = () => {
    // Step 2: Write your code to manipulate the DOM here
    const name = document.getElementById("quote-name").value;

    const p = document.createElement("p");

    const emoji = Math.floor((Math.random() * 2));

    p.textContent = arr[emoji] + " " + name + " submitted a free quote!";
    p.className = "button-font";

    document.getElementById("rsvp-quotes").appendChild(p);

    document.getElementById("overlay").style.display = "flex";

    document.getElementById("modal-text").textContent = "Thanks for using the free quote, " + name + "! We will get back to you with a quote within the next business day."

    setTimeout(() => {
        document.getElementById("overlay").style.display = "none";
}, 5000);

    event.preventDefault();
}

const validateForm = (event) => {
    event.preventDefault();

    let containsErrors = false;

    var rsvpInputs = document.getElementById("quote-form").elements;

    // TODO: Loop through all inputs
    for(let input of rsvpInputs) {
        if(input.type !== "submit" && input.value.trim() === "") {
            containsErrors = true;
            input.style.backgroundColor = "rgba(200, 117, 117, 1)";
        }
        else if (input.type !== "submit") {
            input.style.backgroundColor = "transparent";
        }
    }
    // TODO: Inside loop, validate the value of each input

    // TODO: If no errors, call addParticipant() and clear fields
    if(!(containsErrors)) {
        addParticipant();
        let input = document.getElementById("quote-form");
        input.reset();


    }
}

let submitFormButton = document.getElementById("submit_quote_button");

submitFormButton.addEventListener("click", validateForm);

let learnMoreButton = document.getElementById("id-who-we-are");
