const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const sound = document.getElementById("sound");
const btn = document.getElementById("searchBtn");
function playSound(){
    sound.play();
}
btn.addEventListener("click", () =>{
        let wordInput = document.getElementById("wordInput").value;
        console.log(wordInput);
        fetch(`${url}${wordInput}`).then((response) => response.json()).then((data) => {
            console.log(data);
                result.innerHTML = `<div class="result" id="result">
                <div class="word">
                    <h3>${wordInput}</h3>
                </div>
                <div class="detail">
                    <p>${data[0].meanings[0].partOfSpeech}</p>
                    <p>${data[0].phonetic}</p>
                </div>
                <p class="wordMeaning">${data[0].meanings[0].definitions[0].definition}</p>
                <p class="wordExample">${data[0].meanings[0].definitions[0].example || ""}</p>
                </div>`;
            sound.setAttribute("src", `https:${data[0].phonetics[0].audio}`);
        })
        .catch( () => {
            result.innerHTML = `<h3 class = "error">Sorry pal!!, no such word was found.</h3>`
        })
    });
    // Get the input field
var input = document.getElementById("wordInput");

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("searchBtn").click();
  }
});