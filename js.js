const fromLang = document.getElementById("from-lang");
const toLang = document.getElementById("to-lang");
const btnTranslate = document.getElementById("translate")
const fromText = document.getElementById("fromtext");
const toText = document.getElementById("totext");

for (let i in languages){
    let option = `<option value=${i}>${languages[i]}</option>`;
    fromLang.insertAdjacentHTML("beforeend", option);
    toLang.insertAdjacentHTML("beforeend", option);

    fromLang.value="en-GB";
    toLang.value="es-ES";
}

btnTranslate.addEventListener("click", ()=>{
    const ftext = fromText.value;
    const from = fromLang.value;
    const to = toLang.value;

    const url = `https://api.mymemory.translated.net/get?q=${ftext}&langpair=${from}|${to}`

    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        toText.value = data.responseData.translatedText
    })
})

//text-to-speech
const fromvol = document.getElementById("volumefrom");
const tovol = document.getElementById("volumeto");
const synth = window.speechSynthesis;

fromvol.addEventListener("click", function(e){
    e.preventDefault();
    window.navigator.clipboard.writeText(fromText.value);
    console.log(fromText.value);
    let utterance;
    utterance = new SpeechSynthesisUtterance(fromText.value);
    utterance.lang = fromLang.value;
    speechSynthesis.speak(utterance);
});

tovol.addEventListener("click", function(e){
    e.preventDefault();
    window.navigator.clipboard.writeText(toText.value);
    console.log(toText.value);
    let utterance;
    utterance = new SpeechSynthesisUtterance(toText.value);
    utterance.lang = toLang.value;
    speechSynthesis.speak(utterance);
})

//copy
const fromcopy = document.getElementById("fromcopy");
const tocopy = document.getElementById("tocopy");

fromcopy.addEventListener("click", function(e){
    e.preventDefault();
    console.log("Here is the part you copy:  " + fromText.value);
})
tocopy.addEventListener("click", function(e){
    e.preventDefault();
    console.log("Here is the part you copy:  " + toText.value);
})